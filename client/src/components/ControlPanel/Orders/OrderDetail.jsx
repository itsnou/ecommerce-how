import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetail, reset } from "../../../redux/actions";
import { StyledOrderDetail } from "../styled";
import { ButtonGroup, Button } from "@material-ui/core";
import { editOrderStatus } from "../../../redux/actions/sending";
import swal from 'sweetalert';
import Loading from "../../Loading/Loading";

const OrderDetail = ({ match }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderDetail);
  const load = useSelector(state => state.loading);
  const id = useRef(match.params.id);

  useEffect(() => {
    dispatch(getOrderDetail(id.current));
    return dispatch (reset("orderDetail"));
  }, [dispatch]);

  const handleClick = (e) => {
    const value = e.currentTarget.value;
    swal({
      title: "¿Cambiar el estado de esta orden?",
      text: `Estas por cambiar el estado a ${value}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(editOrderStatus(order._id, value));
          dispatch(getOrderDetail(match.params.id));
          swal("Estado modificado", {
            icon: "success",
          });
        } else {
          swal("Accion cancelada", {
            icon: "error",
          });
        }
      });

  };

  return (
    <>
      {load ? <Loading /> :
        (
          <StyledOrderDetail>
            {order.user &&
            <div>
              <li >
                Nombre del cliente: {order.user.name} {order.user.lastName}
              </li>
              <li className="email">Email: {order.user.email}</li>
              <li className="status">Estado de la orden: {order.state}</li>
              <li>Cambiar estado:
                <ButtonGroup color="secondary" aria-label="outlined primary button group">
                  <Button onClick={handleClick} value="En preparación">En preparación</Button>
                  <Button onClick={handleClick} value="Enviado">Enviado</Button>
                  <Button onClick={handleClick} value="Finalizado">Finalizado</Button>
                  <Button onClick={handleClick} value="Cancelado">Cancelado</Button>
                </ButtonGroup></li>
              {order.invoice.items && (order.invoice.items.length > 0 &&
                <>
                  <li>Productos :</li>
                  {order.invoice.items.map(item => {
                    return <div className="prodcut">
                      <li>Producto: {item.name}</li>
                      <li>Precio: ${item.price}</li>
                      <li>Cantidad: {item.quantity}</li>
                    </div>
                  })}
                </>
              )}
              <li>Fecha: {order.invoice.date}</li>
            </div>}
          </StyledOrderDetail>
        )}
    </>
  );
};

export default OrderDetail;