// App.jsx
import React from "react";
import { mockIncidents } from "./data/mockData";
import IncidentList from "./components/IncidentList";
import IncidentMap from "./components/IncidentMap";
import "./App.css";

function App() {
  return (
    <div className="App px-6 py-4 max-w-5xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center">🛡️ AI Safety Incident Dashboard</h1>

      {/* Incident List Section */}
      <IncidentList incidents={mockIncidents} />

      {/* Incident Map Section */}
      <IncidentMap />
    </div>
  );
}

export default App;
