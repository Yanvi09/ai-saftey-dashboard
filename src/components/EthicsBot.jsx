// src/components/EthicsBot.jsx

import React from "react";

const EthicsBot = ({ description }) => {
  const analyzeRisk = (description) => {
    // Lowercase the description for easier comparison
    const lowerDescription = description.toLowerCase();

    // Check for potential issues
    if (lowerDescription.includes("bias") || lowerDescription.includes("discrimination")) {
      return {
        risk: "Potential Bias/Discrimination",
        recommendation: "Ensure the algorithm is fair and inclusive for all demographics.",
      };
    }

    if (lowerDescription.includes("misinformation") || lowerDescription.includes("incorrect")) {
      return {
        risk: "Misinformation Risk",
        recommendation: "Verify the information provided and ensure it is fact-checked.",
      };
    }

    if (lowerDescription.includes("injury") || lowerDescription.includes("harm")) {
      return {
        risk: "Safety Concern",
        recommendation: "Ensure safety protocols are in place and risk of harm is minimized.",
      };
    }

    return {
      risk: "No Immediate Ethical Risks Detected",
      recommendation: "No further action required, but continue monitoring.",
    };
  };

  const { risk, recommendation } = analyzeRisk(description);

  return (
    <div className="border rounded-lg p-4 bg-gray-100">
      <h4 className="text-lg font-semibold mb-2">Ethical Analysis</h4>
      <p className="text-sm text-gray-600">
        <strong>Risk: </strong> {risk}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Recommendation: </strong> {recommendation}
      </p>
    </div>
  );
};

export default EthicsBot;
