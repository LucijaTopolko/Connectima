import React, { useState } from "react";
import "../styles/Login.css";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { username, password };
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Wrong username or password!");
          }
          return response.text();
        })
        .then((response) => {
          localStorage.setItem("accessToken", response.token);
          localStorage.setItem("profilePhoto", response.profilePhoto);
          localStorage.setItem("typeOfUser", response.typeOfUser);
          navigate("/");
        })
        .catch(() => {
          setUsername("");
          setPassword("");
          const usernameBox = document.getElementById("username");
          usernameBox.style.borderColor = "red";
          const passwordBox = document.getElementById("password");
          passwordBox.style.borderColor = "red";
        });
  };

  return (
      <div className="login-container">
        <div className="login-container1">
          <img
              alt="image"
              src="https://images.unsplash.com/photo-1490915829216-3f2347b1e830?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxzaW5nZXIlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTcwNzQ3MzUxM3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=1000"
              className="login-image"
          />
          <div className="login-container2">
            <div className="login-container3">
              <div className="login-container4">
                <h1 className="login-text">Log in</h1>
                <h2 className="login-text1">Gather events in one click</h2>
                <label className="login-label">Username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    className="login-textinput"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                />
                <label className="login-label1">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="password"
                    className="login-textinput1"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                />
                <button type="button" className="login-button button" onClick={handleLogin}>
                <span className="login-text2">
                  <span>Log in</span>
                  <br></br>
                </span>
                </button>
                <span className="login-text5">
                Don&apos;t have an account yet?
              </span>
                <Link to="/register" className="login-navlink">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <img alt="image" src="/connectima-1000h.png" className="login-image1" />
        </div>
      </div>
  );
};

export default Login;
