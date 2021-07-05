import React from 'react';
import CardDiv from './styled';
import {FaWineGlass, FaCartPlus} from 'react-icons/fa';

const ProductCard = (props) => {
	const {name, price, image} = props;
	return (
		<CardDiv>
			<div>
				<img
					src={image}
					alt='image not found'
				/>
			</div>
			<h3 className='name'>{name}</h3>
			<h2 className='price'>{price}</h2>
			<div className='buttonsDiv'>
				<div>
					<FaWineGlass />
				</div>
				<div className='cardBtn'>
					<FaCartPlus />
					<button>agregar</button>
				</div>
			</div>
		</CardDiv>
	);
};

export default ProductCard;
