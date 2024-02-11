import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "../configs/axios";
function Signup() {
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    axios.post("/signup", {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    })
      .then((res) => {
        window.alert("User created successfully");
        navigator("/login");
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      })
  }
  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h1>Signup</h1>
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Full name</Form.Label>
          <Form.Control required type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Enter password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button onClick={() => navigator("/login")} variant="outline-success">
        Login instead?
      </Button>
    </div>
  );
}

export default Signup;
