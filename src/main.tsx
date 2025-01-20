import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(<App />);
} else {
    console.error("Root element with ID 'root' not found.");
}
