import React, { useRef } from "react";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { editUserStatus } from "../../../redux/actions";
import { getUsers } from "../../../redux/actions";
import swal from 'sweetalert';

const ItemUsers = ({ user, match }) => {
    const fixed = useRef(match.params.id);
    const dispatch=useDispatch();

    const handleClick=()=>{
        dispatch(editUserStatus(user.email));
        swal("¡Buen trabajo!", "¡Usuario modificado!", "success");
        dispatch(getUsers());
    }
    
    return (
        <>
            <li className="name">Nombre: {user.name} {user.lastname}</li>
            <li className="email">Email: {user.email}</li>
            {user.address && <li className="adress">Direccion: {user.address}</li>}
            <br />
            {user.orders.length > 0 && (
                <>
                    <li> Ordenes:
                        {user.orders.map(u => <li>{u}</li>)}
                    </li>
                </>)}
            <li className="status">{user.userStatus}</li><Button variant="contained" onClick={handleClick}>Hacer Admin</Button>
            <Button variant="contained" color="secondary" >Eliminar Usuario</Button>
            <Button variant="contained" color="secondary" >Forzar reinicio de contraseña</Button>
        </>
    )
};

export default ItemUsers