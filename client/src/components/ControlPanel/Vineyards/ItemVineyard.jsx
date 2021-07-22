import { StyledProduct } from "../styled.js";
import Button from "@material-ui/core/Button";

const ItemVineyard = (props) => {


  return (
    <StyledProduct>
          <li className="name">{props.name}</li>
          <div>
            <label>
              Modificar precio 
            </label>
            <input
            type='number'
            placeholder= '%'
            >
            </input>

          </div>
          <div>
            <label>
              Aplicar descuento 
            </label>
            <input
            type='number'
            placeholder='%'
            ></input>
          </div>
          <Button variant="contained">EDITAR</Button>
    </StyledProduct>
  )


};

export default ItemVineyard;