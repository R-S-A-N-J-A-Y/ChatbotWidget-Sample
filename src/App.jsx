import { useState } from "react";
import "./App.css"

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chatbot-window">
          <h3>Hello! I’m your assistant</h3>
          <p>Ask me anything.</p>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>
    </div>
  );
};

export default App;
