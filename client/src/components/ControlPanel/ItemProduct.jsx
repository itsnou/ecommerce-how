import React from "react";
import {StyledProduct} from "./styled.js";

const ItemProduct = ({ product }) => {
    return (
        <StyledProduct>
            <li className="name">{product.name}</li>
            <li className="price">{product.price}</li>
            <li className="vineyard">{product.vineyard}</li>
            <li className="stock">{product.stock}<button>-</button><button>+</button></li>
            <br />
            <button>X</button>
        </StyledProduct>
    )
};

export default ItemProduct