// src/App.jsx
import React, { useState } from "react";
import { mockIncidents } from "./data/mockData";
import IncidentList from "./components/IncidentList";
import ImpactTimelineGraph from "./components/ImpactTimelineGraph";
import EthicsBot from "./components/EthicsBot"; // Import EthicsBot
import "./App.css";

function App() {
  const [showEthicsBot, setShowEthicsBot] = useState(false); // State to toggle visibility

  const handleToggleEthicsBot = () => {
    setShowEthicsBot(prevState => !prevState); // Toggle state
  };

  return (
    <div className="App">
      <h1>🛡️ AI Safety Incident Dashboard</h1>
      <IncidentList incidents={mockIncidents} />
      <ImpactTimelineGraph incidents={mockIncidents} />

      {/* Button to toggle Ethics Bot */}
      <button 
        onClick={handleToggleEthicsBot} 
        className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
      >
        {showEthicsBot ? "Hide Ethics Bot" : "Show Ethics Bot"}
      </button>

      {/* Conditionally render EthicsBot based on state */}
      {showEthicsBot && <EthicsBot description="Some incident description to analyze" />}
    </div>
  );
}

export default App;
