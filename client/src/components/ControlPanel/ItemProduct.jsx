import React from "react";
import { Link } from "react-router-dom";
import { StyledProduct } from "./styled.js";

const ItemProduct = ({ product }) => {
    return (
        <StyledProduct>
            <Link to={`/product/${product._id}`}>
                <li className="name">{product.name}</li>
            </Link>
            <li className="price">$ {product.price}</li>
            <li className="vineyard">{product.vineyard}</li>
            <li className="stock">{product.stock}<button>-</button><button>+</button></li>
            <br />
            <button>EDITAR</button>
            <button>X</button>
        </StyledProduct>
    )
};

export default ItemProduct