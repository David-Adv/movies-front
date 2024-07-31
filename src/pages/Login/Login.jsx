import React, { useState } from "react";
import "./login.css";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import axios from "axios";

export const Login = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction("active");
  };

  const loginLink = () => {
    setAction("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({ formData });
    const formProps = Object.fromEntries(formData);
    console.log({ formProps });

    let url = "";

    if (action === "active") {
      console.log("users");
      // Registration form
      url = "http://localhost:3000/users";
    } else {
      console.log("login");
      // Login form
      url = "http://localhost:3000/login";
    }

    try {
      console.log(formProps);
      const response = await axios.post(url, formProps);
      sessionStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      alert("datos invalidos");
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className="input-box">
              <input type="text" name="email" placeholder="Email" required />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <FaLock className="icon" />
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                Don't have an account?
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(), registerLink();
                  }}
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>registration</h1>

            <div className="input-box">
              <input
                type="text"
                name="user_name"
                placeholder="UserName"
                required
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input type="email" name="email" placeholder="Email" required />
              <FaEnvelope className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <FaLock className="icon" />
            </div>
            <button type="submit">Register</button>

            <div className="register-link">
              <p>
                Already have an account{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(), loginLink();
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
