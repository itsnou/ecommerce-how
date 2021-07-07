import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../redux/actions/request';
import {addToCart} from '../../redux/actions/cart';

const ProductDetail = ({match}) => {
	const dispatch = useDispatch();
	const detail = useSelector((store) => store.productDetail);

	useEffect(() => {
		let id = match.params.id;
		dispatch(getProductDetail(id));
	}, [dispatch]);

	const [count, setCount] = useState(1);

	const handleClick = () => {
		let obj = {
			...detail,
			quantity: count,
		};
		dispatch(addToCart(obj));
	};

	return (
		<div>
			<h1>Componente detail</h1>
			<h2>{detail.name}</h2>
			<div>
				<img src={detail.imageUrl} alt='image not found' />
			</div>
			<div>
				<h3>Bodega: {detail.vineyard}</h3>
				<h3>Categoria: {detail.category}</h3>
				<h3>Precio: ${detail.price}</h3>
				<div>
					<h3>Varietal/es: </h3>
					{detail.varietal &&
						detail.varietal.map((e) => {
							return <h3 key={e}>{e}</h3>;
						})}
				</div>
				<h3>detalle: {detail.description}</h3>
				<div>
					<input
						type='number'
						min={detail.quantity}
						max={detail.stock}
						value={count}
						onChange={(e) => setCount(e.target.value)}
					/>
					<button onClick={() => handleClick()}>add</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
