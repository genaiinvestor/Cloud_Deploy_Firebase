// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [evaluation, setEvaluation] = useState("");

  const fetchEvaluation = async () => {
    const response = await fetch("https://startup-backend-xyz.a.run.app/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pitch: "AI SaaS for SMBs" })
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
