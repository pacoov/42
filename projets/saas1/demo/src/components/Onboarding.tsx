import { href } from '../lib/router';
import { useStore } from '../lib/store';
import { currentDoc } from '../lib/status';

/**
 * « Premiers pas » : en mode vide, une liste d'étapes qui se cochent toutes seules
 * au fur et à mesure que l'utilisateur fait les choses. Tutoriel sans vidéo ni pop-ups en cascade.
 */
export function Onboarding() {
  const { state, dispatch } = useStore();
  const s = state.settings;
  const subs = state.subcontractors;
  const steps = [
    { done: s.companyName !== 'Votre entreprise' || !!s.logoDataUrl, label: 'Renseignez le nom de votre entreprise et, si vous en avez un, votre logo', h: href.settings(), hint: 'Réglages → Identité' },
    { done: subs.length > 0, label: 'Ajoutez votre premier sous-traitant', h: href.newSubcontractor(), hint: 'Bouton « + Sous-traitant » dans le menu' },
    { done: state.dossiers.length > 0, label: 'Ouvrez un dossier : le chantier, le montant, les dates', h: subs[0] ? href.subcontractor(subs[0].id) : href.newSubcontractor(), hint: 'Sur la fiche du sous-traitant, « Nouveau dossier »' },
    { done: subs.some((x) => x.documents.length > 0), label: 'Ajoutez ses documents avec leur date de fin de validité, ou envoyez-lui le lien de dépôt', h: subs[0] ? href.subcontractor(subs[0].id) : href.newSubcontractor(), hint: 'Fiche → « Ajouter un document » ou « Lien de dépôt »' },
    { done: subs.some((x) => currentDoc(x, 'urssaf')?.verification), label: 'Vérifiez l’attestation URSSAF sur urssaf.fr, puis cochez « vérifiée »', h: subs[0] ? href.subcontractor(subs[0].id) : href.newSubcontractor(), hint: 'La vérification est faite par vous, l’outil la consigne' },
    { done: s.alertThresholdDays !== 30, label: 'Réglez le seuil d’alerte (30 jours par défaut) selon votre rythme', h: href.settings(), hint: 'Réglages → Alertes ; facultatif' },
  ];
  const doneCount = steps.filter((x) => x.done).length;

  return (
    <section className="card card-onboarding">
      <div className="card-head">
        <h2>Premiers pas · {doneCount}/{steps.length}</h2>
        <button className="btn btn-ghost btn-small" onClick={() => dispatch({ type: 'UPDATE_SETTINGS', patch: { onboardingDismissed: true } })}>Masquer</button>
      </div>
      <ol className="steps">
        {steps.map((st, i) => (
          <li key={i} className={st.done ? 'done' : ''}>
            <span className="step-check" aria-hidden="true">{st.done ? '✓' : i + 1}</span>
            <div>
              <a href={st.h}>{st.label}</a>
              <div className="small muted">{st.hint}</div>
            </div>
          </li>
        ))}
      </ol>
      <p className="hint">Les statuts (valide, expire bientôt, expiré, manquant) se calculent tout seuls à partir des dates que vous saisissez. Rien n’est vérifié auprès d’un organisme à votre place.</p>
    </section>
  );
}
