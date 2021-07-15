import React from "react";
import { Link } from "react-router-dom";
import { StyledOrders } from "../styled.js";

const ItemOrder = ({ order }) => {
    let type = "";
    if (order.state === "En preparación") type = "process";
    else if (order.state === "Finalizado") type = "complete";
    else if (order.state === "Enviado") type = "sent";
    else if (order.state === "Cancelado") type = "cancel";
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