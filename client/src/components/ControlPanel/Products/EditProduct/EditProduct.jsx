import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../../redux/actions/request';
import { editProduct } from '../../../../redux/actions/sending';
import Loading from '../../../Loading/Loading';
import StyledDiv from './styled';
import { Link } from 'react-router-dom';

const FormProduct = ({ match }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const id = useRef(match.params.id);
    const product = useSelector(state => state.productDetail);
    const edit = useSelector(state => state.confirm);
    const load = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(getProductDetail(id.current))
        return () => { dispatch(getProductDetail("fakeId")) }

    }, [dispatch])

    const onSubmit = data => {
        dispatch(editProduct(data));
    }

    return (
        <>{load ? <Loading /> :
            <StyledDiv>
                {product.name !== undefined && window.sessionStorage.getItem('admin') ?
                    <div className='container-grap'>
                        <div className='product-image'>
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className='edit-product'>
                            <form className='edit-product_container' onSubmit={handleSubmit(onSubmit)}>
                                <div className='edit-product_id'>
                                    <p>Id del Producto:</p>
                                    <p>{`${product._id}`}</p>
                                    <input className='id-hidden' {...register("id")} value={`${product._id}`} />
                                </div>
                                <p>
                                    <label>Nombre del producto:</label>
                                    <input {...register("name", { required: true })} defaultValue={`${product.name}`} />
                                </p>
                                <p>
                                    <label>Precio del Producto:</label>
                                    <input type='number' {...register("price", { required: true, min: 0 })} defaultValue={`${product.price}`} />
                                </p>
                                <p>
                                    <label>Stock del Producto:</label>
                                    <input {...register("stock", { required: true })} defaultValue={`${product.stock}`} />
                                </p>
                                <p>
                                    <label>Bodega del Producto:</label>
                                    <input {...register("vineyard", { required: true })} defaultValue={`${product.vineyard}`} />
                                </p>
                                <p className='block'>
                                    <label>Descripcion del Producto:</label>
                                    <textarea {...register("description", { required: true })} defaultValue={`${product.description}`} rows={3} />
                                </p>
                                <p classname='block'>
                                    <button type="submit">ENVIAR</button>
                                </p>
                                <p classname='block'>
                                <Link to={`/admin/controlpanel`}><button>Volver</button></Link>
                                </p>
                            </form>
                            {edit ? <h1>LA MODIFICACIÓN FUE UN ÉXITO</h1> : null}
                        </div>
                    </div>
                    : <h1>No tiene permisos para ingresar aqui</h1>}
            </StyledDiv>}
        </>
    );
}

export default FormProduct;