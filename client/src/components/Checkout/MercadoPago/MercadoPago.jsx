import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';
import queryString from 'querystring';
import {useDispatch, useSelector} from 'react-redux';
import {finishMpSale} from '../../../redux/actions/sending.js';
import {setPayment} from '../../../redux/actions/cart.js';
import {reset} from '../../../redux/actions/index.js';

export const MercadoPago = () => {
	const location = useLocation();
	const {status, payment_id} = queryString.parse(location.search);
	const payment = useSelector((state) => state.payment);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPayment());
	}, []);

	const handleClick = () => {
		dispatch(finishMpSale(payment));
		dispatch(reset('cart'));
	};

	return (
		<div>
			{status === 'approved' ? (
				<div>
					<h2>su compra fue realizada con exito</h2>
					<Link to='/'>
						<button
							onClick={() => {
								handleClick();
							}}
						>
							Volver a home
						</button>
					</Link>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default MercadoPago;
