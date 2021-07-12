import React from "react";
import { Link } from "react-router-dom";
import { StyledProduct } from "./styled.js";

const ItemUsers = ({ user }) => {
    return (
        <StyledProduct>
            <li className="name">{user.name} {user.lastname}</li> 
            <li className="email">{user.email}</li>           
            {user.address && <li className="adress">{user.address}</li>}
            <br />
            <li className="status">{user.userStatus}</li><button>Modificar</button>            
            <button>X</button>
        </StyledProduct>
    )
};

export default ItemUsers