import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return;
    setSubmitted(true); // pretend we sent it to the server
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "24rem", borderRadius: "1rem" }}>
        <h3 className="mb-3 fw-bold">Create your account</h3>

        {submitted ? (
          <>
            <div className="alert alert-success">Signup successful! Welcome, {form.name}.</div>
            <div className="text-center">
              <Link to="/" className="btn btn-primary w-100">Go to Login</Link>
            </div>
          </>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                className="form-control"
                placeholder="Your name"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email ID</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                placeholder="you@example.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-control"
                placeholder="Choose a strong password"
                value={form.password}
                onChange={onChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">Sign up</button>

            <div className="text-center small">
              Already have an account?{" "}
              <Link to="/" className="text-decoration-none fw-semibold">Log in</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
