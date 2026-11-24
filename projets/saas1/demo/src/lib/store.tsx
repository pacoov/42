import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';
import type { Accent, AppState, DocType, Document, Dossier, Settings, Subcontractor, ThemeMode, Verification } from '../types';
import { DEFAULT_SETTINGS, buildSeed, emptyState } from '../data/seed';
import { newId } from './ids';
import { todayISO } from './dates';
import { docTypeDef } from '../data/docTypes';

/**
 * L'état de toute la démo, en mémoire, sauvegardé dans le localStorage du navigateur.
 * Aucune donnée ne quitte le navigateur. Rien n'est envoyé à un serveur.
 *
 * Deux modes :
 *  - « fictif » : données de démonstration, régénérées chaque jour (dates relatives) ;
 *  - « vide »   : comme à la réception du produit, les saisies sont conservées.
 */

const STORAGE_KEY = 'nexora-demo-state-v2';

type Action =
  | { type: 'ADD_SUBCONTRACTOR'; sub: Omit<Subcontractor, 'id' | 'depositToken' | 'documents' | 'history'>; firstDossier?: Omit<Dossier, 'id' | 'subId' | 'statut'> }
  | { type: 'ADD_DOSSIER'; dossier: Omit<Dossier, 'id' | 'statut'> }
  | { type: 'CLOSE_DOSSIER'; dossierId: string }
  | { type: 'ADD_DOCUMENT'; subId: string; docType: DocType; fileName: string; validUntil: string | null; source: 'interne' | 'lien' }
  | { type: 'MARK_REMINDER'; subId: string; summary: string }
  | { type: 'MARK_LINK_SENT'; subId: string }
  | { type: 'SET_VERIFICATION'; subId: string; docId: string; verification: Verification | undefined }
  | { type: 'ADD_NOTE'; subId: string; label: string }
  | { type: 'UPDATE_SETTINGS'; patch: Partial<Settings> }
  | { type: 'SET_THRESHOLD'; days: number }
  | { type: 'SET_THEME'; theme: ThemeMode }
  | { type: 'SET_ACCENT'; accent: Accent }
  | { type: 'TOGGLE_SIDEBAR'; collapsed?: boolean }
  | { type: 'SET_MODE'; mode: 'fictif' | 'vide' }
  | { type: 'RESET' };

function updateSub(state: AppState, subId: string, fn: (s: Subcontractor) => Subcontractor): AppState {
  return { ...state, subcontractors: state.subcontractors.map((s) => (s.id === subId ? fn(s) : s)) };
}

function reducer(state: AppState, action: Action): AppState {
  const today = todayISO();
  switch (action.type) {
    case 'ADD_SUBCONTRACTOR': {
      const sub: Subcontractor = { ...action.sub, id: newId('st'), depositToken: newId('lien'), documents: [], history: [{ id: newId('ev'), date: today, kind: 'note', label: 'Sous-traitant créé.' }] };
      let next: AppState = { ...state, subcontractors: [...state.subcontractors, sub] };
      if (action.firstDossier) next = reducer(next, { type: 'ADD_DOSSIER', dossier: { ...action.firstDossier, subId: sub.id } });
      return next;
    }
    case 'ADD_DOSSIER': {
      const dossier: Dossier = { ...action.dossier, id: newId('dos'), statut: 'en_cours' };
      const withDossier = { ...state, dossiers: [...state.dossiers, dossier] };
      return updateSub(withDossier, dossier.subId, (s) => ({
        ...s,
        history: [...s.history, { id: newId('ev'), date: today, kind: 'dossier', label: `Dossier ouvert : ${dossier.chantier} (${dossier.montantHT.toLocaleString('fr-FR')} € HT).`, dossierId: dossier.id }],
      }));
    }
    case 'CLOSE_DOSSIER': {
      const d = state.dossiers.find((x) => x.id === action.dossierId);
      if (!d) return state;
      const closed = { ...state, dossiers: state.dossiers.map((x) => (x.id === d.id ? { ...x, statut: 'termine' as const, closedAt: today } : x)) };
      return updateSub(closed, d.subId, (s) => ({ ...s, history: [...s.history, { id: newId('ev'), date: today, kind: 'dossier', label: `Dossier terminé : ${d.chantier}.`, dossierId: d.id }] }));
    }
    case 'ADD_DOCUMENT': {
      const def = docTypeDef(action.docType);
      const doc: Document = { id: newId('doc'), type: action.docType, fileName: action.fileName, receivedAt: today, validUntil: action.validUntil, source: action.source };
      return updateSub(state, action.subId, (s) => ({
        ...s,
        documents: [...s.documents, doc],
        history: [...s.history, { id: newId('ev'), date: today, kind: action.source === 'lien' ? 'depot_lien' : 'document_recu', label: action.source === 'lien' ? `Déposé via le lien : ${def.label} (${action.fileName}).` : `Document ajouté : ${def.label} (${action.fileName}).` }],
      }));
    }
    case 'MARK_REMINDER':
      return updateSub(state, action.subId, (s) => ({ ...s, lastReminderAt: today, history: [...s.history, { id: newId('ev'), date: today, kind: 'relance', label: `Relance marquée comme envoyée : ${action.summary}.` }] }));
    case 'MARK_LINK_SENT':
      return updateSub(state, action.subId, (s) => ({ ...s, linkSentAt: today, history: [...s.history, { id: newId('ev'), date: today, kind: 'lien_envoye', label: 'Lien de dépôt envoyé (simulation).' }] }));
    case 'SET_VERIFICATION':
      return updateSub(state, action.subId, (s) => ({
        ...s,
        documents: s.documents.map((d) => (d.id === action.docId ? { ...d, verification: action.verification } : d)),
        history: [...s.history, { id: newId('ev'), date: today, kind: 'verification', label: action.verification ? `Attestation URSSAF vérifiée manuellement par ${action.verification.by} le ${action.verification.date}${action.verification.comment ? ` — ${action.verification.comment}` : ''}.` : 'Vérification URSSAF retirée.' }],
      }));
    case 'ADD_NOTE':
      return updateSub(state, action.subId, (s) => ({ ...s, history: [...s.history, { id: newId('ev'), date: today, kind: 'note', label: action.label }] }));
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.patch } };
    case 'SET_THRESHOLD':
      return { ...state, settings: { ...state.settings, alertThresholdDays: Math.max(1, Math.min(365, action.days)) } };
    case 'SET_THEME':
      return { ...state, settings: { ...state.settings, theme: action.theme } };
    case 'SET_ACCENT':
      return { ...state, settings: { ...state.settings, accent: action.accent } };
    case 'TOGGLE_SIDEBAR':
      return { ...state, settings: { ...state.settings, sidebarCollapsed: action.collapsed ?? !state.settings.sidebarCollapsed } };
    case 'SET_MODE': {
      if (action.mode === state.mode) return state;
      // On garde les réglages (thème, logo, seuil) mais on remplace les données.
      return action.mode === 'fictif' ? buildSeed(state.settings) : { ...emptyState(state.settings), settings: { ...state.settings, onboardingDismissed: false, welcomeSeen: false } };
    }
    case 'RESET':
      return state.mode === 'fictif' ? buildSeed(state.settings) : emptyState(state.settings);
    default:
      return state;
  }
}

/** Charge l'état sauvegardé. En mode fictif, les données sont régénérées si elles ne datent pas d'aujourd'hui. */
function loadInitialState(): AppState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as AppState;
      if (parsed.version === 2 && Array.isArray(parsed.subcontractors)) {
        const settings = { ...DEFAULT_SETTINGS, ...parsed.settings };
        if (parsed.mode === 'vide') return { ...parsed, settings };
        if (parsed.seededAt === todayISO()) return { ...parsed, settings };
        return buildSeed(settings);
      }
    }
  } catch {
    // localStorage indisponible : on continue en mémoire seulement.
  }
  return buildSeed();
}

const StoreContext = createContext<{ state: AppState; dispatch: (a: Action) => void } | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitialState);
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignoré : la démo fonctionne aussi sans sauvegarde (ex. logo trop lourd pour le quota)
    }
  }, [state]);
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore doit être utilisé dans <StoreProvider>');
  return ctx;
}
