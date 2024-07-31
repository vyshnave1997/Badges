// src/App.js
import React from "react";
import Badge from "./Badge";
import "./Badge.css"; // Import CSS for badge styling

const App = () => {
  return (
    <div
      className="App"
      style={{ padding: "20px", backgroundColor: "#121212", color: "#fff" }}
    >
      <h1>Badge Component Example</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Badge text="Default" />
          <Badge text="Small" size="small" color="#007bff" />
          <Badge text="Medium" size="medium" color="#28a745" />
          <Badge text="Large" size="large" color="#dc3545" />
          <Badge text="Rounded" color="#ffc107" rounded />
        </div>
        <h2>Animated Badges</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <Badge text="Pulse" color="#007bff" animated />
          <Badge text="Bounce" color="#dc3545" animated />
        </div>
      </div>
    </div>
  );
};

export default App;
