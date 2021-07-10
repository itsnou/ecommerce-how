import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAll } from "../../../redux/actions/request";
import ProductCard from '../../ProductCard/ProductCard';

const Destacados = () => {
    const dispatch=useDispatch();
    const products= useSelector((state) => state.products);
    let destacados=[];

    useEffect(async()=>{
        await dispatch(getProductsAll())
    },[dispatch])
    
    if(products.length){
        for(let i=0; i<3;i++){
            destacados.push(products[i]);
        }
    }

    return(
        <div className='productos-destacados'>
            {
                destacados && destacados.map((product,idx)=>{
                    return <ProductCard product={product}/>
                })
            }
        </div>
    );
}
 
export default Destacados;