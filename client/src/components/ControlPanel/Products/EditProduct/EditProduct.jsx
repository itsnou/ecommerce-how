import {useRef,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../../../redux/actions/request';
import {editProduct} from '../../../../redux/actions/sending';

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

    return (
        <>
        {product.name !== undefined && 
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Descripcion del Producto:
                    <input {...register("id",{required:true})} value={`${product._id}`}/>
                </label>
                <label>
                    Nombre del producto:
                    <input {...register("name",{required:true})} defaultValue={`${product.name}`}/>
                </label>
                <label>
                    Precio del Producto:
                    <input {...register("price",{required:true})} defaultValue={`${product.price}`}/>
                </label>
                <label>
                    Stock del Producto:
                    <input {...register("stock",{required:true})} defaultValue={`${product.stock}`}/>
                </label>
                <label>
                    Bodega del Producto:
                    <input {...register("vineyard",{required:true})} defaultValue={`${product.vineyard}`}/>
                </label>
                <label>
                    Descripcion del Producto:
                    <textarea {...register("description",{required:true})} defaultValue={`${product.description}`}/>
                </label>
                <input type="submit" />
            </form>
        }
        </>
    );
}
 
export default FormProduct;