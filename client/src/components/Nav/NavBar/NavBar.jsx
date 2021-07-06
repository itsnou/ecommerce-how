import StyledDiv from './styled.js';
import Search from '../../Search/Search';

const NavBar = () => {
    return (
        <StyledDiv>
            <div className='navbar-fully'>
                <div className='navbar-container'>
                    <ul>
                        <li>Inicio</li>
                        <li>Catalogo</li>
                        <li>Contacto</li>
                        <li>Sobre Nosotros</li>
                    </ul>
                </div>
                <div className='navbar-input'>
                    <Search/>
                </div>
            </div>
        </StyledDiv>
    );
}

export default NavBar;