import React from 'react';
import CardDiv from './styled';
import {FaWineGlass, FaCartPlus} from 'react-icons/fa';

const ProductCard = (props) => {
	const {name, price, variety} = props;
	return (
		<CardDiv>
			<div>
				<img
					src='https://cepadevinos.com/wp-content/uploads/2018/08/estuche-rutini-cabernet-malbec-750-ml-D_NQ_NP_889508-MLA28125401104_092018-F.jpg'
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
