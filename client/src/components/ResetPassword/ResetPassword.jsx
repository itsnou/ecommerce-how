import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword, logOff } from '../../redux/actions';

const ResetPassword = ({ match }) => {
    const [error, setError] = useState("");
    const [password, setPassword] = useState({
        password1: "",
        password2: "",
        code: ""
    });

    const dispatch = useDispatch();

    const validate = (e) => {
        setPassword({ ...password, password2: e.target.value })
        if (password.password1 !== e.target.value) {
            setError("Las contraseñas deben ser iguales");
        } else {
            setError("");
        }

    };

    useEffect(() => {
        dispatch(logOff("off"));
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(match.params.id)
        if (password.code === window.sessionStorage.getItem("code")) {
            dispatch(changePassword(match.params.id, password.password1));
            alert("ok")
        } else {
            alert("codigo de validacion invalido");
        }
        setPassword({
            password1: "",
            password2: "",
            code: ""
        })
    }

    return (
        <div>
            <form className="form-login" onSubmit={handleSubmit}>
                <input
                    name="password1"
                    value={password.password1}
                    placeholder="Ingrese su contraseña"
                    type="password"
                    onChange={(e) => setPassword({ ...password, password1: e.target.value })}
                    required
                />
                <input
                    name="password2"
                    value={password.password2}
                    placeholder="Repita su contraseña"
                    type="password"
                    onChange={validate}
                    required
                />
                {!error ? null : <p>{error}</p>}
                <input
                    name="code"
                    value={password.code}
                    placeholder="Ingrese codigo de verificacion"
                    type="password"
                    onChange={(e) => setPassword({ ...password, code: e.target.value })}
                    required
                />
                <Button type="submit" variant="contained">
                    ENVIAR
                </Button>
            </form>
        </div>
    )
};

export default ResetPassword;