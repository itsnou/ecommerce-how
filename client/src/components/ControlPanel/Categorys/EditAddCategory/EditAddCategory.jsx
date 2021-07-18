import {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getVarietals} from '../../../../redux/actions/request';
import {addNewVarietal, deleteVarietal} from '../../../../redux/actions/sending';
import Button from '@material-ui/core/Button';

const EditAddCategory = () => {
    const dispatch = useDispatch();
    const varietals = useSelector(state=> state.varietals);
    const flag = useSelector(state => state.flag);
    const [errors, setErrors] = useState("");
    const [inputs, setInputs] = useState({
        name:"",
        relatedCategory: ""
    })

    useEffect(()=>{
        dispatch(getVarietals())
    },[dispatch,flag])

    const handleChange=(e)=>{
        if(e.target.name === 'name'){
            setInputs({
                ...inputs,
                name: e.target.value
            })
        }else{
            setInputs({
                ...inputs,
                relatedCategory: e.target.value
            })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors("");
        dispatch(addNewVarietal(inputs));
        dispatch(getVarietals());

    }

    const deleteProduct= (id) =>{
        dispatch(deleteVarietal(id));
        dispatch(getVarietals());
    }

    return (  
        <>
        {window.sessionStorage.admin === 'on'?
            <div>
                <div className='container-varietals'>
                    <ul>
                        {varietals.length > 0 ? varietals.map((el,idx)=>{
                            return <li>{el.name} <Button onClick={() => deleteProduct(el._id)}>X</Button></li>
                        }):null
                        }
                    </ul>
                </div>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h3>Si desea agregar un nuevo varietal llene este formulario: </h3>
                        <label>
                            <input type="text" name='name' onChange={(e)=> handleChange(e)} placeholder="Varietal"/>
                            <select onChange={(e)=> handleChange(e)}>
                                <option name='null'>Default</option>
                                <option value='Blanco'>Blanco</option>
                                <option value='Tinto'>Tinto</option>
                                <option value='Rosado'>Rosado</option>
                            </select>
                        </label>
                        <Button type='submit'>Enviar</Button>
                    </form>
                </div>
            </div>
            :<h1>Usted no es administrador</h1>
        }
        </>
    );
}
 
export default EditAddCategory;