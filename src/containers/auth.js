import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";
import TextField from "@material-ui/core/TextField";
import "./Auth.css";

function Auth({ setUser, clicked, user }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setUser();
        clicked();
        history.push("/clothing/shirts");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        setUser();
        clicked();
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="title">Sign in</h1>
        <form className="login__form">
          <TextField
            id="outlined"
            label="E-mail"
            variant="outlined"
            color="secondary"
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            className="login__input"
          />
          <br />
          <br />
          <TextField
            id="outlined-secondary"
            label="Password"
            variant="outlined"
            color="secondary"
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="login__input"
          />
        </form>
        <button onClick={login} type="submit" className="login__signInButton">
          Sign in
        </button>
        <p
          style={{
            fontSize: "60%",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "5px",
          }}
        >
          By signing-in here, you agree to SHOPMAN Page Terms & Conditions
        </p>

        <button onClick={register} className="login__registerButton">
          Create a new SHOPMAN account
        </button>
      </div>
    </div>
  );
}
export default Auth;
