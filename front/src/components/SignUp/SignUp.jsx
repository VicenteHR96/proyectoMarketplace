import React, { useEffect, useState } from "react";
import RrssBtn from "../rrssBtn/RrssBtn";
import {
  faApple,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { ENDPOINT } from "../../config/constans";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const initialForm = {
  email: "docente@desafiolatam.com",
  password: "123456",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialForm);

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = (event) => {
    event.preventDefault();

    if (!user.email.trim() || !user.password.trim()) {
      return window.alert("Todos los campos son obligatorias.");
    }

    if (!emailRegex.test(user.email)) {
      return window.alert("El formato del email no es correcto!");
    }

    axios
      .post(ENDPOINT.users, user)
      .then(() => {
        window.alert("Usuario registrado con éxito.");
        navigate("/login");
      })
      .catch(({ response: { data } }) => {
        console.error(data);
        window.alert(`${data.message}.`);
      });
  };

  // useEffect(() => {
  //   if (window.sessionStorage.getItem("token")) {
  //     navigate("/carrito");
  //   }
  // }, []);

  return (
    <>
      <div className="form-container sign-up">
        <form className="form-logsign" onSubmit={handleForm}>
          <h1>Crea tu cuenta</h1>
          <div className="social-icons">
            <RrssBtn
              icon={faFacebook}
              styleIcon={{ color: "3b5998" }}
            ></RrssBtn>
            <RrssBtn icon={faXTwitter}></RrssBtn>
            <RrssBtn icon={faGoogle} styleIcon={{ color: "#DB4437" }}></RrssBtn>
            <RrssBtn icon={faApple}></RrssBtn>
          </div>
          <span>or use your email for registeration</span>
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
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
