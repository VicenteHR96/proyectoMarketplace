import React, { useContext, useState } from "react";
import {
  faApple,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import RrssBtn from "../../components/rrssBtn/RrssBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../../contexts/Context";
import { ENDPOINT } from "../../config/constans";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const initialForm = { email: "docente@desafiolatam.com", password: "123456" };

const LogSign = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleView = () => {
    setIsSignUp(!isSignUp);
  };

  /* Parte de conexión */

  const navigate = useNavigate();
  const [user, setUser] = useState(initialForm);
  // const { setDeveloper } = useContext(Context);

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = (event) => {
    event.preventDefault();

    if (!user.email.trim() || !user.password.trim()) {
      return window.alert("Email y password obligatorias.");
    }

    if (!emailRegex.test(user.email)) {
      return window.alert("El formato del email no es correcto!");
    }

    axios
      .post(ENDPOINT.login, user)
      .then(({ data }) => {
        window.sessionStorage.setItem("token", data.token);
        window.alert("Usuario identificado con éxito 😀.");
        setDeveloper({});
        navigate("/perfil");
      })
      .catch(({ response: { data } }) => {
        console.error(data);
        window.alert(`${data.message} 🙁.`);
      });
  };

  return (
    <div className="cont-gen-logsign">
      <div className={`container-logsign ${isSignUp ? "active" : ""}`}>
        <SignUp></SignUp>
        <SignIn></SignIn>
        {/* <div className="form-container sign-in">
          <form className="form-logsign" onSubmit={handleForm}>
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
            <input
              value={user.email}
              onChange={handleUser}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
            />
            <input
              value={user.password}
              onChange={handleUser}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div> */}
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
