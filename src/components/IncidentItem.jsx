// src/components/IncidentItem.jsx

import React, { useState } from "react";

const IncidentItem = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="incident-item">
      <h3>{incident.title}</h3>
      <p>{incident.severity} Severity</p>
      <p>{new Date(incident.reported_at).toLocaleDateString()}</p>

      {/* Toggle View Details */}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Hide Details" : "View Details"}
      </button>

      {isExpanded && <p>{incident.description}</p>}
    </div>
  );
};

export default IncidentItem;
