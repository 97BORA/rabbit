import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import './styles/reset.css';
import Wrap from './wrap.tsx';

createRoot(document.getElementById('app')!).render(
    <StrictMode>
        <Wrap />
    </StrictMode>,
);
