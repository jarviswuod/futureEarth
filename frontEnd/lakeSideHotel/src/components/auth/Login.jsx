import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { handleLogin } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(login);
    if (success) {
      const token = success.token;
      handleLogin(token);

      setSuccessMessage("Login successful");
      setErrorMessage("");

      navigate("/");
      window.location.reload();
    } else {
      setSuccessMessage("");
      setErrorMessage("Invalid username or password. Please try again.");
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

      <h2>Login</h2>
      <Form noValidate validated={isValidated} onSubmit={handleLoginSubmit}>
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

        <div className="form-group mt-2 mb-2">
          <button type="submit" className="btn btn-hotel mr-10">
            Login
          </button>
          <span className="ml-10">
            Don't have an account? <Link to={"/register"}>Register</Link>
          </span>
        </div>
      </Form>
    </section>
  );
};

export default Login;
