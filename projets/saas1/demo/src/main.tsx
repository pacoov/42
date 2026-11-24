// Point d'entrée : polices (fichiers locaux, licence libre), styles, puis montage de l'application.
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/sora';
import '@fontsource-variable/inter';
import { App } from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
