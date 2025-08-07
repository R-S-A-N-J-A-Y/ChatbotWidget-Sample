import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import './index.css'; 

const container = document.getElementById('chatbot-root') || document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("❌ No root container found to mount Chatbot.");
}
