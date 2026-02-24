import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // fake user for demonstration
  const validUser = { email: "varunkandimalla333@gmail.com", password: "12345" };

  const handleSubmit = (e) => {
    e.preventDefault();                       // don’t reload page
    if (email === validUser.email && password === validUser.password) {
      // success – could set auth state, call context, redirect, etc.
      setError("");
      console.log("logged in!");
      navigate("/", { replace: true });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form
        className="form-container container"
        style={{ maxWidth: "400px" }}
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button type="submit" className="btn btn-primary mt-3 w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
