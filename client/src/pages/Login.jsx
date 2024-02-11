import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "../configs/axios";

function Login() {
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    axios
      .post("/login", {
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => {
        window.alert("Login successful");
        navigator("/");
      })
      .catch((err) => {
        if(err.response)window.alert(err.response.data.message);
        else window.alert(err.message);
      });
  };
  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h1>Login</h1>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button onClick={() => navigator("/signup")} variant="outline-success">
        Signup instead?
      </Button>
    </div>
  );
}

export default Login;
