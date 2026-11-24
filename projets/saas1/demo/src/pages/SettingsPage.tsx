import { useState } from 'react';
import { Layout } from '../components/Layout';
import { ACCENTS, THEMES } from '../lib/theme';
import { useStore } from '../lib/store';

const MAX_LOGO_BYTES = 400 * 1024;

/** Réglages : identité et logo, apparence (thème, couleurs), alertes, mode de démonstration. */
export function SettingsPage() {
  const { state, dispatch } = useStore();
  const s = state.settings;
  const [userName, setUserName] = useState(s.userName);
  const [companyName, setCompanyName] = useState(s.companyName);
  const [logoError, setLogoError] = useState<string | null>(null);

  function onLogo(file: File | undefined) {
    setLogoError(null);
    if (!file) return;
    if (!file.type.startsWith('image/')) { setLogoError('Choisissez une image (PNG, JPG, SVG).'); return; }
    if (file.size > MAX_LOGO_BYTES) { setLogoError('Image trop lourde : 400 Ko maximum pour cette démonstration.'); return; }
    const reader = new FileReader();
    reader.onload = () => dispatch({ type: 'UPDATE_SETTINGS', patch: { logoDataUrl: String(reader.result) } });
    reader.readAsDataURL(file);
  }

  return (
    <Layout title="Réglages">
      <section className="card">
        <h2>Identité</h2>
        <div className="grid-2">
          <label>Nom de votre entreprise<input value={companyName} onChange={(e) => setCompanyName(e.target.value)} /></label>
          <label>Votre nom (affiché dans les vérifications)<input value={userName} onChange={(e) => setUserName(e.target.value)} /></label>
        </div>
        <div className="row">
          <button className="btn btn-primary" onClick={() => dispatch({ type: 'UPDATE_SETTINGS', patch: { userName: userName.trim() || 'Vous', companyName: companyName.trim() || 'Votre entreprise' } })}>Enregistrer</button>
        </div>
        <h3>Logo</h3>
        <div className="logo-row">
          {s.logoDataUrl ? <img className="logo-preview" src={s.logoDataUrl} alt="Logo" /> : <div className="logo-preview logo-empty">Aucun logo</div>}
          <div>
            <input type="file" accept="image/*" onChange={(e) => onLogo(e.target.files?.[0])} />
            {s.logoDataUrl && <button className="btn btn-ghost btn-small" onClick={() => dispatch({ type: 'UPDATE_SETTINGS', patch: { logoDataUrl: null } })}>Retirer le logo</button>}
            {logoError && <div className="small bad">{logoError}</div>}
            <div className="small muted">Le logo reste dans ce navigateur. Format carré ou horizontal, 400 Ko maximum.</div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Apparence</h2>
        <h3>Mode</h3>
        <div className="choice-row">
          {THEMES.map((t) => (
            <button key={t.id} className={`choice ${s.theme === t.id ? 'active' : ''}`} onClick={() => dispatch({ type: 'SET_THEME', theme: t.id })}>{t.label}</button>
          ))}
        </div>
        <h3>Couleurs</h3>
        <div className="accent-grid">
          {ACCENTS.map((a) => (
            <button key={a.id} className={`accent-card ${s.accent === a.id ? 'active' : ''}`} data-accent-preview={a.id} onClick={() => dispatch({ type: 'SET_ACCENT', accent: a.id })}>
              <span className="accent-swatches"><span className="sw sw-primary" /><span className="sw sw-accent" /><span className="sw sw-surface" /></span>
              <span className="strong">{a.label}</span>
              <span className="small muted">{a.description}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Alertes</h2>
        <label className="inline">
          Prévenir quand un document expire dans moins de&nbsp;
          <input type="number" min={1} max={365} className="input-short" value={s.alertThresholdDays} onChange={(e) => dispatch({ type: 'SET_THRESHOLD', days: Number(e.target.value) })} />
          &nbsp;jours (30 par défaut).
        </label>
      </section>

      <section className="card">
        <h2>Mode de démonstration</h2>
        <p className="muted small">
          {state.mode === 'fictif'
            ? 'Mode actuel : données fictives, régénérées chaque jour pour garder des dates cohérentes. Les modifications sont conservées dans ce navigateur jusqu’au lendemain.'
            : 'Mode actuel : vide, comme à la réception du produit. Vos saisies sont conservées dans ce navigateur.'}
        </p>
        <div className="row">
          {state.mode === 'fictif' ? (
            <button className="btn" onClick={() => { if (window.confirm('Passer en mode vide ? Les données fictives seront retirées ; vos réglages (nom, logo, thème) sont conservés.')) dispatch({ type: 'SET_MODE', mode: 'vide' }); }}>Désactiver les données fictives (mode vide)</button>
          ) : (
            <button className="btn" onClick={() => { if (window.confirm('Charger les données fictives ? Vos saisies actuelles seront remplacées.')) dispatch({ type: 'SET_MODE', mode: 'fictif' }); }}>Activer les données fictives</button>
          )}
          <button className="btn btn-danger" onClick={() => { if (window.confirm('Réinitialiser ? Les données du mode actuel reviennent à leur état initial.')) dispatch({ type: 'RESET' }); }}>Réinitialiser</button>
          {state.mode === 'vide' && s.onboardingDismissed && <button className="btn btn-ghost" onClick={() => dispatch({ type: 'UPDATE_SETTINGS', patch: { onboardingDismissed: false, welcomeSeen: false } })}>Réafficher le tutoriel</button>}
        </div>
      </section>
    </Layout>
  );
}
