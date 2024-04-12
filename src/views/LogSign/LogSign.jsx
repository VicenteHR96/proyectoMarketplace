import React, { useState } from "react";
import {
  faApple,
  faFacebook,
  faGithub,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import RrssBtn from "../../components/rrssBtn/RrssBtn";
import { faX } from "@fortawesome/free-solid-svg-icons";

const LogSign = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleView = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="cont-gen-logsign">
      <div className={`container-logsign ${isSignUp ? "active" : ""}`}>
        <div className="form-container sign-up">
          <form className="form-logsign">
            <h1>Create Account</h1>
            <div className="social-icons">
              <RrssBtn
                icon={faFacebook}
                styleIcon={{ color: "3b5998" }}
              ></RrssBtn>
              <RrssBtn icon={faXTwitter}></RrssBtn>
              <RrssBtn
                icon={faGoogle}
                styleIcon={{ color: "#DB4437" }}
              ></RrssBtn>
              <RrssBtn icon={faApple}></RrssBtn>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form className="form-logsign">
            <h1>Sign In</h1>
            <div className="social-icons">
              <RrssBtn
                icon={faFacebook}
                styleIcon={{ color: "3b5998" }}
              ></RrssBtn>
              <RrssBtn icon={faXTwitter}></RrssBtn>
              <RrssBtn
                icon={faGoogle}
                styleIcon={{ color: "#DB4437" }}
              ></RrssBtn>
              <RrssBtn icon={faApple}></RrssBtn>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className={isSignUp ? "btn-logsign" : "hidden btn-logsign"}
                onClick={toggleView}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button
                className={isSignUp ? "hidden btn-logsign" : "btn-logsign"}
                onClick={toggleView}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSign;
