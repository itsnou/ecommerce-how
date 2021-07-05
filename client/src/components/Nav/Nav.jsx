import LOGO from '../../assets/image/LOGO.png';
import StyledDiv from './styled.js';
import { Grid } from '@material-ui/core';


const Nav = () => {
    return (  
        <StyledDiv>
            <Grid container item xs={12} spacing={2}>
                <div className='nav-logo'>
                    <img src={LOGO} alt='LOGO-HOW'/>
                </div>
                <div className='nav-social'>
                    <div className='nav-redes'>
                        <p>Seguinos</p>
                        <hr/>
                    </div>
                </div>
            </Grid>
        </StyledDiv>
    );
}
 
export default Nav;