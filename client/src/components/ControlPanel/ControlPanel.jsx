import React from 'react';
import {StyledPanel} from './styled.js';
import Orders from './Orders.jsx';
import Users from './Users.jsx';



const ControlPanel = () => {

    
    return (
        <>
        <StyledPanel>
            <Orders />
            <Users />
        </StyledPanel>
        </>
    )
};

export default ControlPanel;