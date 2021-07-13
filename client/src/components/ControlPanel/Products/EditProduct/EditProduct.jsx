import {useRef,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../../../redux/actions/request';
import {editProduct} from '../../../../redux/actions/sending';
import StyledDiv from './styled';

const FormProduct = ({match}) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const id = useRef(match.params.id);
    const product = useSelector(state => state.productDetail);
    
    useEffect(()=>{
        return dispatch(getProductDetail(id.current))
    },[dispatch])
    
    const onSubmit = data => dispatch(editProduct(data));
    console.log(watch("example"));
    console.log(product)

    return (
        <StyledDiv>
        {product.name !== undefined && 
            <div className='container-grap'>
                <div className='product-image'>
                    <img src={product.imageUrl} alt={product.name}/>
                </div>
                <div className='edit-product'>
                    <form className='edit-product_container' onSubmit={handleSubmit(onSubmit)}>
                        <div className='edit-product_id'>
                            <p>Id del Producto:</p>
                            <p>{`${product._id}`}</p>
                        </div>
                        <p>
                            <label>Nombre del producto:</label>
                            <input {...register("name",{required:true})} defaultValue={`${product.name}`}/>
                        </p>
                        <p>
                            <label>Precio del Producto:</label>
                            <input type='number' {...register("price",{required:true, min:0})} defaultValue={`${product.price}`}/>
                        </p>
                        <p>
                            <label>Stock del Producto:</label>
                            <input {...register("stock",{required:true})} defaultValue={`${product.stock}`}/>
                        </p>
                        <p>
                            <label>Bodega del Producto:</label>
                            <input {...register("vineyard",{required:true})} defaultValue={`${product.vineyard}`}/>
                        </p>
                        <p className='block'>
                            <label>Descripcion del Producto:</label>
                            <textarea {...register("description",{required:true})} defaultValue={`${product.description}`} rows={1} />
                        </p>
                        <p classname='block'>
                            <button type="submit">ENVIAR</button>
                        </p>
                    </form>
                </div>
            </div>
        }
        </StyledDiv>
    );
}
 
export default FormProduct;