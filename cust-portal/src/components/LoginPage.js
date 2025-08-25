import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "24rem", borderRadius: "1rem" }}>
        <h3 className="mb-1 fw-bold">Log in</h3>
        <p className="text-muted small mb-3">to your business account</p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-2">
            <label htmlFor="email" className="form-label">User ID (Email)</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Forgot user ID */}
          <div className="text-end mb-3">
            <a href="#" className="text-decoration-none small">Forgot user ID?</a>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot password */}
          <div className="text-end mb-3">
            <a href="#" className="text-decoration-none small">Forgot password?</a>
          </div>

          {/* Remember checkbox */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="form-check-label small">
              Remember my user ID
            </label>
          </div>

          {/* Login button */}
          <button type="submit" className="btn btn-dark w-100 mb-3 rounded-pill">
            Log in
          </button>

          {/* Sign up link (uses Router, no page reload) */}
          <div className="text-center small">
            Need access?{" "}
            <Link to="/signup" className="fw-bold text-decoration-none">
              Register for an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
