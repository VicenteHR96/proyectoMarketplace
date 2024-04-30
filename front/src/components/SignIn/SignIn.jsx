import React, { useContext, useState } from "react";
import RrssBtn from "../rrssBtn/RrssBtn";
import {
  faApple,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from "../../config/constans";
import Context from "../../contexts/Context.js";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const initialForm = { email: "docente@desafiolatam.com", password: "123456" };

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleView = () => {
    setIsSignUp(!isSignUp);
  };

  /* Parte de conexión */

  const navigate = useNavigate();
  const [user, setUser] = useState(initialForm);
  const { setDeveloper } = useContext(Context);

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = (event) => {
    event.preventDefault();

    if (!emailRegex.test(user.email)) {
      return window.alert("El formato del email no es correcto!");
    }

    axios
      .post(ENDPOINT.login, user)
      .then(({ data }) => {
        window.sessionStorage.setItem("token", data.token);
        window.alert("Usuario identificado con éxito 😀.");
        setDeveloper({});
        navigate("/");
      })
      .catch(({ response: { data } }) => {
        console.error(data);
        window.alert(`${data.message} 🙁.`);
      });
  };

  return (
    <>
      <div className="form-container sign-in">
        <form className="form-logsign" onSubmit={handleForm}>
          <h1>Iniciar sesión</h1>
          <div className="social-icons">
            <RrssBtn
              icon={faFacebook}
              styleIcon={{ color: "3b5998" }}
            ></RrssBtn>
            <RrssBtn icon={faXTwitter}></RrssBtn>
            <RrssBtn icon={faGoogle} styleIcon={{ color: "#DB4437" }}></RrssBtn>
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
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
