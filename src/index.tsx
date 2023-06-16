import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CharacterSheetProvider } from 'providers/CharacterSheetProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CharacterSheetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CharacterSheetProvider>
  </React.StrictMode>,
);
