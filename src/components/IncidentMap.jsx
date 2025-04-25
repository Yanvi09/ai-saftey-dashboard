import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { mockIncidents } from "../data/mockData";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const getColor = (severity) => {
  switch (severity) {
    case "High":
      return "#EF4444"; // red-500
    case "Medium":
      return "#F59E0B"; // amber-500
    case "Low":
      return "#10B981"; // emerald-500
    default:
      return "#6B7280"; // gray-500
  }
};

const IncidentMap = () => {
  // State to manage animation trigger
  const [animating, setAnimating] = useState(false);

  // Trigger animation after a short delay
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating((prev) => !prev);
    }, 1000); // Toggle animation every 1 second

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">🌍 AI Incident Map</h2>
      <ComposableMap projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="hover:fill-indigo-200 transition duration-200"
                style={{
                  default: { fill: "#E5E7EB", outline: "none" },
                  hover: { fill: "#A5B4FC", outline: "none" },
                  pressed: { fill: "#6366F1", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {mockIncidents.map((incident) => (
          <Marker
            key={incident.id}
            coordinates={[incident.location.lon, incident.location.lat]}
          >
            <circle
              r={animating ? 8 : 6} // Animate size of the pin
              fill={getColor(incident.severity)}
              stroke="#fff"
              strokeWidth={1.5}
              className={`transition-all duration-1000`} // Smooth transition for size change
            />
            <title>{incident.title} — {incident.severity}</title>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default IncidentMap;
