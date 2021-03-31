import logo from "../../asset/company-logo.png";
import { Form, Button, Col } from "react-bootstrap";
import "../signup/signup.css";
import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setFirstName(e.target.value);
    // console.log(e.target.value);
    if (firstName.match(/^[a-zA-Z]*$/) == null) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="company-logo" />
      </div>
      <div className="head">
        <h3>Sign Up for ReAlpa</h3>
      </div>

      <Form>
        <Form.Row>
          <Form.Group as={Col} className="col-md-6">
            <Form.Control
              onChange={handleChange}
              value={firstName}
              type="text"
              className={isValid ? "error-css" : "form-control"}
              id="firstName"
              placeholder="First Name"
              required
            />
          </Form.Group>

          <Form.Group as={Col} className="col-md-6">
            <Form.Control
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="col-12">
            <Form.Control
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </Form.Group>

          <Form.Group className="col-12">
            <Form.Control
              type="password"
              className="form-control"
              id="Password"
              placeholder="password"
              required
            />
          </Form.Group>
          <Form.Group className="col-12">
            <Form.Control
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <div className="col-12 ">
            <Button
              type="submit"
              className="signup btn"
              variant="primary"
              size="lg"
              block
            >
              Sign in
            </Button>
          </div>
        </Form.Row>

        <Form.Row className="social">
          <Button className="btn google" variant="primary" size="lg" block>
            <i className="fab fa-google"></i>
            Sign in with Google
          </Button>
        </Form.Row>
        <Form.Row className="social">
          <Button className="btn facebook" variant="primary" size="lg" block>
            <i className="fab fa-facebook-f"></i>
            Sing in with Facebook
          </Button>
        </Form.Row>
        <Form.Row className="social">
          <Button className="btn linkedin" variant="primary" size="lg" block>
            <i className="fab fa-linkedin-in"></i>
            Sign in with Linkedin
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Signup;
