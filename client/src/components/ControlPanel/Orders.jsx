import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem } from '@material-ui/core';
import { StyledMenu } from './styled.js';



const Orders = () => {
    const [order, setOrder] = useState(0)
    const handleClick = (event) => {
        setOrder(event.currentTarget);
    };
    const handleClose = () => {
        setOrder(null);
    };

    return (
        <StyledMenu>
            <div>
                <Grid>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Ordenes
                    </Button>
                    <Menu
                        id="order"
                        anchorEl={order}
                        keepMounted
                        open={Boolean(order)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}> Ver todas las ordenes</MenuItem>
                        <MenuItem onClick={handleClose}> Buscar Orden</MenuItem>
                    </Menu>
                </Grid>
            </div>
        </StyledMenu>
    )
};

export default Orders;