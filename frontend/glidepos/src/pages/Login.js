import React, { useState } from "react";
import "./Login.css";
import httpClient from "../httpClient";

function Login() {
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async () => {
    console.log(email, password);
    try {
      const resp = await httpClient.post("http://127.0.0.1:5000/auth/login", {
        email: email,
        password: password,
      });
      console.log(resp.data);

      if (resp.status === 200) {
        window.location.href = "/home";
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginbody">
      <div className="loginbox">
        <div className="loginleft-image">
          <img src="loginimage.png" alt="image" className="leftimage" />
        </div>
        <div className="logininputarea">
          <div className="loginhlogo">
            <div className="loginlogocontainer flex">
              <img src="logo-green.png" alt="alt" className="loginlogoimg" />
              GLIDE
              <span style={{ color: "#ff4747", fontFamily: "Bebas Neue" }}>
                POS
              </span>
            </div>

            <div className="logintext-welcome">welcome back !!!</div>
            <div className="logintext-login">Log In</div>
          </div>
          <form
            action=""
            className="loginform"
            onSubmit={(e) => {
              e.preventDefault();
              loginUser();
            }}
          >
            <div className="loginuserdatabox">
              <div className="loginindi-input">
                <div className="loginlogo">
                  <i className="fa-solid fa-user"></i>
                </div>
                <input
                  className="logininputemail logininput"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="loginindi-input">
                <div className="loginlogo">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <input
                  className="logininputpassword logininput"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="b">
                <a href="/">Forgot password?</a>
              </div>
            </div>
            <input
              className="logininputsubmit"
              type="submit"
              value="LOGIN ->"
            />
          </form>
          <h3 className="loginh3">
            Don't have an account yet? <a href="/register">Register for free</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
