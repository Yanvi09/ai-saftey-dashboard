// src/components/IncidentList.jsx

import React from "react";
import { mockIncidents } from "../data/mockData";

const severityColors = {
  High: "bg-red-500 text-white",
  Medium: "bg-yellow-400 text-black",
  Low: "bg-green-400 text-black",
};

const IncidentList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">AI Safety Incidents</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Title</th>
              <th className="p-3">Severity</th>
              <th className="p-3">Reported Date</th>
            </tr>
          </thead>
          <tbody>
            {mockIncidents.map((incident) => (
              <tr key={incident.id} className="border-t">
                <td className="p-3">{incident.title}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      severityColors[incident.severity]
                    }`}
                  >
                    {incident.severity}
                  </span>
                </td>
                <td className="p-3">
                  {new Date(incident.reported_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncidentList;
