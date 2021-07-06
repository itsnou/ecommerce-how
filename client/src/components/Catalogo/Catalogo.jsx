import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import StyledDiv from './styled.js';
import {getProductsAll} from '../../redux/actions/request';
import ProductCard from '../ProductCard/ProductCard';


const Catalogo = () => {
    const dispatch = useDispatch();
    const products = useSelector(state=> state.products);

    useEffect(()=>{
       dispatch(getProductsAll());
    },[dispatch]);

    console.log(products);

    return (
        <StyledDiv>
        {
            products && products.map(el=>{
                return <ProductCard name={el.name} image={el.imageUrl} price={el.price}/>
            })
        }
        </StyledDiv>
    );
}
 
export default Catalogo;