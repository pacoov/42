import { useState } from 'react';
import { Layout } from '../components/Layout';
import { addDays, todayISO } from '../lib/dates';
import { go, href } from '../lib/router';
import { useStore } from '../lib/store';

/** Création d'un sous-traitant, avec un premier dossier facultatif. */
export function NewSubcontractorPage() {
  const { dispatch } = useStore();
  const [name, setName] = useState('');
  const [trade, setTrade] = useState('');
  const [siret, setSiret] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [withDossier, setWithDossier] = useState(true);
  const [chantier, setChantier] = useState('');
  const [montant, setMontant] = useState('');
  const [debut, setDebut] = useState(todayISO());
  const [fin, setFin] = useState(addDays(todayISO(), 90));

  const montantNum = Number(montant.replace(/\s/g, '').replace(',', '.')) || 0;
  const canSubmit = name.trim().length > 1 && (!withDossier || (chantier.trim() && montantNum > 0));

  return (
    <Layout title="Nouveau sous-traitant">
      <form
        className="card form-grid"
        onSubmit={(e) => {
          e.preventDefault();
          if (!canSubmit) return;
          dispatch({
            type: 'ADD_SUBCONTRACTOR',
            sub: { name: name.trim(), trade: trade.trim(), siret: siret.trim(), contactName: contactName.trim(), email: email.trim(), phone: phone.trim() },
            firstDossier: withDossier ? { chantier: chantier.trim(), montantHT: montantNum, dateDebut: debut, dateFin: fin } : undefined,
          });
          go(href.dossiers());
        }}
      >
        <h2>Identité</h2>
        <div className="grid-2">
          <label>Raison sociale *<input value={name} onChange={(e) => setName(e.target.value)} required placeholder="ex. Plomberie Durand" /></label>
          <label>Métier<input value={trade} onChange={(e) => setTrade(e.target.value)} placeholder="ex. Plomberie / chauffage" /></label>
          <label>SIRET<input value={siret} onChange={(e) => setSiret(e.target.value)} placeholder="14 chiffres" inputMode="numeric" /></label>
          <label>Contact<input value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Prénom Nom" /></label>
          <label>E-mail<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Téléphone<input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" /></label>
        </div>

        <h2>Premier dossier</h2>
        <label className="inline-check"><input type="checkbox" checked={withDossier} onChange={(e) => setWithDossier(e.target.checked)} /> Ouvrir un dossier dès maintenant (un chantier, un montant, des dates)</label>
        {withDossier && (
          <div className="grid-2">
            <label>Chantier *<input value={chantier} onChange={(e) => setChantier(e.target.value)} placeholder="ex. Résidence du Parc — lot plomberie" /></label>
            <label>Montant HT (€) *<input value={montant} onChange={(e) => setMontant(e.target.value)} inputMode="decimal" placeholder="ex. 12 000" />
              {montantNum > 0 && montantNum < 5000 && <span className="small muted">Sous 5 000 € HT, l’obligation de vigilance ne s’applique pas en principe ; le suivi reste possible.</span>}
            </label>
            <label>Début<input type="date" value={debut} onChange={(e) => setDebut(e.target.value)} /></label>
            <label>Fin prévue<input type="date" value={fin} onChange={(e) => setFin(e.target.value)} /></label>
          </div>
        )}

        <div className="row">
          <button className="btn btn-primary" type="submit" disabled={!canSubmit}>Créer</button>
          <a className="btn btn-ghost" href={href.dossiers()}>Annuler</a>
        </div>
      </form>
    </Layout>
  );
}
