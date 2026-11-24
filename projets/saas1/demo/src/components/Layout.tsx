import { useEffect, useState, type ReactNode } from 'react';
import { Banner } from './Banner';
import { href, useRoute } from '../lib/router';
import { useStore } from '../lib/store';
import { buildAlerts } from '../lib/status';

/**
 * Gabarit commun : bandeau, menu latéral rétractable (bouton « Menu »), en-tête avec
 * le logo et le nom de l'entreprise utilisatrice, puis le contenu de la page.
 */
export function Layout({ children, title, actions }: { children: ReactNode; title?: string; actions?: ReactNode }) {
  const { state, dispatch } = useStore();
  const route = useRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Sur téléphone, le menu en superposition affiche toujours les libellés, même si on l'a replié sur ordinateur.
  const collapsed = state.settings.sidebarCollapsed && !mobileOpen;
  const alertCount = buildAlerts(state.subcontractors, state.settings.alertThresholdDays).length;

  // Sur téléphone, le menu se referme à chaque changement de page.
  useEffect(() => setMobileOpen(false), [route]);

  const nav = [
    { h: href.accueil(), label: 'Accueil', icon: '⌂', active: route.page === 'accueil' },
    { h: href.dossiers(), label: 'Dossiers', icon: '▤', active: route.page === 'dossiers' || route.page === 'subcontractor' || route.page === 'history' || route.page === 'newSubcontractor' },
    { h: href.settings(), label: 'Réglages', icon: '⚙', active: route.page === 'settings' },
    { h: href.about(), label: 'À propos', icon: 'ⓘ', active: route.page === 'about' },
  ];

  return (
    <div className={`shell ${collapsed ? 'shell-collapsed' : ''} ${mobileOpen ? 'shell-mobile-open' : ''}`}>
      <aside className="sidebar no-print" aria-label="Menu principal">
        <div className="sidebar-brand">
          <span className="brand-mark">N</span>
          {!collapsed && (
            <span className="brand-text">
              NEXORA
              <small>nom de travail</small>
            </span>
          )}
        </div>
        <nav className="sidebar-nav">
          {nav.map((n) => (
            <a key={n.h} href={n.h} className={n.active ? 'active' : ''} title={n.label}>
              <span className="nav-icon" aria-hidden="true">{n.icon}</span>
              {!collapsed && <span className="nav-label">{n.label}</span>}
              {!collapsed && n.label === 'Accueil' && alertCount > 0 && <span className="nav-count">{alertCount}</span>}
            </a>
          ))}
        </nav>
        <div className="sidebar-foot">
          <a href={href.newSubcontractor()} className="btn btn-primary btn-block" title="Nouveau sous-traitant">
            {collapsed ? '+' : '+ Sous-traitant'}
          </a>
          {!collapsed && (
            <div className="mode-pill" title="Mode de démonstration">
              {state.mode === 'fictif' ? 'Démo : données fictives' : 'Démo : vide'}
            </div>
          )}
          <button className="btn btn-ghost btn-small sidebar-collapse hide-mobile" onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} title={collapsed ? 'Déplier le menu' : 'Replier le menu'}>
            {collapsed ? '»' : '« Replier'}
          </button>
        </div>
      </aside>
      {mobileOpen && <div className="sidebar-backdrop" onClick={() => setMobileOpen(false)} />}

      <div className="main">
        <Banner />
        <header className="topbar no-print">
          <button className="btn btn-ghost menu-btn" onClick={() => (window.innerWidth < 900 ? setMobileOpen(true) : dispatch({ type: 'TOGGLE_SIDEBAR' }))} aria-label="Ouvrir le menu">
            ☰ <span className="hide-mobile">Menu</span>
          </button>
          <a className="company-block" href={href.settings()} title="Modifier le nom et le logo dans les réglages">
            {state.settings.logoDataUrl ? <img className="company-logo" src={state.settings.logoDataUrl} alt="" /> : <span className="company-logo company-logo-empty">{initials(state.settings.companyName)}</span>}
            <span className="company-name">{state.settings.companyName}</span>
          </a>
          <div className="topbar-right">{state.settings.userName}</div>
        </header>
        <main className="container">
          {(title || actions) && (
            <div className="page-head">
              {title && <h1>{title}</h1>}
              {actions && <div className="page-actions">{actions}</div>}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('') || '—';
}
