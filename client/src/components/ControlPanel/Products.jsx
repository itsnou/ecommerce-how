import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useDispatch } from 'react-redux';
import { getProductsAll } from '../../redux/actions';


const Products = ({ visual, setVisual }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const dispatch = useDispatch();



    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClick = (e) => {
        if (e.target.value === 1) {
            dispatch(getProductsAll());
            setVisual({
                ...visual,
                products: true,
                productsSearch: false
            })
        }
        if (e.target.value === 2) {
            dispatch(getProductsAll());
            setVisual({
                ...visual,
                products: false,
                productsSearch: true
            })
        }
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                Productos
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClick}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem value={1} onClick={handleClick}>Ver todos los productos</MenuItem>
                                    <MenuItem value={2} onClick={handleClick}>Buscar producto</MenuItem>
                                    <MenuItem value={3} onClick={handleClick}>Agregar producto</MenuItem>
                                    <MenuItem value={3} onClick={handleClick}>Modificar ofertas</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default Products;