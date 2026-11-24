import { useEffect, useState } from 'react';

/** Routeur minimal basé sur le « hash » de l'URL. Aucune dépendance, aucun serveur à configurer. */
export type Route =
  | { page: 'accueil' }
  | { page: 'dossiers' }
  | { page: 'subcontractor'; id: string }
  | { page: 'newSubcontractor' }
  | { page: 'history'; id: string }
  | { page: 'deposit'; token: string }
  | { page: 'settings' }
  | { page: 'about' };

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'dossiers') return { page: 'dossiers' };
  if (parts[0] === 'sous-traitant' && parts[1] === 'nouveau') return { page: 'newSubcontractor' };
  if (parts[0] === 'sous-traitant' && parts[1]) {
    if (parts[2] === 'historique') return { page: 'history', id: parts[1] };
    return { page: 'subcontractor', id: parts[1] };
  }
  if (parts[0] === 'depot' && parts[1]) return { page: 'deposit', token: parts[1] };
  if (parts[0] === 'reglages') return { page: 'settings' };
  if (parts[0] === 'a-propos') return { page: 'about' };
  return { page: 'accueil' };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export function go(hash: string) {
  window.location.hash = hash;
}

export const href = {
  accueil: () => '#/',
  dossiers: () => '#/dossiers',
  subcontractor: (id: string) => `#/sous-traitant/${id}`,
  newSubcontractor: () => '#/sous-traitant/nouveau',
  history: (id: string) => `#/sous-traitant/${id}/historique`,
  deposit: (token: string) => `#/depot/${token}`,
  settings: () => '#/reglages',
  about: () => '#/a-propos',
};
