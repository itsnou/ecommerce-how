import { useRef, useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
import { useDispatch, useSelector } from 'react-redux';

export const Vineyards = ({ setVisual})=>{
  const products = useSelector((state) => state.products)
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = (e) => {
      setVisual({
        vineyards: true,
      })
        setOpen(false);
  }

  const prevOpen = useRef(open);
  useEffect(() => {
      if (prevOpen.current === true && open === false) {
          anchorRef.current.focus();
      }
      prevOpen.current = open;
  }, [open]);


  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        // onClick={handleToggle}
        value={1}
        onClick={handleClick}
      >
        Bodegas
      </Button>
      {/* <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClick}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem value={1} onClick={handleClick}>Actualizar precios</MenuItem>
                                    <MenuItem value={2} onClick={handleClick}>Aplicar descuentos</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper> */}
    </div>
  );

}




export default Vineyards;