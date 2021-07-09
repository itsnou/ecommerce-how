import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../redux/actions/request';
import {addToCart} from '../../redux/actions/cart';
import StyledDiv from './style';
import StarRatingComponent from 'react-star-rating-component';
import {FaWineGlass} from 'react-icons/fa';

const ProductDetail = ({match}) => {
	const dispatch = useDispatch();
	const detail = useSelector((store) => store.productDetail);
	const cart = useSelector((store) => store.cart);
	const [count, setCount] = useState(0);
	const [stars, setStars] = useState(0);

	useEffect(() => {
		let id = match.params.id;
		dispatch(getProductDetail(id));
	}, [dispatch]);

	useEffect(() => {
		if (cart.length > 0) {
			let wine = cart.find((e) => e._id === detail._id);
			if (wine) {
				setCount(wine.quantity);
			}
		}
	}, []);

	useEffect(() => {
		if (detail.rating) {
			let totalStars = detail.rating.reduce((a, b) => a + b, 0);
			setStars(totalStars / detail.rating.length);
		}
	}, [detail]);

	const handleClick = () => {
		let obj = {
			...detail,
			quantity: count,
		};
		dispatch(addToCart(obj));
	};

	return (
		<StyledDiv>
			<div className='detail-img'>
				<img src={detail.imageUrl} alt='image not found' />
			</div>
			<div className='detail-explain'>
				<h2>{detail.name}</h2>
				<h3>Bodega: {detail.vineyard}</h3>
				<h3>Categoria: {detail.category}</h3>
				<h3>Precio: ${detail.price}</h3>
				<div className='detail-varietal'>
					<h3>Varietal/es: </h3>
					{detail.varietal &&
						detail.varietal.map((e) => {
							return <h3 key={e}>{e}</h3>;
						})}
				</div>
				<div className='detail-stars'>
					<h3>
						puntaje:
						<StarRatingComponent
							name='rateWine'
							editing={false}
							renderStarIcon={() => (
								<span>
									<FaWineGlass />
								</span>
							)}
							starCount={5}
							value={stars}
						/>
					</h3>
				</div>

				<h3>Detalle: {detail.description}</h3>
				{detail.stock < 1 ? (
					<div className='detail-btn'>
						<h3>SIN STOCK</h3>
					</div>
				) : (
					<div className='detail-btn'>
						<input
							type='number'
							min={detail.quantity}
							max={detail.stock}
							value={count}
							onChange={(e) => setCount(e.target.value)}
						/>
						<button onClick={() => handleClick()}>AGREGAR</button>
					</div>
				)}
			</div>
		</StyledDiv>
	);
};

export default ProductDetail;
