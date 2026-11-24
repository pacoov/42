// Génère des identifiants courts et uniques pour la session. Suffisant pour une démo.
let counter = 0;
export function newId(prefix = 'id'): string {
  counter += 1;
  return `${prefix}-${Date.now().toString(36)}-${counter}`;
}
