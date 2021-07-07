import {useState, useEffect, useRef} from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const User = () => {
    const [price, setPrice] = useState(0);
    const countCart = useSelector(state=> state.cart);
    let counter =0;
    let fixed = useRef(counter);
    useEffect(() => {
        if(countCart.length > 0){
            let count= countCart.map(e => e.price*e.quantity);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            fixed.current = count.reduce(reducer);
            setPrice(fixed.current)
        }
    }, [countCart]);
    

    return (  
        <div className='nav-user'>
            <ul className='nav-list_usuario'>
                <li><Link to='/create'>CREAR CUENTA</Link></li>
                <li><Link to='/login'>INICIAR SESIÓN</Link></li>
                <li><Link to='/carrito'><FaShoppingCart/> CARRITO</Link></li>
                <li className='nav-list_count'>{countCart.length}</li>
                <li className='nav-list_price'>$ {price}</li>
            </ul>
        </div>
    );
}
 
export default User;