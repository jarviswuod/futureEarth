import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration } from "../utils/ApiFuctions";

import { Form } from "react-bootstrap";

const Registration = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration({ ...registration, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const result = await userRegistration(registration);
      setSuccessMessage(result);
      setErrorMessage("");
      setRegistration({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setErrorMessage(`Registration error : ${error.message}`);
      setSuccessMessage("");
    }
    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 2000);
  };
  return (
    <section className="container col-6 mt-5 mb-5">
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      {successMessage && (
        <p className="alert alert-success">{successMessage}</p>
      )}

      <h2>Registration</h2>
      <Form noValidate validated={isValidated} onSubmit={handleRegistration}>
        <Form.Group>
          <Form.Label htmlFor="firstName">First Name : </Form.Label>
          <Form.Control
            required
            type="text"
            id="firstName"
            name="firstName"
            value={registration.firstName}
            placeholder="Enter your first name"
            onChange={handleInputChange}
          />

          <Form.Control.Feedback type="invalid">
            Please enter your first Name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="lastName">Last Name : </Form.Label>
          <Form.Control
            required
            type="text"
            id="lastName"
            name="lastName"
            value={registration.lastName}
            placeholder="Enter your last name"
            onChange={handleInputChange}
          />

          <Form.Control.Feedback type="invalid">
            Please enter your last Name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email : </Form.Label>
          <Form.Control
            required
            type="email"
            id="email"
            name="email"
            value={registration.email}
            placeholder="Enter a valid email address"
            onChange={handleInputChange}
          />

          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password : </Form.Label>
          <Form.Control
            required
            type="password"
            id="password"
            name="password"
            value={registration.password}
            placeholder="Enter password"
            onChange={handleInputChange}
          />

          <Form.Control.Feedback type="invalid">
            Password cannot be blank
          </Form.Control.Feedback>
        </Form.Group>

        <div className="form-group mt-2 mb-2 mr-20">
          <button type="submit" className="btn btn-hotel">
            Register
          </button>
          <span className="ml-10">
            Already an account? <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </Form>
    </section>
  );
};

export default Registration;
