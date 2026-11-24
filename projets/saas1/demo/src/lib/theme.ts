import { useEffect } from 'react';
import type { Accent, ThemeMode } from '../types';

/** Les « directions visuelles » proposées. Chacune définit une couleur principale et une couleur d'accent. */
export const ACCENTS: { id: Accent; label: string; description: string }[] = [
  { id: 'ardoise', label: 'Ardoise & ambre', description: 'Bleu ardoise profond, touches ambre. Sérieux, chaleureux.' },
  { id: 'chantier', label: 'Chantier', description: 'Orange terre cuite sur fonds sable. Énergique, métier.' },
  { id: 'sobre', label: 'Sobre', description: 'Bleu marine classique, gris doux. Discret, administratif.' },
  { id: 'foret', label: 'Forêt', description: 'Vert profond, accents cuivre. Calme, durable.' },
];

export const THEMES: { id: ThemeMode; label: string }[] = [
  { id: 'clair', label: 'Clair' },
  { id: 'sombre', label: 'Sombre' },
  { id: 'systeme', label: 'Selon le système' },
];

function resolve(theme: ThemeMode): 'clair' | 'sombre' {
  if (theme !== 'systeme') return theme;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'sombre' : 'clair';
}

/** Applique le thème et l'accent sur <html> via des attributs data-*, que le CSS lit. */
export function useApplyTheme(theme: ThemeMode, accent: Accent) {
  useEffect(() => {
    const apply = () => {
      document.documentElement.dataset.theme = resolve(theme);
      document.documentElement.dataset.accent = accent;
    };
    apply();
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    mq?.addEventListener('change', apply);
    return () => mq?.removeEventListener('change', apply);
  }, [theme, accent]);
}
