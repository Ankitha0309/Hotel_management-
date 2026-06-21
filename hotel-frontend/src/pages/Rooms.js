import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({ roomNumber: "", roomType: "", price: "", status: "AVAILABLE" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const response = await api.get("/rooms");
    setRooms(response.data);
  };

  const handleAdd = async () => {
    try {
      await api.post("/rooms", form);
      setMessage("Room added successfully!");
      setForm({ roomNumber: "", roomType: "", price: "", status: "AVAILABLE" });
      fetchRooms();
    } catch (err) {
      setMessage("Error adding room.");
    }
  };

  const handleDelete = async (id) => {
    await api.delete(`/rooms/${id}`);
    fetchRooms();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>🛏️ Rooms</h2>
      <a href="/dashboard" style={{ color: "#4f46e5" }}>← Back to Dashboard</a>

      <div style={{ margin: "20px 0", background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
        <h3>Add New Room</h3>
        <input placeholder="Room Number" value={form.roomNumber}
          onChange={(e) => setForm({ ...form, roomNumber: e.target.value })}
          style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
        <input placeholder="Room Type (SINGLE/DOUBLE/DELUXE/SUITE)" value={form.roomType}
          onChange={(e) => setForm({ ...form, roomType: e.target.value })}
          style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc", width: "250px" }} />
        <input placeholder="Price" value={form.price} type="number"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc", width: "100px" }} />
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}
          style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }}>
          <option value="AVAILABLE">AVAILABLE</option>
          <option value="BOOKED">BOOKED</option>
          <option value="MAINTENANCE">MAINTENANCE</option>
        </select>
        <button onClick={handleAdd}
          style={{ padding: "8px 20px", backgroundColor: "#4f46e5", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Add Room
        </button>
        {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#4f46e5", color: "white" }}>
            <th style={{ padding: "10px" }}>ID</th>
            <th style={{ padding: "10px" }}>Room No</th>
            <th style={{ padding: "10px" }}>Type</th>
            <th style={{ padding: "10px" }}>Price</th>
            <th style={{ padding: "10px" }}>Status</th>
            <th style={{ padding: "10px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>{room.id}</td>
              <td style={{ padding: "10px" }}>{room.roomNumber}</td>
              <td style={{ padding: "10px" }}>{room.roomType}</td>
              <td style={{ padding: "10px" }}>₹{room.price}</td>
              <td style={{ padding: "10px" }}>
                <span style={{ padding: "4px 10px", borderRadius: "12px", backgroundColor: room.status === "AVAILABLE" ? "#d1fae5" : "#fee2e2", color: room.status === "AVAILABLE" ? "#065f46" : "#991b1b" }}>
                  {room.status}
                </span>
              </td>
              <td style={{ padding: "10px" }}>
                <button onClick={() => handleDelete(room.id)}
                  style={{ padding: "6px 14px", backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;