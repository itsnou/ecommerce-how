import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import {
  getOrderForUser,
  getProductsByName,
  getProductsByBarcode,
  getUsers,
  reset,
  userFiltered,
} from "../../redux/actions";

import Button from "@material-ui/core/Button";
import { StyledSearch } from "./styled";

const Search = ({ itemValue }) => {
  const [input, setInput] = useState("");
  const [barcode, setBarcode] = useState("");
  const entry = useRef(input.length);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const history = useHistory();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChangeBarcode = (e) => {
    setBarcode(e.target.value);
    if(e.target.value.toString().length>5)dispatch(getProductsByBarcode(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (itemValue) {
      case "product":
        input?
        dispatch(getProductsByName(input))
        :dispatch(getProductsByBarcode(barcode));
        break;
      case "user":
        dispatch(getUsers());
        dispatch(userFiltered(input, store.users));
        break;
      case "order":
        dispatch(getOrderForUser(input));
        break;
      default:
        setInput("");
    }
    setInput("");
  };

  useEffect(() => {
    if (entry.current === 0) {
      setInput("");
      setBarcode("");
    }
    return ()=>{
      dispatch(reset("searchUser"));
      dispatch(reset("search"));}
  }, [dispatch]);

  useEffect(()=>{
    if(store.search.length>0){
    if(store.search[0].barcode == barcode){
      history.push(`/admin/editProduct/${store.search[0]._id}`)
    }}
    // else if(barcode.toString.length==6){
    //   history.push(`/admin/controlpanel`)
    // }//ver lo de la ruta para direccionar a agregar producto o no
  },[store.search])
  return (
    <StyledSearch>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Buscar por nombre..."
            value={input}
            onChange={handleChange}
          />
          {itemValue==="product"?<input
            type="number"
            placeholder="Buscar por Código de Barras..."
            value={barcode}
            onChange={handleChangeBarcode}
          />:null
          }
          <Button className="btn" variant="contained" onClick={handleSubmit}>
            <HiOutlineSearch />
          </Button>
        </form>
      </div>
    </StyledSearch>
  );
};

export default Search;

//cualquier cambio
