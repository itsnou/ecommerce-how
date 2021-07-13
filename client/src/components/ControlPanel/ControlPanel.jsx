import React, { useEffect, useState } from 'react';
import { StyledPanel } from './styled.js';
import Orders from './Orders.jsx';
import Users from './Users.jsx';
import Products from './Products.jsx';
import { useSelector } from 'react-redux';
import ItemProduct from './ItemProduct.jsx';
import Categorys from './Categorys.jsx';
import Subsidiarys from './Subsidiarys.jsx';
import Search from './Search.jsx';
import AddProduct from './AddProduct.jsx';



const ControlPanel = () => {
    const store = useSelector(state => state);
    const [visual, setVisual] = useState({
        products: false,
        productsSearch: false,
        addProduct: false
    });



    return (
        <StyledPanel>
            <div className="panel">
                <Orders visual={visual} setVisual={setVisual} />
                <Users visual={visual} setVisual={setVisual} />
                <Products visual={visual} setVisual={setVisual} />
                <Categorys visual={visual} setVisual={setVisual} />
                <Subsidiarys visual={visual} setVisual={setVisual} />
            </div >
            <div className="content">
                {visual.products && store.products.map(p => <ItemProduct product={p} />)}
                {visual.productsSearch && 
                <>
                <Search index={"product"} />
                {store.search.length>1 && store.search.map(p => <ItemProduct product={p} />)}
                </>}
                {visual.addProduct &&
                <AddProduct/>
                }
            </div>
        </StyledPanel>
    )
};

export default ControlPanel;