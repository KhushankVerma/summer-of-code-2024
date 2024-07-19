import "./Login.css";

function login() {
  return (
    <div className="loginbody">
      <div className="loginbox">
        <div className="loginleft-image">image</div>
        <div className="logininputarea">
          <div className="loginhlogo">
            <div className="loginlogocontainer">
              <img src="logo-green.png" alt="alt" className="loginlogoimg" />
              GLIDE
              <span style={{ color: "#ff4747", fontFamily: "Bebas Neue" }}>
                POS
              </span>
            </div>

            <div className="logintext-welcome">welcome back !!!</div>
            <div className="logintext-login">Log In</div>
          </div>
          <form action="" className="loginform">
            <div className="loginuserdatabox">
              <div className="loginindi-input">
                <div className="loginlogo">
                  <i className="fa-solid fa-user"></i>
                </div>
                <input
                  className="logininputemail logininput"
                  type="email"
                  placeholder="Email"
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

export default login;
