
export default function HomePage({ roomId, setRoomId, userName, setUserName, joinRoom }) {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="d-flex align-items-center py-3">
            <div className="logo">
              <div className="logo-icon">{"<>"}</div>
              <span className="logo-text">CodeInterview</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-4">
        <div className="row align-items-center main-content">
          {/* Left Side - Hero Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="hero-title">
              Conduct Technical Interviews
              <span className="text-primary"> Seamlessly</span>
            </h1>
            <p className="hero-description">
              Real-time code collaboration with integrated video calls. Perfect
              for technical interviews, pair programming, and code reviews.
            </p>

            {/* Features Grid */}
            <div className="row g-3 mb-4">
              <div className="col-6">
                <div className="feature-card feature-blue">
                  <span className="feature-icon">📝</span>
                  <span className="fw-medium">Live Code Editor</span>
                </div>
              </div>
              <div className="col-6">
                <div className="feature-card feature-green">
                  <span className="feature-icon">📹</span>
                  <span className="fw-medium">HD Video Calls</span>
                </div>
              </div>
              <div className="col-6">
                <div className="feature-card feature-purple">
                  <span className="feature-icon">👥</span>
                  <span className="fw-medium">Multi-user Support</span>
                </div>
              </div>
              <div className="col-6">
                <div className="feature-card feature-orange">
                  <span className="feature-icon">⚡</span>
                  <span className="fw-medium">Real-time Sync</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <small className="text-muted">✓ No downloads required</small>
              <small className="text-muted">✓ Works in any browser</small>
              <small className="text-muted">✓ Secure & private</small>
              <small className="text-muted">✓ Free to use</small>
            </div>
          </div>

          
          {/* Right Side - Join Room Form */}
          <div className="col-lg-6">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <div className="form-card">
                <div className="text-center mb-4">
                  <h2 className="form-title">Join Interview Room</h2>
                  <p className="text-muted">
                    Enter your room details to get started
                  </p>
                </div>
                <form>

                  <div className="mb-4">
                    <label htmlFor="roomId" className="form-label fw-medium">
                      Room ID
                    </label>
                    <input
                      id="roomId"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter room ID"
                      value={roomId}
                      onChange={(e) => setRoomId(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-medium">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your full name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>


                  <button
                    onClick={joinRoom}
                    className="btn btn-primary btn-lg w-100 fw-semibold mb-3"
                    disabled={!roomId || !userName}
                  >
                    Join Room
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
            <div className="footer-logo">
              <div className="footer-logo-icon">{"<>"}</div>
              <span className="fw-semibold">CodeInterview</span>
            </div>
            <div className="text-muted">Made by Rahul</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
