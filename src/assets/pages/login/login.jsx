import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext.jsx";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = localStorage.getItem("registeredUser");
    const registeredUser = stored ? JSON.parse(stored) : null;

    if (
      registeredUser &&
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      login(registeredUser);
      navigate("/");
    } else {
      setError(
        "Invalid email or password."
      );
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
