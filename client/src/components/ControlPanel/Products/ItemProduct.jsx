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
            <li className="stock">Stock: {product.stock}</li>
            <br />
            <Link to={`/admin/editProduct/${product._id}`}>
                <Button variant="contained">EDITAR</Button>
            </Link>
            <Button variant="contained" color="secondary" >X</Button>
        </StyledProduct>
    )
};

export default ItemProduct