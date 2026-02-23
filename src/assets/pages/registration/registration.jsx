import React from "react";
import "./registration.css";

function Registration() {
  return (
    <div className="registration-container d-flex align-items-center justify-content-center">
      <form className="form-container container border border-1 border-dark rounded-3 p-4" style={{ maxWidth: "400px" }}>
        <h1>Registration</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Full Name"
          />
          <label htmlFor="floatingName">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="floatingPhone"
            placeholder="Phone Number"
          />
          <label htmlFor="floatingPhone">Phone Number</label>
        </div>
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
          <button type="submit" className="btn btn-primary mt-3 w-100">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
