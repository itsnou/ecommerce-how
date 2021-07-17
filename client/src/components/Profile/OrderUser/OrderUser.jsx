import {useRef} from 'react';
import {useSelector} from 'react-redux';
import StyledDiv from './styled';
import LOGO from '../../../assets/image/LOGO.png';

const OrderUser = ({match}) => {
    const id = useRef(match.params.id);
    const orders = useSelector(state => state.orders);
    const order = orders[id.current];


    return (  
        <StyledDiv>
            {
                orders.length>0? <div>
                    <div className='intro-orders'>
                        <h1>Detalle de la factura</h1>
                        <img src={LOGO} alt='not fount'/>
                    </div>
                    <ul className='details-orders'>
                        <li>Fecha de compra: {order.date.slice(0,10)}</li>
                        <li>Productos comprados: 
                            <ul>
                                {order.invoice.items.map((el,idx)=>{
                                    return <li key={idx}>
                                    <p>Nombre: {el.name}</p> 
                                    <p>Cantidad: {el.quantity}</p>
                                    </li>
                                })}
                            </ul>
                        </li>
                        <li className="last-mount">Monto total: $ {order.invoice.totalAmount}</li>
                    </ul>
                </div>:<h1>Dirección inválida</h1>
            }
        </StyledDiv>
    );
}
 
export default OrderUser;