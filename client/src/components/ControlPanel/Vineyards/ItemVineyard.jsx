import { useState } from "react";
import { StyledProduct } from "../styled.js";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { editProductsByVineyard } from '../../../redux/actions/sending'
import swal from "sweetalert";


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

  const handleClick = () => {
    if (input.increase === 1 && input.discount === 1) {
      swal({ title: "Ingresar un valor", icon: "warning" });
    } else {
      swal({
        title: "¿Estás seguro?",
        text: "Estás por modificar el precio de este producto",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            dispatch(editProductsByVineyard(input))
            swal("Precio modificado", {
              icon: "success",
            });
          } else {
            swal("Acción cancelada", {
              icon: "error",
            });
          }
        });
      }
      setInput({
        vineyard: props.name,
        increase: 1,
        discount: 1,
      })
      document.getElementById('increase').value = ''
      document.getElementById('discount').value = ''
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
            id='increase'
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
            id='discount'
            ></input>
          </div>
          <Button 
          variant="contained"
          onClick={()=>handleClick()}
          >EDITAR</Button>
    </StyledProduct>
  )


};

export default ItemVineyard;