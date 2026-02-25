import React from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
      password,
    }

    localStorage.setItem("registeredUser", JSON.stringify(userData));
    alert("Registration successful! Please login.");
    navigate("/login", { replace: true });
  };

  return (
    <div className="registration-container d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="form-container container border border-1 border-dark rounded-3 p-4" style={{ maxWidth: "400px" }}>
        <h1>Registration</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Full Name"
            value={name}
            onChange = {(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingName">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="floatingPhone"
            placeholder="Phone Number"
            value = {phone}
            onChange = {(e) => setPhone(e.target.value)}
          />
          <label htmlFor="floatingPhone">Phone Number</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
          <button type="submit" className="btn btn-primary mt-3 w-100">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
