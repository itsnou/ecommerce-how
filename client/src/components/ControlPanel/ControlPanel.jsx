import React, { useEffect, useState } from 'react';
import { StyledPanel } from './styled.js';
import Orders from './Orders/Orders.jsx';
import Users from './Users/Users.jsx';
import Products from './Products/Products.jsx';
import { useSelector } from 'react-redux';
import ItemProduct from './Products/ItemProduct.jsx';
import Categorys from './Categorys/Categorys.jsx';
import Subsidiarys from './Subsidiarys/Subsidiarys.jsx';
import Search from './Search.jsx';
import ItemUsers from './Users/ItemUsers.jsx';



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
                {visual.users && store.users.map(p => <ItemUsers user={p} />)}
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