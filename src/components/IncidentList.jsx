// src/components/IncidentList.jsx

import React, { useState } from "react";
import { mockIncidents } from "../data/mockData";
import IncidentItem from "./IncidentItem";
import ReportIncidentForm from "./ReportIncidentForm"; // import the form

const IncidentList = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest First");

  const addIncident = (newIncident) => {
    setIncidents([newIncident, ...incidents]);
  };

  const filteredIncidents = incidents.filter((incident) => {
    if (filter === "All") return true;
    return incident.severity === filter;
  });

  const sortedIncidents = filteredIncidents.sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    if (sortOrder === "Newest First") {
      return dateB - dateA;
    }
    return dateA - dateB;
  });

  return (
    <div className="incident-list">
      <ReportIncidentForm addIncident={addIncident} /> {/* Add Form */}

      <div className="controls">
        {/* Filters and Sorting */}
      </div>

      {sortedIncidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;
