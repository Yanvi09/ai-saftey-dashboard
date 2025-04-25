// src/components/IncidentList.jsx

import React, { useState } from "react";
import { mockIncidents } from "../data/mockData";
import IncidentItem from "./IncidentItem"; // assuming you have a separate IncidentItem component

const IncidentList = () => {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest First");

  // Filter incidents based on severity
  const filteredIncidents = mockIncidents.filter((incident) => {
    if (filter === "All") return true;
    return incident.severity === filter;
  });

  // Sort incidents based on date
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
      <div className="controls">
        {/* Severity Filter */}
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        {/* Sorting Control */}
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="Newest First">Newest First</option>
          <option value="Oldest First">Oldest First</option>
        </select>
      </div>

      {/* Render incidents */}
      {sortedIncidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;
