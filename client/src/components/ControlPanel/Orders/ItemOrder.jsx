import React from "react";
import { Link } from "react-router-dom";
import { StyledOrders } from "../styled.js";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";

const ItemOrder = ({ order }) => {
    const dispatch = useDispatch();
    let type = "";
    if (order.state === "En preparación") type = "process";
    else if (order.state === "Finalizado") type = "complete";
    else if (order.state === "Cancelada") type = "cancel";
    else if (order.state === "Creada") type = "created";
    return (
        <StyledOrders>
            <Link to={`/order/${order._id}`}>
                <li className="name">{order.user.name} {order.user.lastName}</li>
            </Link>
            <li className="email">{order.user.email}</li>
            <li className="cant">
                <li>Cant.Prod.: {order.invoice.items.length}</li>
                <li className="amount">Total: ${order.invoice.totalAmount}</li>
            </li>
            <li className={type}>{order.state}</li>
            <li className="date">{order.invoice.date}</li>
        </StyledOrders>
    )
};

export default ItemOrder;