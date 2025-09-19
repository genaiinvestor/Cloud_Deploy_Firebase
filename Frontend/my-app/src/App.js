

import React, { useState } from "react";

function App() {
  const [evaluation, setEvaluation] = useState("");

  const fetchEvaluation = async () => {
    const response = await fetch("https://sample-backend-753168549263.us-central1.run.app/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startup_name: "Test Startup",
        description: "AI platform for startup investors",
      }),
    });
    const data = await response.json();
    setEvaluation(data.evaluation);
  };

  return (
    <div>
      <h1>AI Analyst for Startup Evaluation</h1>
      <button onClick={fetchEvaluation}>Evaluate Startup</button>
      <p>{evaluation}</p>
    </div>
  );
}

export default App;
