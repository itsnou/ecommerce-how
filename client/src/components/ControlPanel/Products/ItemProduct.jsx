import React from "react";
import { Link } from "react-router-dom";
import { StyledProduct } from "../styled.js";
import Button from '@material-ui/core/Button';

const ItemProduct = ({ product }) => {
    return (
        <StyledProduct>
            <Link to={`/admin/editProduct/${product._id}`}>
                <li className="name">{product.name}</li>
            </Link>
            <li className="price">$ {product.price}</li>
            <li className="vineyard">{product.vineyard}</li>
            <li className="stock">{product.stock}<button>-</button><button>+</button></li>
            <br />
            <Button variant="contained">EDITAR</Button>
            <Button variant="contained" color="secondary" >X</Button>
        </StyledProduct>
    )
};

export default ItemProduct