import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/sending';
import { getVarietals } from '../../redux/actions/request';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm();
   
    
    const varietals = useSelector((state) => state.varietals);
    const dispatch = useDispatch();
    const onSubmit = (data, e) => {
        console.log(data)
        var product=data
        dispatch(addProduct(product))
        // limpiar campos
        e.target.reset();
    }


    useEffect(() => {
        if (varietals.length === 0) dispatch(getVarietals())
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nombre"
                {...register("name", {
                    required: {
                        value: true,
                        message: 'El nombre es requerido'
                    }
                })
                } />
           <p>{errors.name?.message}</p>
            <input placeholder="Bodega"
                {...register("vineyard", {
                    required: {
                        value: true,
                        message: 'El nombre de la bodega es requerido'
                    }
                })
                } />
            <span>{errors.vineyard?.message}</span>
            <input placeholder="Url de Imagen"
                {...register("imageUrl", {
                    required: {
                        value: true,
                        message: 'El URL de la imagen es requerido'
                    }
                })
                } />
            <span>{errors.imageUrl?.message}</span>
            <label>Categoría</label>
            <select {...register("category", {
                required: {
                    value: true,
                    message: 'Seleccione una opción'
                }
            })}
            >
                <option value="Tinto">Tinto</option>
                <option value="Rosado">Rosado</option>
                <option value="Blanco">Blanco</option>
            </select>
            <span>{errors.category?.message}</span>
            <label>Varietal</label>
            <select {...register("varietal", {
                required: {
                    value: true,
                    message: 'Seleccione una o más opciones'
                }
            })} multiple>
                {varietals.map(e => (<option value={e.name}>{e.name}</option>))}
            </select>
            <span>{errors.varietal?.message}</span>
            <input placeholder="Precio" type="number"
                {...register("price", {
                    required: {
                        valueAsNumber: true,
                        message: 'El precio es requerido'
                    },
                    min: {
                        value: 0,
                        message: 'El precio es requerido'
                    }
                })
                } />
            <span>{errors.price?.message}</span>
            
            <input placeholder="Stock" type="number"
                {...register("stock", {
                    required: {
                        valueAsNumber: true,
                        message: 'El stock es requerido'
                    },
                    min: {
                        value: 0,
                        message: 'El stock no puede ser negativo'
                    }
                })
                } />
            <span>{errors?.stock?.message}</span>
            
            <input placeholder="Año de cosecha" type="number"
                {...register("year", {
                    required: {
                        valueAsNumber: true,
                        message: 'El año es requerido'
                    },
                    max: {
                        value: 2021,
                        message: 'El año no es valido'
                    },
                    min: {
                        value: 2010,
                        message: 'El año no es valido'
                    }
                })
                } />
            <span>{errors?.year?.message}</span>
            <input placeholder="Descripción"
                {...register("description", {
                    required: {
                        value: true,
                        message: 'La descripción es requerida'
                    }
                })
                } />
            <span>{errors?.description?.message}</span>




            {/* {error === -1 ? <button type="submit" className="btn-submit">Agregar Producto</button> : <span className={error && 'danger'} >{error}</span>} */}
            {/* <input type="submit" value=" Create Recipe" onClick={(e) => handleSubmit(e)}/> */}
            {/* <button type="submit" > Create Recipe </button> */}
            <button type="submit" >Agregar Producto</button>
            <Link to={`/admin/controlpanel`}><button >Volver</button></Link>

        </form>
    )
};

export default AddProduct;
// onChange={(e) => validater(e.target.value, 'name',)}
// onChange={(e) => validater(e.target.value, 'vineyard')}
// onChange={(e) => validater(e.target.value, 'imageUrl')}
// onChange={(e) => validater(e.target.value, 'varietal')} 
// onChange={(e) => validater(e.target.value, 'category')} 
// onChange={(e) => validater(e.target.value, 'stock')}
// onChange={(e) => validater(e.target.value, 'discount')}