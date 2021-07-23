import { useState } from "react";
import { StyledProduct } from "../styled.js";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { editProductsByVineyard } from '../../../redux/actions/sending'

const ItemVineyard = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    vineyard: props.name,
    increase: 1,
    discount: 1

  })

  const handleChange = (e) => {
    let aux;
    if(e.target.name === 'increase') {
      aux = (100 + parseInt(e.target.value)) / 100 
    } else {
      aux = (100 - parseInt(e.target.value)) / 100
    }
    setInput({
      ...input,
      [e.target.name] : aux,
    })
  }

  return (
    <StyledProduct>
          <li className="name">{props.name}</li>
          <li className="quantity">Productos: {props.quantity}</li>
          <div>
            <label>
              Aumentar precio 
            </label>
            <input
            type='text'
            inputMode='numeric'
            name='increase'
            placeholder= 'Ingrese un %'
            onChange={(e)=>handleChange(e)}
            >
            </input>

          </div>
          <div>
            <label>
              Disminuir precio 
            </label>
            <input
            type='text'
            inputMode='numeric'
            name='discount'
            placeholder='Ingrese un %'
            onChange={(e)=>handleChange(e)}
            ></input>
          </div>
          <Button 
          variant="contained"
          onClick={()=>dispatch(editProductsByVineyard(input))}
          >EDITAR</Button>
    </StyledProduct>
  )


};

export default ItemVineyard;