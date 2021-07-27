import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledNewsletter from "./styled.js";
import { getNewsletters } from "../../../../redux/actions/request.js";
import Loading from "../../../Loading/Loading";
const ShowNewsletters = () => {
  const newsletters = useSelector((state) => state.newsletters);
  const [showNewsletters, setShowNewsletters] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getNewsletters());
  }, [dispatch]);

  useEffect(() => {
    setShowNewsletters(true);
  }, [newsletters]);

  return showNewsletters && newsletters.newsletters ? (
    newsletters.newsletters?.map((e, index) => {
      return (
        <StyledNewsletter key={index}>
          <h3>Cliente: {e.name}</h3>
          <h3>Email: {e.email}</h3>
          <h3>Fecha: {e.date.slice(0, 10)}</h3>
          <h3>Producto: {e.product}</h3>
          <h3>Motivo: {e.reason}</h3>
        </StyledNewsletter>
      );
    })
  ) : (
    <Loading />
  );
};

export default ShowNewsletters;
