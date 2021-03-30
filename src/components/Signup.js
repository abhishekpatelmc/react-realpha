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
      <form className="flex">
        <div className="fl-name">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="other">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />

          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div className="social">
        <div>
          <button className="btn" id="google">
            <i class="fab fa-google"></i>
            <label>Sign in with Google</label>
          </button>
          <button className="btn" id="facebook">
            <i class="fab fa-facebook-f"></i>
            <label>Sign in with Facebook </label>
          </button>
          <button className="btn" id="linkedin">
            <i class="fab fa-linkedin-in"></i>
            <label>Sign in with Linkedin</label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sinup;
