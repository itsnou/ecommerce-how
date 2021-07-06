import StyledDiv from './styled.js';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (  
        <StyledDiv>
            <div className='navbar-fully'>
                <div className='navbar-container'>
                    <ul className='navbar-links'>
                        <Link to='/'>
                            <li>Inicio</li>
                        </Link>
                        <Link to='/catalogo'>
                            <li>Catalogo</li>
                        </Link>
                        <Link to='/contacto'>
                            <li>Contacto</li>
                        </Link>
                        <Link to='/empresa'>
                            <li>Sobre Nosotros</li>
                        </Link>
                    </ul>
                </div>
                <div className='navbar-input'>
                    <input placeholder='Buscar'/>
                </div>
            </div>
        </StyledDiv>
    );
}
 
export default NavBar;