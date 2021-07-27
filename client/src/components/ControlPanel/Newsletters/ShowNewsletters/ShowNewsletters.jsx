import React from "react";
import { useSelector } from "react-redux";
import StyledNewsletter from "./styled.js";

const ShowNewsletters = () => {
  const store = useSelector((state) => state);
  return store.newsletters?.newsletters.map((e, index) => {
    return (
      <StyledNewsletter key={index}>
        <h3>Cliente: {e.name}</h3>
        <h3>Email: {e.email}</h3>
        <h3>Fecha: {e.date.slice(0, 10)}</h3>
        <h3>Producto: {e.product}</h3>
        <h3>Motivo: {e.reason}</h3>
      </StyledNewsletter>
    );
  });
};

export default ShowNewsletters;
