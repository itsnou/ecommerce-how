import React from "react";
import { Link } from "react-router-dom";
import { StyledProduct } from "./styled.js";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import { editUserStatus } from "../../redux/actions/sending.js";
import { getUsers } from "../../redux/actions/request.js";

const ItemUsers = ({ user }) => {
const dispatch=useDispatch();
const handleClick=()=>{
    dispatch(editUserStatus(user.email));
    swal("¡Buen trabajo!", "¡Usuario modificado!", "success");
    dispatch(getUsers());
}
    return (
        <StyledProduct>
            <li className="name">{user.name} {user.lastname}</li> 
            <li className="email">{user.email}</li>           
            {user.address && <li className="adress">{user.address}</li>}
            <br />
            <li className="status">{user.userStatus}</li><Button onClick={handleClick}>Hacer Admin</Button>            
            <Button>X</Button>
        </StyledProduct>
    )
};

export default ItemUsers