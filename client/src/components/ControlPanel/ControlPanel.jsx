import React, { useEffect, useState } from 'react';
import { StyledPanel } from './styled.js';
import Orders from './Orders.jsx';
import Users from './Users.jsx';
import Products from './Products.jsx';
import { useSelector } from 'react-redux';
import ItemProduct from './ItemProduct.jsx';



const ControlPanel = () => {
    const products = useSelector(state => state.products);
    const [visual, setVisual] = useState({
        products: false,
    })



    return (
        <StyledPanel>
            <div className="panel">
                <Orders visual={visual} setVisual={setVisual} />
                <Users visual={visual} setVisual={setVisual} />
                <Products visual={visual} setVisual={setVisual} />
            </div >
            <div className="content">
                {visual.products && products.map(p => <ItemProduct product={p} />)}
            </div>
        </StyledPanel>
    )
};

export default ControlPanel;