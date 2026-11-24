import { useState } from 'react';
import type { DocType } from '../types';
import { Banner } from '../components/Banner';
import { StatusBadge } from '../components/StatusBadge';
import { DOC_TYPES, docTypeDef } from '../data/docTypes';
import { addDays, formatFr, todayISO } from '../lib/dates';
import { docLines } from '../lib/status';
import { useStore } from '../lib/store';

/**
 * « Vue sous-traitant » : ce qu'ouvrirait le lien de dépôt, sans compte.
 * Volontairement sans la navigation de l'application : le sous-traitant ne voit que sa page.
 * Impression de réel : adresse courte affichée, étapes, barre de progression, confirmation.
 * Rien n'est transmis : tout reste dans ce navigateur.
 */
export function DepositPage({ token }: { token: string }) {
  const { state, dispatch } = useStore();
  const sub = state.subcontractors.find((s) => s.depositToken === token);
  const [type, setType] = useState<DocType>('urssaf');
  const [fileName, setFileName] = useState('');
  const [validUntil, setValidUntil] = useState(addDays(todayISO(), docTypeDef('urssaf').defaultValidityDays ?? 180));
  const [progress, setProgress] = useState<number | null>(null);
  const [done, setDone] = useState<string[]>([]);

  if (!sub) return <><Banner /><main className="container deposit"><h1>Lien invalide ou expiré</h1></main></>;
  const lines = docLines(sub, state.settings.alertThresholdDays);
  const missing = lines.filter((l) => l.status !== 'valide').length;
  const shortUrl = `depot.exemple.fr/d/${token.slice(-6).toUpperCase()}`;

  function submit() {
    if (!fileName.trim() || progress !== null) return;
    setProgress(0);
    let p = 0;
    const timer = window.setInterval(() => {
      p += 20;
      setProgress(p);
      if (p >= 100) {
        window.clearInterval(timer);
        dispatch({ type: 'ADD_DOCUMENT', subId: sub!.id, docType: type, fileName: fileName.trim(), validUntil, source: 'lien' });
        setDone((d) => [...d, `${docTypeDef(type).label} — ${fileName.trim()}`]);
        setFileName('');
        setProgress(null);
      }
    }, 120);
  }

  return (
    <div className="deposit-shell">
      <Banner />
      <main className="container deposit">
        <div className="deposit-head">
          {state.settings.logoDataUrl ? <img className="company-logo" src={state.settings.logoDataUrl} alt="" /> : <span className="company-logo company-logo-empty">{state.settings.companyName[0]}</span>}
          <div>
            <div className="small muted">Espace de dépôt sécurisé · {shortUrl}</div>
            <h1>{state.settings.companyName}</h1>
          </div>
        </div>

        <section className="card">
          <p>Bonjour <strong>{sub.contactName || sub.name}</strong>. {state.settings.companyName} a besoin de vos pièces à jour pour vos chantiers en commun. <strong>Aucun compte à créer.</strong> Déposez les documents ci-dessous ; les pièces déjà valides n’ont pas besoin d’être renvoyées.</p>
          <ol className="deposit-steps"><li>Choisissez le type de pièce</li><li>Sélectionnez le fichier</li><li>Indiquez la date de fin de validité inscrite dessus</li></ol>
          <p className="small muted">{missing === 0 ? 'Tout est à jour. Merci !' : `${missing} pièce${missing > 1 ? 's' : ''} attendue${missing > 1 ? 's' : ''}.`}</p>
        </section>

        <section className="card">
          <h2>Pièces demandées</h2>
          <div className="table-wrap"><table className="table">
            <thead><tr><th>Document</th><th>Situation</th></tr></thead>
            <tbody>
              {lines.map((l) => (
                <tr key={l.type}>
                  <td>{docTypeDef(l.type).label}</td>
                  <td>{l.status === 'valide' ? <span className="ok small">✓ reçu, valide jusqu’au {formatFr(l.doc?.validUntil)}</span> : <StatusBadge status={l.status} daysLeft={l.daysLeft} />}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </section>

        <section className="card">
          <h2>Déposer une pièce</h2>
          <form className="form-grid" onSubmit={(e) => { e.preventDefault(); submit(); }}>
            <label>Type de pièce
              <select value={type} onChange={(e) => { const t = e.target.value as DocType; setType(t); setValidUntil(addDays(todayISO(), docTypeDef(t).defaultValidityDays ?? 180)); }}>
                {DOC_TYPES.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
              </select>
            </label>
            <label className="dropzone">
              <input type="file" onChange={(e) => { const f = e.target.files?.[0]; if (f) setFileName(f.name); }} />
              <span>{fileName ? `Fichier : ${fileName}` : 'Cliquez pour choisir un fichier (PDF, JPG, PNG)'}</span>
            </label>
            <input placeholder="ou tapez un nom de fichier pour la démonstration" value={fileName} onChange={(e) => setFileName(e.target.value)} />
            <label>Date de fin de validité indiquée sur le document<input type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} /></label>
            {progress !== null && <div className="progress"><div className="progress-bar" style={{ width: `${progress}%` }} /></div>}
            <div className="row"><button className="btn btn-primary" type="submit" disabled={!fileName.trim() || progress !== null}>{progress !== null ? 'Envoi…' : 'Déposer'}</button></div>
          </form>
          {done.length > 0 && (
            <ul className="done-list">{done.map((d, i) => <li key={i} className="ok">✓ {d} — bien reçu</li>)}</ul>
          )}
          <p className="hint">Démonstration : rien n’est transmis à un serveur, le dépôt est simulé dans ce navigateur. Les attestations URSSAF restent à vérifier par l’entreprise.</p>
        </section>
        <p className="small muted center">Page générée pour {sub.name}. Si vous n’êtes pas concerné, ignorez ce lien.</p>
      </main>
    </div>
  );
}
