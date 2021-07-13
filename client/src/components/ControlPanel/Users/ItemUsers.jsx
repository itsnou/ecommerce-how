import React from "react";
import { Link } from "react-router-dom";
import { StyledUsers } from "../styled.js";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import { editUserStatus } from "../../../redux/actions";
import { getUsers } from "../../../redux/actions/request.js";

const ItemUsers = ({ user }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(editUserStatus(user.email));
        swal("¡Buen trabajo!", "¡Usuario modificado!", "success");
        dispatch(getUsers());
    }
    return (
        <StyledUsers>
            <Link to={`/user/${user._id}`}>
                <li className="name">{user.name} {user.lastname}</li>
            </Link>
            <li className="email">{user.email}</li>
            <li className="status">{user.userStatus}</li>
            {user.userStatus === "Regular" ? <Button variant="contained" onClick={handleClick}>Hacer Admin</Button >:
            <Button className="btn" variant="contained" onClick={handleClick}>Hacer Admin</Button >}
            <Button variant="contained" color="secondary" >X</Button>
        </StyledUsers>
    )
};

export default ItemUsers