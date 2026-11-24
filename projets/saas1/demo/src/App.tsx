import { StoreProvider, useStore } from './lib/store';
import { useRoute } from './lib/router';
import { useApplyTheme } from './lib/theme';
import { Accueil } from './pages/Accueil';
import { Dossiers } from './pages/Dossiers';
import { SubcontractorPage } from './pages/SubcontractorPage';
import { NewSubcontractorPage } from './pages/NewSubcontractorPage';
import { HistoryPage } from './pages/HistoryPage';
import { DepositPage } from './pages/DepositPage';
import { SettingsPage } from './pages/SettingsPage';
import { AboutPage } from './pages/AboutPage';

/** Choisit la page selon l'URL (#/...) et applique le thème choisi. */
function Router() {
  const route = useRoute();
  const { state } = useStore();
  useApplyTheme(state.settings.theme, state.settings.accent);
  switch (route.page) {
    case 'dossiers': return <Dossiers />;
    case 'subcontractor': return <SubcontractorPage id={route.id} />;
    case 'newSubcontractor': return <NewSubcontractorPage />;
    case 'history': return <HistoryPage id={route.id} />;
    case 'deposit': return <DepositPage token={route.token} />;
    case 'settings': return <SettingsPage />;
    case 'about': return <AboutPage />;
    default: return <Accueil />;
  }
}

export function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}
