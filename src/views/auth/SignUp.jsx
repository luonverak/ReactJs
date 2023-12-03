import React from "react";
import '../../style/auth/SignUp.css';

const LoginForm = ({ isShowLogin }) => {

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form method="post">
              <div className="header-login">
                  <div className="close-form">
                    <span id="close"><i class="fa-solid fa-xmark"></i></span>
                  </div>
                  <div className="title-login">
                    <h1>Sign In / Register</h1>
                    <p>Easy for checking product and enjoy member-only benefits</p>
                  </div>
              </div>
              <div className="body-login">
                <input type="email" name="" id=""
                  placeholder="Enter your email address" required    />
              </div>
              <div className="btn-login">
                <button type="button">Continue</button>
              </div>
              <div className="footer-lgoin">
                <p>More Sign In Methods</p>
                  <div className="all-logo-login">
                    <img src="assets/images/search.png" width={50} alt="" />
                    <img src="assets/images/facebook.png" width={50} alt="" />
                    <img src="assets/images/twitter.png" width={50} alt="" />
                  </div>

              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;