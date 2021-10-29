import React, { useState } from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import { firebaseInitialize } from "../../../firebase/firebase.init";
import { useAuth } from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFighterJet } from "@fortawesome/free-solid-svg-icons";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

firebaseInitialize();

const auth = getAuth();

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCommand, setErrorCommand] = useState("");

  //Destructure from Cntext API
  const { googleSignIn, user,setUser } = useAuth();

  //User Name Value
  const userNameInput = (event) => {
    setUserName(event.target.value);
  };

  //Email Value
  const emailInput = (event) => {
    setEmail(event.target.value);
  };
  //Password Value
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const registrationFormSubmit = (event) => {
    event.preventDefault();
    console.log(userName, email, password.length);

    if (password.length < 8) {
      setErrorCommand("password must have 8 charecter");
      return;
    } else if (
      /(?=(?:[^A-Z]*[A-Z]){2})(?=(?:[^0-9]*[0-9]){2})/.test(password) === false
    ) {
      setErrorCommand("please try with two Upper case and 2 digit");
      return;
    } else {
      setErrorCommand("");
    }
    //Registration for user

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

          setErrorCommand("");
        updateProfile(auth.currentUser, { displayName: userName })
          .then((result) => {
            console.log(result.user);
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(user);
  };

  return (
    <div className="registration-section">
      <div className="reg-form">
        <h1>Please Register</h1>
        <form onSubmit={registrationFormSubmit} action="">
          <input
            type="text"
            placeholder="Enter your Name"
            className="input-field"
            required
            onBlur={userNameInput}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            required
            onBlur={emailInput}
          />
          <br />

          <input
            type="password"
            placeholder="Enter your password"
            required
            className="input-field"
            onBlur={passwordInput}
          />
          <br />
          <p className=" error-command">
            <b>{errorCommand}</b>
          </p>
          <input
            className="btn btn-warning"
            type="Submit"
            className="input-field submit-btn"
          />
          <br />
        </form>
        <h5> Already registered?</h5>{" "}
        <Link to="/login">
          <h3>
            Click Here <span className="text-light">just Login</span>
          </h3>
        </Link>
        <br />
        <h4>----------OR-------</h4>
        <br />
        <button onClick={googleSignIn} className="btn btn-success">
          <b> Sign in with google </b>
          <FontAwesomeIcon icon={faFighterJet} />
        </button>
      </div>
    </div>
  );
};

export default Registration;
