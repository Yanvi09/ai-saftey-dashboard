// components/EthicsBot.jsx
import React from 'react';

const EthicsBot = ({ description }) => {
  const analyzeEthics = (text) => {
    const issues = [];

    // Check for bias-related keywords
    if (/discriminatory|biased|favor/i.test(text)) {
      issues.push('Potential Bias in Algorithm');
    }

    // Check for misinformation-related keywords
    if (/incorrect|false|misleading/i.test(text)) {
      issues.push('Possible Misinformation Spread');
    }

    // Check for injury-related keywords
    if (/harm|injury|danger/i.test(text)) {
      issues.push('Potential Harm or Injury Risk');
    }

    if (issues.length === 0) {
      return 'No immediate ethical concerns detected.';
    }

    return `Ethical Concerns: ${issues.join(', ')}`;
  };

  return (
    <div className="ethics-bot">
      <h3>🤖 Ethics Advisor Bot</h3>
      <p>{analyzeEthics(description)}</p>
    </div>
  );
};

export default EthicsBot;
