import {useState, useEffect, useRef} from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart,modifyItemCart } from "../../../redux/actions/cart";


const User = () => {
    const dispatch=useDispatch();
    const [price, setPrice] = useState(0);
    const countCart = useSelector(state=> state.cart);
    const [cartCount, setCartCount] = useState(0) 
    let prces = 0;
    let counter = 0;
    let fixed = useRef(prces);
    let quantityProduct = useRef(counter);

    useEffect(()=>{
        if(window.localStorage){
            Object.keys(window.localStorage).map(el=>{
                dispatch(addToCart(JSON.parse(window.localStorage.getItem(`${el}`))));
            });
        }
    },[dispatch]);

    useEffect(() => {
        if(countCart.length > 0){
            //contador de precios
            let count= countCart.map(e => e.price*e.quantity);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            fixed.current = count.reduce(reducer);
            setPrice(fixed.current)

            //contador de cantidades
            let quantity = countCart.map(e=>e.quantity);
            quantityProduct.current=quantity.reduce(reducer);
            setCartCount(quantityProduct.current);
        }
    }, [countCart, dispatch]);




    return (  
        <div className='nav-user'>
            <ul className='nav-list_usuario'>
                <li><Link to='/create'>CREAR CUENTA</Link></li>
                <li><Link to='/login'>INICIAR SESIÓN</Link></li>
                <li><Link to='/carrito'><FaShoppingCart/> CARRITO</Link></li>
                <li className='nav-list_count'>{cartCount}</li>
                <li className='nav-list_price'>$ {price}</li>
            </ul>
        </div>
    );
}
 
export default User;