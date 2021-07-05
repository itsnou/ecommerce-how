import StyledDiv from './styled.js'

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
                    <input placeholder='Buscar'/>
                </div>
            </div>
        </StyledDiv>
    );
}
 
export default NavBar;