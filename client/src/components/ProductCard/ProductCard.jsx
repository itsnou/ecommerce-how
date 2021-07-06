import React from 'react';
import {FaWineGlass, FaCartPlus} from 'react-icons/fa';

const ProductCard = ({name,image,price}) => {

	console.log(name);

	return (
		<div className='container-card'>
			<div className='card-image'>
				<img
					src={image}
					alt='image not found'
				/>
			</div>
			<h3 className='card-name'>{name}</h3>
			<h2 className='card-price'>$ {price}</h2>
			<div className='card-buttonsDiv'>
				<div>
					<FaWineGlass />
				</div>
				<div className='cardBtn'>
					<FaCartPlus />
					<button>agregar</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
