// src/components/LoginPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real auth call
    alert(`Logging in:\nEmail: ${email}\nRemember: ${remember}`);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* logo (put a file public/brand-logo.png if you want) */}
        <img src="/brand-logo.png" alt="brand" className="brand-logo" onError={(e)=>{e.target.style.display='none'}} />

        <div className="auth-title">Welcome back</div>
        <div className="auth-sub">Sign in to manage your account</div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label small-link">Email ID</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* forgot user id */}
          <div className="text-end mb-3">
            <a href="#" className="small-link text-decoration-none">Forgot user ID?</a>
          </div>

          {/* Password with eye */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label small-link">Password</label>
            <div className="input-group">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-describedby="togglePassword"
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="togglePassword"
                onClick={() => setShowPassword(s => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.359 11.238 3.354 1.232 2.293 2.293l2.217 2.217A7.07 7.07 0 0 0 1 8s2.5 4.5 7 4.5c1.275 0 2.393-.303 3.34-.81l2.066 2.066 1.061-1.061-1.108-1.107Zm-3.02.02A5.77 5.77 0 0 1 8 11.5C5.399 11.5 3.54 9.87 2.64 8.79a10.45 10.45 0 0 1 2.41-2.028l.842.842A3 3 0 0 0 8 11a3 3 0 0 0 2.339-1.742Z"/>
                    <path d="M10.79 7.67 8.33 5.21A3 3 0 0 1 10.79 7.67Z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8Z"/>
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="#fff"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* forgot password */}
          <div className="text-end mb-3">
            <a href="#" className="small-link text-decoration-none">Forgot password?</a>
          </div>

          {/* remember me */}
          <div className="form-check mb-3">
            <input type="checkbox" id="rememberMe" className="form-check-input" checked={remember} onChange={e => setRemember(e.target.checked)} />
            <label htmlFor="rememberMe" className="form-check-label small-link">Remember my user ID</label>
          </div>

          {/* login button */}
          <div className="d-grid mb-3">
            <button type="submit" className="auth-btn">Log in</button>
          </div>


          <div className="form-footer text-center">
            Don’t have an account? <Link to="/signup" className="text-decoration-none fw-bold">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}