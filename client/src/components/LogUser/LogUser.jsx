import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from "axios"
import { addUser } from "../../redux/actions/sending";
import { useDispatch } from "react-redux";

// danger {
//    border: red 1px solid;
// }
const LogUser = () => {
    const dispatch = useDispatch();

    
    const responseGoogle = async (response) => {
        console.log(response.profileObj)
            let data={
                name: response.profileObj.givenName,
                email: response.profileObj.email,
                lastName: response.profileObj.familyName,
                userStatus: "Regular",
                password: "12345"
            }
            console.log(data)
           await dispatch(addUser(data))
        
    }
    const responseGoogleFailure = (response) =>{
        alert("Cuenta ya registrada")
    }
    useEffect(() => {
    }, [])

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function validateUser(value) {
        if (!/\S+@\S+\.\S+/.test(value)) {
            setError('el usuario tiene que ser un gmail');
        } else {
            setError('');
        }
        setEmail(value);
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        let data={name: "s",
        lastName: "a",
        email: email,
        userStatus: "Regular",
        password: password};
console.log(data)
     dispatch(addUser(data))

    }

    return (
        <div>
            <form onSubmit= {(e)=>handleSubmit(e)} >
                <input
                    name="email" value={email} placeholder="email" onChange={(e) => validateUser(e.target.value)} />
                {!error ? null : <span>{error}</span>}
                <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit"/>
            </form>
            <br /><br />
            <GoogleLogin
                clientId="262689421829-3o7njoctsh6lj3kcqsk4lhgtphta7233.apps.googleusercontent.com"
                buttonText="Iniciar Sesión"
                onSuccess={responseGoogle}
                onFailure={responseGoogleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>

    )
}
export default LogUser;



