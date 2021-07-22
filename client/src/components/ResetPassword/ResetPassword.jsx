import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOff } from '../../redux/actions';

const ResetPassword= () => {
const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(logOff("off"));
    });

    return(
        <h1>CAMBIAR PASS</h1>
    )
};

export default ResetPassword;