// App.jsx
import React from "react";
import { mockIncidents } from "./data/mockData";
import IncidentList from "./components/IncidentList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>🛡️ AI Safety Incident Dashboard</h1>
      <IncidentList incidents={mockIncidents} />
    </div>
  );
}

export default App;
