import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { logIn } from "../../redux/actions/sending";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";

const LogIn = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.loged);
  const history = useHistory();
  useEffect(() => {
    if (loged === "on") {
      history.push("/");
      window.location.reload();
    }
  }, [loged]);

  const responseGoogle = (responseGoogle) => {
    let data = {
      email: responseGoogle.profileObj.email,
      password: responseGoogle.profileObj.googleId,
    };
    dispatch(logIn(data));
  };

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("el usuario tiene que ser un gmail");
    } else {
      setError("");
    }
    setEmail(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    dispatch(logIn(data));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => validateUser(e.target.value)}
        />
        {!error ? null : <span>{error}</span>}
        <input
          name="password"
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        +
        <input type="submit" />
      </form>
      <br />
      <br />
      <GoogleLogin
        clientId="262689421829-3o7njoctsh6lj3kcqsk4lhgtphta7233.apps.googleusercontent.com"
        buttonText="Iniciar sesión con google"
        onSuccess={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
export default LogIn;
