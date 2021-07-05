import {useState} from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const User = () => {
    const [products, setProducts] = useState(0);
    const [price, setPrice] = useState(0);


    return (  
        <div className='nav-user'>
            <ul className='nav-list_usuario'>
                <li><Link to='/create'>CREAR CUENTA</Link></li>
                <li><Link to='/login'>INICIAR SESIÓN</Link></li>
                <li><Link to='/carrito'><FaShoppingCart/> CARRITO</Link></li>
                <li className='nav-list_count'>{products}</li>
                <li className='nav-list_price'>$ {price}</li>
            </ul>
        </div>
    );
}
 
export default User;