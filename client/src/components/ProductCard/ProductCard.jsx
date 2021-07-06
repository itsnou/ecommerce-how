import {useEffect, useState} from 'react';
import {FaWineGlass, FaCartPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const ProductCard = ({name,image,price, category, id}) => {

	const buyWine =(id)=>{
		
	}

	return (
		<div className='container-card'>
			<Link to={`/product/${id}`}>
				<div className='card-image'>
					<img
						src={image}
						alt={name}
					/>
				</div>
			</Link>
			<div className='card-sales'>
				<h3 className='card-name'>{name}</h3>
				<hr className='line-div'/>
				<p className='card-adds'>{category}</p>
				<h2 className='card-price'>$ {price}</h2>
				<div className='card-buttonsDiv'>
						<div className='card-rating'>
							<FaWineGlass />
						</div>
						<button className='card-buttons_build' onClick={() => buyWine(id)}>
							<FaCartPlus />
							 AGREGAR
						</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
