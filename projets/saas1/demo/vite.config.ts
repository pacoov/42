import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` : les chemins du build sont relatifs, pour que le dossier dist/
// puisse être ouvert ou servi depuis n'importe quel sous-dossier.
export default defineConfig({
  plugins: [react()],
  base: './',
});
