import { useState } from 'react';
import type { DocType, Subcontractor } from '../types';
import { Layout } from '../components/Layout';
import { Modal } from '../components/Modal';
import { StatusBadge } from '../components/StatusBadge';
import { Timeline } from '../components/Timeline';
import { DOC_TYPES, docTypeDef } from '../data/docTypes';
import { addDays, daysUntil, formatFr, todayISO } from '../lib/dates';
import { href } from '../lib/router';
import { currentDoc, docLines, docsToRequest } from '../lib/status';
import { useStore } from '../lib/store';

/** Fiche sous-traitant : identité, dossiers, documents, vérification URSSAF, ajout, relance, lien de dépôt, historique. */
export function SubcontractorPage({ id }: { id: string }) {
  const { state } = useStore();
  const sub = state.subcontractors.find((s) => s.id === id);
  if (!sub) return <Layout title="Sous-traitant introuvable"><a href={href.dossiers()}>← Retour aux dossiers</a></Layout>;
  return <SubcontractorView sub={sub} />;
}

function SubcontractorView({ sub }: { sub: Subcontractor }) {
  const { state, dispatch } = useStore();
  const threshold = state.settings.alertThresholdDays;
  const lines = docLines(sub, threshold);
  const toRequest = docsToRequest(sub, threshold);
  const dossiers = state.dossiers.filter((d) => d.subId === sub.id);
  const enCours = dossiers.filter((d) => d.statut === 'en_cours');
  const [showNewDossier, setShowNewDossier] = useState(false);
  const [showAddDoc, setShowAddDoc] = useState(false);
  const [showLink, setShowLink] = useState(false);

  return (
    <Layout
      title={sub.name}
      actions={
        <>
          <button className="btn" onClick={() => setShowAddDoc(true)}>+ Document</button>
          <button className="btn" onClick={() => setShowNewDossier(true)}>+ Dossier</button>
          <a className="btn btn-ghost" href={href.history(sub.id)}>Dossier de preuve</a>
        </>
      }
    >
      <a className="no-print back" href={href.dossiers()}>← Dossiers</a>

      <div className="grid-main">
        <div className="col">
          <section className="card">
            <h2>Documents attendus</h2>
            <div className="table-wrap"><table className="table">
              <thead><tr><th>Document</th><th className="hide-mobile">Fichier</th><th>Valide jusqu’au</th><th>Statut</th></tr></thead>
              <tbody>
                {lines.map((l) => {
                  const def = docTypeDef(l.type);
                  return (
                    <tr key={l.type}>
                      <td>{def.label}<div className="small muted">{def.legal ? 'Pièce légale (D8222-5 / D8254-2)' : 'Pratique du bâtiment'}</div></td>
                      <td className="hide-mobile">{l.doc ? <>{l.doc.fileName}<div className="small muted">reçu le {formatFr(l.doc.receivedAt)}{l.doc.source === 'lien' ? ' · via le lien' : ''}</div></> : '—'}</td>
                      <td>{formatFr(l.doc?.validUntil)}</td>
                      <td><StatusBadge status={l.status} daysLeft={l.daysLeft} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table></div>
            <p className="hint">Les pièces « pratique du bâtiment » ne sont pas exigées par l’art. D8222-5 ; elles figurent ici parce que la plupart des entreprises les demandent.</p>
          </section>

          <UrssafVerification sub={sub} />

          <section className="card">
            <h2>Relance</h2>
            <ReminderPanel sub={sub} toRequest={toRequest.map((l) => l.type)} />
          </section>
        </div>

        <div className="col col-side">
          <section className="card">
            <h2>Identité</h2>
            <dl className="dl">
              <dt>Métier</dt><dd>{sub.trade || '—'}</dd>
              <dt>SIRET</dt><dd>{sub.siret || '—'}</dd>
              <dt>Contact</dt><dd>{sub.contactName || '—'}</dd>
              <dt>E-mail</dt><dd>{sub.email || '—'}</dd>
              <dt>Téléphone</dt><dd>{sub.phone || '—'}</dd>
            </dl>
          </section>

          <section className="card">
            <div className="card-head"><h2>Dossiers</h2><button className="btn btn-small" onClick={() => setShowNewDossier(true)}>+ Nouveau</button></div>
            {dossiers.length === 0 ? <p className="muted small">Aucun dossier. Un dossier = un chantier, un montant, des dates.</p> : (
              <ul className="dossier-list">
                {[...enCours, ...dossiers.filter((d) => d.statut === 'termine')].map((d) => {
                  const fin = daysUntil(d.dateFin);
                  return (
                    <li key={d.id} className={d.statut === 'termine' ? 'muted' : ''}>
                      <div className="strong">{d.chantier}</div>
                      <div className="small">{d.montantHT.toLocaleString('fr-FR')} € HT · {formatFr(d.dateDebut)} → {formatFr(d.closedAt ?? d.dateFin)}{d.statut === 'termine' ? ' · terminé' : fin < 0 ? ' · fin dépassée' : fin <= threshold ? ` · se termine dans ${fin} j` : ''}</div>
                      {d.statut === 'en_cours' && <button className="btn btn-ghost btn-small" onClick={() => { if (window.confirm(`Terminer le dossier « ${d.chantier} » ?`)) dispatch({ type: 'CLOSE_DOSSIER', dossierId: d.id }); }}>Terminer</button>}
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <section className="card">
            <h2>Lien de dépôt</h2>
            <p className="small muted">Le sous-traitant dépose ses pièces sans créer de compte. {sub.linkSentAt ? <>Lien envoyé le <strong>{formatFr(sub.linkSentAt)}</strong>.</> : 'Pas encore envoyé.'}</p>
            <div className="row">
              <button className="btn btn-primary btn-small" onClick={() => setShowLink(true)}>Envoyer le lien…</button>
              <a className="btn btn-small" href={href.deposit(sub.depositToken)} target="_blank" rel="noreferrer">Voir la page du sous-traitant</a>
            </div>
          </section>

          <section className="card">
            <div className="card-head"><h2>Historique</h2><a className="btn btn-small btn-ghost" href={href.history(sub.id)}>Tout voir</a></div>
            <Timeline events={sub.history.slice(-5)} />
          </section>
        </div>
      </div>

      {showAddDoc && <Modal title="Ajouter un document" onClose={() => setShowAddDoc(false)}><AddDocumentForm subId={sub.id} onDone={() => setShowAddDoc(false)} /></Modal>}
      {showNewDossier && <Modal title="Nouveau dossier" onClose={() => setShowNewDossier(false)}><NewDossierForm subId={sub.id} onDone={() => setShowNewDossier(false)} /></Modal>}
      {showLink && <Modal title="Envoyer le lien de dépôt" onClose={() => setShowLink(false)}><SendLinkPanel sub={sub} onDone={() => setShowLink(false)} /></Modal>}
    </Layout>
  );
}

/** Ajout d'un document : le fichier n'est pas stocké, seul son nom est gardé. */
function AddDocumentForm({ subId, onDone }: { subId: string; onDone: () => void }) {
  const { dispatch } = useStore();
  const [type, setType] = useState<DocType>('urssaf');
  const def = docTypeDef(type);
  const [fileName, setFileName] = useState('');
  const [validUntil, setValidUntil] = useState<string>(def.defaultValidityDays ? addDays(todayISO(), def.defaultValidityDays) : '');
  const [noEnd, setNoEnd] = useState(false);

  function onTypeChange(t: DocType) {
    setType(t);
    const d = docTypeDef(t);
    setValidUntil(d.defaultValidityDays ? addDays(todayISO(), d.defaultValidityDays) : '');
  }

  return (
    <form className="form-grid" onSubmit={(e) => { e.preventDefault(); if (!fileName.trim()) return; dispatch({ type: 'ADD_DOCUMENT', subId, docType: type, fileName: fileName.trim(), validUntil: noEnd ? null : validUntil || null, source: 'interne' }); onDone(); }}>
      <label>Type de document
        <select value={type} onChange={(e) => onTypeChange(e.target.value as DocType)}>{DOC_TYPES.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}</select>
        <span className="small muted">{def.help}</span>
      </label>
      <label>Fichier
        <input type="file" onChange={(e) => { const f = e.target.files?.[0]; if (f) setFileName(f.name); }} />
        <input placeholder="ou tapez un nom, ex. attestation-vigilance.pdf" value={fileName} onChange={(e) => setFileName(e.target.value)} />
        <span className="small muted">Démonstration : le contenu du fichier n’est ni lu ni enregistré, seul son nom est conservé.</span>
      </label>
      <label>Valide jusqu’au
        <input type="date" value={validUntil} disabled={noEnd} onChange={(e) => setValidUntil(e.target.value)} />
        <span className="inline-check small"><input type="checkbox" checked={noEnd} onChange={(e) => setNoEnd(e.target.checked)} /> pas de date de fin connue</span>
      </label>
      <div className="row"><button className="btn btn-primary" type="submit" disabled={!fileName.trim()}>Ajouter</button><button className="btn btn-ghost" type="button" onClick={onDone}>Annuler</button></div>
    </form>
  );
}

function NewDossierForm({ subId, onDone }: { subId: string; onDone: () => void }) {
  const { dispatch } = useStore();
  const [chantier, setChantier] = useState('');
  const [montant, setMontant] = useState('');
  const [debut, setDebut] = useState(todayISO());
  const [fin, setFin] = useState(addDays(todayISO(), 90));
  const montantNum = Number(montant.replace(/\s/g, '').replace(',', '.')) || 0;
  return (
    <form className="form-grid" onSubmit={(e) => { e.preventDefault(); if (!chantier.trim() || montantNum <= 0) return; dispatch({ type: 'ADD_DOSSIER', dossier: { subId, chantier: chantier.trim(), montantHT: montantNum, dateDebut: debut, dateFin: fin } }); onDone(); }}>
      <label>Chantier *<input value={chantier} onChange={(e) => setChantier(e.target.value)} placeholder="ex. Résidence du Parc — lot plomberie" autoFocus /></label>
      <label>Montant HT (€) *<input value={montant} onChange={(e) => setMontant(e.target.value)} inputMode="decimal" placeholder="ex. 12 000" />
        {montantNum > 0 && montantNum < 5000 && <span className="small muted">Sous 5 000 € HT, l’obligation de vigilance ne s’applique pas en principe ; le suivi reste possible.</span>}
      </label>
      <div className="grid-2">
        <label>Début<input type="date" value={debut} onChange={(e) => setDebut(e.target.value)} /></label>
        <label>Fin prévue<input type="date" value={fin} onChange={(e) => setFin(e.target.value)} /></label>
      </div>
      <div className="row"><button className="btn btn-primary" type="submit" disabled={!chantier.trim() || montantNum <= 0}>Ouvrir le dossier</button><button className="btn btn-ghost" type="button" onClick={onDone}>Annuler</button></div>
    </form>
  );
}

/** Relance : génère un aperçu du message, rien n'est envoyé ; l'utilisateur marque l'envoi lui-même. */
function ReminderPanel({ sub, toRequest }: { sub: Subcontractor; toRequest: DocType[] }) {
  const { state, dispatch } = useStore();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DocType[]>(toRequest);
  const [copied, setCopied] = useState(false);
  const message = buildReminderMessage(sub, selected, state.settings.companyName, state.settings.userName);

  if (toRequest.length === 0) return <p className="all-good">✓ Rien à réclamer : tous les documents attendus sont valides.</p>;

  return (
    <div>
      <p>À réclamer : <strong>{toRequest.map((t) => docTypeDef(t).short).join(', ')}</strong>.{sub.lastReminderAt && <> Dernière relance marquée le <strong>{formatFr(sub.lastReminderAt)}</strong>.</>}</p>
      {!open ? (
        <button className="btn btn-primary" onClick={() => { setSelected(toRequest); setOpen(true); }}>Préparer la relance…</button>
      ) : (
        <div className="reminder">
          <fieldset><legend>Documents à mentionner</legend>
            {toRequest.map((t) => (
              <label key={t} className="inline-check"><input type="checkbox" checked={selected.includes(t)} onChange={(e) => setSelected(e.target.checked ? [...selected, t] : selected.filter((x) => x !== t))} />{docTypeDef(t).label}</label>
            ))}
          </fieldset>
          <label>Aperçu du message (à copier dans votre messagerie)<textarea readOnly rows={11} value={message} /></label>
          <div className="row">
            <button className="btn" type="button" onClick={() => navigator.clipboard?.writeText(message).then(() => setCopied(true)).catch(() => undefined)}>{copied ? 'Copié ✓' : 'Copier le texte'}</button>
            <button className="btn btn-primary" type="button" disabled={selected.length === 0} onClick={() => { dispatch({ type: 'MARK_REMINDER', subId: sub.id, summary: selected.map((t) => docTypeDef(t).short).join(', ') }); setOpen(false); }}>Marquer « relance envoyée le {formatFr(todayISO())} »</button>
            <button className="btn btn-ghost" type="button" onClick={() => setOpen(false)}>Annuler</button>
          </div>
          <p className="hint">Aucun e-mail ni SMS ne part d’ici. Vous envoyez le message vous-même, puis vous notez que c’est fait.</p>
        </div>
      )}
    </div>
  );
}

function buildReminderMessage(sub: Subcontractor, types: DocType[], companyName: string, userName: string): string {
  const list = types.map((t) => `  - ${docTypeDef(t).label}`).join('\n');
  return [
    `Objet : Documents à mettre à jour — ${sub.name}`, '',
    `Bonjour ${sub.contactName || ''},`.replace(' ,', ','), '',
    `Pour poursuivre notre collaboration, nous avons besoin des pièces suivantes, à jour :`, list, '',
    `Vous pouvez les déposer en quelques minutes, sans créer de compte, sur votre page de dépôt (lien envoyé séparément) ou nous les transmettre en réponse à ce message.`, '',
    `Merci d’avance,`, `${userName} — ${companyName}`,
  ].join('\n');
}

/** Envoi (simulé) du lien de dépôt : aperçu de l'e-mail, puis marquage « envoyé ». */
function SendLinkPanel({ sub, onDone }: { sub: Subcontractor; onDone: () => void }) {
  const { state, dispatch } = useStore();
  const url = `${window.location.origin}${window.location.pathname}${href.deposit(sub.depositToken)}`;
  const body = [
    `Objet : Vos documents pour ${state.settings.companyName}`, '',
    `Bonjour ${sub.contactName || ''},`.replace(' ,', ','), '',
    `Pour nos chantiers en commun, merci de déposer vos pièces (attestation URSSAF, Kbis, assurances) sur votre page de dépôt. Aucun compte à créer, deux minutes suffisent :`, '',
    url, '',
    `Merci d’avance,`, `${state.settings.userName} — ${state.settings.companyName}`,
  ].join('\n');
  return (
    <div className="form-grid">
      <p className="small muted">Démonstration : l’e-mail ci-dessous n’est pas envoyé. Vous pouvez le copier dans votre messagerie, puis marquer le lien comme envoyé.</p>
      <label>Destinataire<input value={sub.email || '(aucun e-mail renseigné)'} readOnly /></label>
      <label>Aperçu<textarea readOnly rows={11} value={body} /></label>
      <div className="row">
        <button className="btn" onClick={() => navigator.clipboard?.writeText(body).catch(() => undefined)}>Copier</button>
        <button className="btn btn-primary" onClick={() => { dispatch({ type: 'MARK_LINK_SENT', subId: sub.id }); onDone(); }}>Marquer comme envoyé</button>
        <a className="btn btn-ghost" href={href.deposit(sub.depositToken)} target="_blank" rel="noreferrer">Ouvrir la page</a>
      </div>
    </div>
  );
}

/** Vérification URSSAF manuelle : qui, quand, commentaire. Jamais automatique. */
function UrssafVerification({ sub }: { sub: Subcontractor }) {
  const { state, dispatch } = useStore();
  const doc = currentDoc(sub, 'urssaf');
  const [by, setBy] = useState(state.settings.userName);
  const [date, setDate] = useState(todayISO());
  const [comment, setComment] = useState('');

  return (
    <section className="card card-urssaf">
      <h2>Vérification de l’attestation URSSAF</h2>
      <p className="hint">Vérification <strong>manuelle</strong> : vous saisissez le code de sécurité de l’attestation sur urssaf.fr, puis vous consignez ici que c’est fait. Aucune connexion automatique à l’URSSAF.</p>
      {!doc ? (
        <p className="muted">Aucune attestation URSSAF au dossier : rien à vérifier.</p>
      ) : doc.verification ? (
        <div className="verified">
          <p>✔ « {doc.fileName} » vérifiée par <strong>{doc.verification.by}</strong> le <strong>{formatFr(doc.verification.date)}</strong>{doc.verification.comment && <> — « {doc.verification.comment} »</>}</p>
          <button className="btn btn-ghost btn-small" onClick={() => dispatch({ type: 'SET_VERIFICATION', subId: sub.id, docId: doc.id, verification: undefined })}>Retirer la vérification</button>
        </div>
      ) : (
        <form className="form-grid" onSubmit={(e) => { e.preventDefault(); dispatch({ type: 'SET_VERIFICATION', subId: sub.id, docId: doc.id, verification: { by, date, comment } }); setComment(''); }}>
          <p className="small">Attestation « {doc.fileName} », reçue le {formatFr(doc.receivedAt)}, valide jusqu’au {formatFr(doc.validUntil)}. <strong className="bad">Non vérifiée.</strong></p>
          <div className="grid-2">
            <label>Vérifiée par<input value={by} onChange={(e) => setBy(e.target.value)} required /></label>
            <label>Le<input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /></label>
          </div>
          <label>Commentaire (facultatif)<input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="ex. code saisi sur urssaf.fr, attestation valide" /></label>
          <div className="row"><button className="btn btn-primary" type="submit">Cocher « attestation vérifiée »</button></div>
        </form>
      )}
    </section>
  );
}
