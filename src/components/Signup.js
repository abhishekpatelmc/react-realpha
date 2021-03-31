import logo from "../asset/company-logo.png";

const Sinup = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="company-logo" />
      </div>
      <div className="head">
        <h3>Sign Up for ReAlpa</h3>
      </div>

      <form className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-12">
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="password"
            required
          />
        </div>
        <div className="col-12">
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div className="col-12 d-grid">
          <button type="submit" className="singup btn btn-primary">
            Sign in
          </button>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary social google" type="button">
            <i className="fab fa-google"></i>
            Sign in with Google
          </button>
          <button className="btn btn-primary social facebook" type="button">
            <i className="fab fa-facebook-f"></i>
            Sing in with Facebook
          </button>
          <button className="btn btn-primary social linkedin" type="button">
            <i className="fab fa-linkedin-in"></i>
            Sign in with Linkedin
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sinup;
