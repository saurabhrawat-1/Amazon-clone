import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { stateContext } from "../../StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const globalContext = useContext(stateContext);
  const { dispatch } = globalContext;

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    dispatch({
      type: "SET_USER",
      user: email,
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
        <div className="dotIn__container">
          <div className="dot__in">.in</div>
        </div>
      </Link>

      <div className="login__container">
        <h3>Sign-In</h3>
        <form>
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
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to <b>Fake Amazon's</b>{" "}
          <span>
            <a href="#">Condition of Use</a>
          </span>{" "}
          and{" "}
          <span>
            <a href="#">privacy Notice</a>
          </span>
        </p>
      </div>
      <div className="for__registration">
        <span className="left"></span>
        <span className="center">New to Amazon?</span>
        <span className="right"></span>
      </div>
      <Link to="/login/registration">
        <button className="login__registerButton">
          Create your Amazon account
        </button>
      </Link>
    </div>
  );
}

export default Login;
