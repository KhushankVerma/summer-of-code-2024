import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="registerbody">
      <div className="registerbox">
        <div className="registerimage">image</div>
        <div className="registerinnerbox">
          <div className="registerstart">
            <div className="registerlogo">
              <img src="logo-green.png" className="registerlogoimg" />
              GLIDE
              <span style={{ color: "#ff4747", fontFamily: "Bebas Neue" }}>
                POS
              </span>
            </div>
            <div className="registertext-createaccount">Create an account</div>
            <div className="registertext-register">Sign Up</div>
          </div>
          <div className="registerform">
            <form className="rgform" action="">
              <div className="registertoggle">
                <input
                  type="radio"
                  className="btn btn-check btn-sm"
                  name="options-base"
                  id="option5"
                  autocomplete="off"
                  checked
                />
                <label className="btn btn-sm" htmlFor="option5">
                  Cashier
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="options-base"
                  id="option6"
                  autocomplete="off"
                />
                <label className="btn btn-sm" htmlFor="option6">
                  Admin
                </label>
              </div>
              <div className="registerindi-input">
                <div className="icon">
                  <i className="fa-solid fa-user"> </i>
                </div>
                <input
                  className="registerinput registerinputtext"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="registerindi-input">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <input
                  className="registerinput registerinputemail"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="registerindi-input">
                <div className="icon">
                  <i className="fa-solid fa-lock"> </i>
                </div>
                <input
                  className="registerinput registerinputpassword"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <input
                className="registerinput registerinputsubmit"
                type="submit"
                value="SIGN UP->"
              />
            </form>
          </div>
          <div className="registerend">
            Already have an account <a href="/login">Login here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
