// src/components/IncidentItem.jsx
import React, { useState } from "react";
import EthicsBot from "./EthicsBot"; // Import EthicsBot component

const IncidentItem = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="incident-item border p-4 mb-4 rounded-lg bg-white shadow-lg">
      <h3 className="text-xl font-semibold">{incident.title}</h3>
      <p className="text-sm text-gray-600">{incident.severity} Severity</p>
      <p className="text-sm text-gray-500">
        Reported on {new Date(incident.reported_at).toLocaleDateString()}
      </p>

      {/* Toggle View Details */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 hover:underline"
      >
        {isExpanded ? "Hide Details" : "View Details"}
      </button>

      {/* Display Incident Description if Expanded */}
      {isExpanded && (
        <>
          <p className="mt-2">{incident.description}</p>
          {/* Render EthicsBot and pass description */}
          <EthicsBot description={incident.description} />
        </>
      )}
    </div>
  );
};

export default IncidentItem;
