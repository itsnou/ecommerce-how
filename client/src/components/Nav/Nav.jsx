import LOGO from '../../assets/image/LOGO.png';
import Login from './NavUser/User';
import NavBar from './NavBar/NavBar';
import StyledDiv from './styled.js';
import { Grid } from '@material-ui/core';
import {FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa';

const Nav = () => {
    return (
        <StyledDiv>
            <Grid container item xs={12} spacing={2}>
                <Grid container item xs={8} spacing={2}>
                    <div className='nav-logo'>
                        <img src={LOGO} alt='LOGO-HOW'/>
                    </div>
                </Grid>
                <Grid container item xs={4} spacing={2}>
                    <div className='nav-social'>
                        <div className='nav-redes'>
                            <p>Seguinos  
                            <a href='https://facebook.com' rel="noreferrer noopener" target='_blank'> <FaFacebookSquare/></a>
                            <a href='https://instagram.com' rel="noreferrer noopener" target='_blank'> <FaInstagramSquare/></a>
                            </p>
                        </div>
                        <hr/>
                    </div>
                    <Login/>
                </Grid>
            </Grid>
            <NavBar/>
        </StyledDiv>
    );
}
 
export default Nav;