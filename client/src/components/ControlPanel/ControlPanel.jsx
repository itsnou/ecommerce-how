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
import ItemUsers from './ItemUsers.jsx';



const ControlPanel = () => {
    const store = useSelector(state => state);
    const [visual, setVisual] = useState({
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
                {visual.users && store.users.map(p => <ItemUsers product={p} />)}
                {visual.usersSearch && 
                <>
                <Search index={"user"} />
                {store.search.length>1 && store.search.map(p => <ItemProduct product={p} />)}
                </>}
            </div>
        </StyledPanel>
    )
};

export default ControlPanel;