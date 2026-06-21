import React from "react";

function Dashboard() {
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🏨 Hotel Dashboard</h1>
      <p>Welcome! Role: <strong>{role}</strong></p>
      <nav style={{ marginBottom: "20px" }}>
        <a href="/rooms" style={{ marginRight: "20px", color: "#4f46e5" }}>Rooms</a>
        <button onClick={handleLogout} style={{ backgroundColor: "#ef4444", color: "white", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" }}>Logout</button>
      </nav>
    </div>
  );
}

export default Dashboard;