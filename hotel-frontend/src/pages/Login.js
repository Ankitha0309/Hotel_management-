import React, { useState } from "react";
import api from "../api/axiosConfig";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/auth/login", { username, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        window.location.href = "/dashboard";
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Login failed. Check if backend is running.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f2f5" }}>
      <div style={{ background: "white", padding: "40px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", width: "350px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "24px", color: "#1a1a2e" }}>🏨 Hotel Management</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "16px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
        />
        {error && <p style={{ color: "red", marginBottom: "12px" }}>{error}</p>}
        <button
          onClick={handleLogin}
          style={{ width: "100%", padding: "10px", backgroundColor: "#4f46e5", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;