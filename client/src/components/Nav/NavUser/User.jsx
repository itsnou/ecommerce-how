import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const User = () => {
    return (  
        <div className='nav-user'>
            <ul className='nav-list_usuario'>
                <li><Link to='/create'>CREAR CUENTA</Link></li>
                <li><Link to='/login'>INICIAR SESIÓN</Link></li>
                <li><Link to='/carrito'><FaShoppingCart/> CARRITO</Link></li>
            </ul>
        </div>
    );
}
 
export default User;