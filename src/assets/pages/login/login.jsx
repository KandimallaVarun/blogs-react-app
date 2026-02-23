import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form className="form-container container" style={{ maxWidth: "400px" }}>
        <h1>Login</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
          <button type="submit" className="btn btn-primary mt-3 w-100">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
