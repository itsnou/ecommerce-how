import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem } from '@material-ui/core';
import {StyledMenu} from './styled.js';



const Users = () => {
    const [user, setUser] = useState(0)
    const handleClick = (event) => {
        setUser(event.currentTarget);
    };
    const handleClose = () => {
        setUser(null);
    };

    return (
        <StyledMenu>
            <div>
                <Grid>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Usuarios
                    </Button>
                    <Menu
                        id="user"
                        anchorEl={user}
                        keepMounted
                        open={Boolean(user)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}> Ver Todos los Usuarios</MenuItem>
                        <MenuItem onClick={handleClose}> Buscar Usuario</MenuItem>
                    </Menu>
                </Grid>
            </div>
        </StyledMenu>
    )
};

export default Users;