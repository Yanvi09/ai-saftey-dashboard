// src/components/ReportIncidentForm.jsx

import React, { useState } from "react";

const ReportIncidentForm = ({ addIncident }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError("All fields are required.");
      return;
    }
    addIncident({ title, description, severity, reported_at: new Date() });
    setTitle("");
    setDescription("");
    setSeverity("Low");
    setError("");
  };

  return (
    <div className="report-incident-form">
      <h3>Report New Incident</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Incident Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Incident Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Report Incident</button>
      </form>
    </div>
  );
};

export default ReportIncidentForm;
