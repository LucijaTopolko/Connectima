import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "../styles/Register.css";


const Register = () => {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [organiser, setOrganiser] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = { username, email, address, typeOfUser: typeOfUser ? 1 : 0, password };
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Entered username or email is taken already!");
          }
          return response.text();
        })
        .then((response) => {
          localStorage.setItem("accessToken", response);
          localStorage.setItem("profilePhoto", response.profilePhoto);
          localStorage.setItem("typeOfUser", response.typeOfUser);
          navigate("/");
        })
        .catch(() => {
          setUsername("");
          setPassword("");
          const usernameBox = document.getElementById("username");
          usernameBox.style.borderColor = "red";
          const emailBox = document.getElementById("email");
          emailBox.style.borderColor = "red";
        });
  };

  function handleCheckboxClick() {
    setOrganiser(!organiser);
  }


  return (
    <div className="register-container">
      <div className="register-container1">
        <div className="register-container2">
          <div className="register-container3">
            <div className="register-container4">
              <h1 className="register-text">Sign up</h1>
              <h2 className="register-text1">Gather events in one click</h2>
              <label className="register-label">Username</label>
              <input
                type="text"
                placeholder="username"
                className="register-textinput input"
                value={username}
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <label className="register-label">E-mail</label>
              <input
                  type="text"
                  placeholder="email"
                  className="register-textinput input"
                  value={email}
                  id={"email"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
              />
              <label className="register-label">Password</label>
              <input
                type="password"
                placeholder="password"
                className="register-textinput input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label className="register-label">Address</label>
              <input
                  type="text"
                  placeholder="address"
                  className="register-textinput input"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
              />
              <div className="register-checkbox-container" onClick={handleCheckboxClick}>
                <input type="checkbox" className="register-checkbox"
                       checked={organiser}/>
                <label htmlFor="terms-checkbox" className="register-checkbox-label">Register as organizer</label>
              </div>
              <button type="button" className="register-button button" onClick={handleRegister}>
                <span className="register-text2">
                  <span>Sign up</span>
                  <br></br>
                </span>
              </button>
              <span className="register-text5">
                Already have an account?
              </span>
              <Link to="/login" className="register-navlink">
                Log in
              </Link>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1490915829216-3f2347b1e830?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxzaW5nZXIlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTcwNzQ3MzUxM3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=1000"
          className="register-image"
        />
        <img
          alt="image"
          src="/connectima-1000h.png"
          className="register-image1"
        />
      </div>
    </div>
  )
}

export default Register
