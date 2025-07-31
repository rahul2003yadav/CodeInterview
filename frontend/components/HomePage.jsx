// src/components/home.jsx
import React from "react";

const HomePage = ({ roomId, setRoomId, userName, setUserName, joinRoom }) => {
  return (
    <main className="join-container">
      <div className="hero-section">
        <span className="card-icon mb-4">⚡</span>
        <h1 className="display-4">Real-time Code Editor</h1>
        <p className="lead">
          Collaborate on code in real-time with friends and colleagues. Share your room ID and start coding together
          instantly.
        </p>
      </div>

      {/* Join Form */}
      <div className="custom-card shadow-xl">
        <div className="custom-card-header">
          <h2 className="custom-card-title">Get Started</h2>
        </div>
        <div className="custom-card-content">
          <input
            type="text"
            className="custom-input"
            placeholder="Room ID (required)"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            className="custom-input"
            placeholder="Your Name (required)"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={joinRoom} className="custom-button py-3" disabled={!roomId || !userName}>
            Join Room
          </button>
        </div>
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="feature-card">
          <span className="card-icon">🚀</span>
          <h3 className="card-title">Performant</h3>
          <p className="card-content">
            Experience seamless, low-latency collaboration with real-time updates as you type.
          </p>
        </div>
        <div className="feature-card">
          <span className="card-icon">✅</span>
          <h3 className="card-title">Reliable</h3>
          <p className="card-content">
            Built on robust WebSocket technology, ensuring stable connections and automatic reconnections.
          </p>
        </div>
        <div className="feature-card">
          <span className="card-icon">👥</span>
          <h3 className="card-title">Multi-user & Multi-language</h3>
          <p className="card-content">
            Collaborate with multiple users simultaneously across various programming languages.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
