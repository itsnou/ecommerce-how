import {useEffect} from 'react';
import {getProfile} from '../../redux/actions/request';
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";

const Checkout = () => {
    const dispatch= useDispatch();
    const loged = useSelector(state=> state.loged);
    const user = useSelector(state => state.user);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(()=>{
        return dispatch(getProfile())
    },[dispatch]);
    


    return (
        <>
            <h1>Confirma tus datos para poder enviar los productos</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} defaultValue={user[0].name}/>
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </>
    );
}
 
export default Checkout;