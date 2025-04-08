
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('School website loaded successfully!');
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Current path:', window.location.pathname);

createRoot(document.getElementById("root")!).render(<App />);
