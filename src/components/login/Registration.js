import React, { useState } from "react";
import "./Registration.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Registration() {
  const [f_name, setFname] = useState("");
  const [l_name, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/login");
        }
      })
      .catch((error) => alert(error.message));

    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registration">
      <Link to="/">
        <img
          className="registration__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
        <div className="dotIn__container">
          <div className="dot__in">.in</div>
        </div>
      </Link>
      <div className="registration__container">
        <h3>Create your Account</h3>
        <form>
          <h6>First Name</h6>
          <input
            type="text"
            value={f_name}
            onChange={(e) => setFname(e.target.value)}
          />
          <h6>Last Name</h6>
          <input
            type="text"
            value={l_name}
            onChange={(e) => setLname(e.target.value)}
          />
          <h6>Email</h6>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h6>Password</h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signinButton"
            onClick={register}
          >
            Continue
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Sign in</Link>
          </span>{" "}
          <br />
          Buying for work
          <span>
            <Link to="#">Create a free business account</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Registration;
