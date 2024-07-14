import "./Login.css";

function login() {
  return (
    <div className="loginbox">
      <div className="left-image">image</div>
      <div className="inputarea">
        <div className="hlogo">
          <div className="logocontainer">
            <img src="logo-green.png" alt="alt" className="logoimg" />
            GLIDE
            <span style={{ color: "#ff4747", fontFamily: "Bebas Neue" }}>
              POS
            </span>
          </div>

          <div className="text-welcome">welcome back !!!</div>
          <div className="text-login">Log In</div>
        </div>
        <form action="">
          <div className="userdatabox">
            <div className="indi-input">
              <div className="logo">
                <i className="fa-solid fa-user"></i>
              </div>
              <input type="email" placeholder="Email" />
            </div>
            <div className="indi-input">
              <div className="logo">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <div className="b">
              <a href="/">Forgot password?</a>
            </div>
          </div>
          <input type="submit" value="LOGIN ->" />
        </form>
        <h3>
          Don't have an account yet?{" "}
          <a href="Register.html">Register for free</a>
        </h3>
      </div>
    </div>
  );
}

export default login;
