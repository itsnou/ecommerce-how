import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { addUser } from "../../redux/actions/sending";
import { useDispatch, useSelector } from "react-redux";

const LogUser = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const created = useSelector((state) => state.created);
  const dispatch = useDispatch();

  const responseGoogle = (responseGoogle) => {
    let data = {
      name: responseGoogle.profileObj.givenName,
      email: responseGoogle.profileObj.email,
      lastName: responseGoogle.profileObj.familyName,
      password: responseGoogle.profileObj.googleId,
    };
    dispatch(addUser(data));
  };

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("el usuario tiene que ser un gmail");
    } else {
      setError("");
    }
    setEmail(value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: "HARDCODE",
      lastName: "HARDCODE",
      email: email,
      password: password,
    };
    dispatch(addUser(data));
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
        buttonText="Crear cuenta con Google"
        onSuccess={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
export default LogUser;
