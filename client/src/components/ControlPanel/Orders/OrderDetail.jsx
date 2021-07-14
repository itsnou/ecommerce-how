import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetail } from "../../../redux/actions";
import { StyledOrderDetail } from "../styled";
import { ButtonGroup, Button } from "@material-ui/core";

const OrderDetail = ({ match }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderDetail);

  useEffect(() => {
    dispatch(getOrderDetail(match.params.id));
  }, [dispatch]);

  return (
    <StyledOrderDetail>
      <div>
        <li className="name">
          Nombre del cliente: {order.invoice.userName} {order.invoice.userLastName}
        </li>
        <li className="email">Email: {order.invoice.userEmail}</li>
        <li className="status">Estado de la orden: {user.state}</li>
        <li>Cambiar estado:
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button>En proceso</Button>
            <Button>Enviada</Button>
            <Button>Finalizada</Button>
            <Button>Cancelada</Button>
          </ButtonGroup></li>
        {user.invoice.items && (user.invoice.items.length > 0 &&
          <li>Productos : {user.invoice.items.map(item => {
            <div className="prodcut">
              <li>Producto: {item.name}</li>
              <li>Precio: ${item.price}</li>
              <li>Cantidad: {item.quantity}</li>
            </div>
          })}</li>)}
        <li>Fecha: {user.invoice.date}</li>
      </div>
    </StyledOrderDetail>
  );
};

export default OrderDetail;