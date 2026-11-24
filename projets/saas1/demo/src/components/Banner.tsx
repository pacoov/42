import { useStore } from '../lib/store';

/** Bandeau discret mais permanent, sur toutes les pages, y compris la page de dépôt et l'impression. */
export function Banner() {
  const { state } = useStore();
  return (
    <div className="banner" role="note">
      {state.mode === 'fictif' ? (
        <>
          <strong>Démonstration</strong> · données fictives · aucun envoi réel
        </>
      ) : (
        <>
          <strong>Démonstration</strong> · vos saisies restent dans ce navigateur · aucun envoi réel
        </>
      )}
    </div>
  );
}
