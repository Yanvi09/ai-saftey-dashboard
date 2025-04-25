// mockData.js
export const mockIncidents = [
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics...",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z",
      location: { lat: 37.7749, lon: -122.4194 }, //  adding location of  USA
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "LLM provided incorrect safety procedure information...",
      severity: "High",
      reported_at: "2025-04-01T14:30:00Z",
      location: { lat: 51.5074, lon: -0.1278 }, // adding location of  UK
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description: "Chatbot inadvertently exposed non-sensitive user metadata...",
      severity: "Low",
      reported_at: "2025-03-20T09:15:00Z",
      location: { lat: 35.6895, lon: 139.6917 }, // adding location of japan
    }
  ];
  