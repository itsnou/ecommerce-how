import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineSearch } from "react-icons/hi";
import { getProductsByName } from "../../../redux/actions/request";
import StyledDiv from "./styled.js";
import Button from "@material-ui/core/Button";

const SearchAtCatalogo = () => {
  const [product, setProduct] = useState("");
  const search = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct(e.target.value);
    dispatch(getProductsByName(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductsByName(product));
    setProduct("");
  };

  useEffect(() => {
    if (search.length === 0) {
      setProduct("");
    }
  }, [dispatch, search]);

  return (
    <StyledDiv>
      <div>
          <input
            type="search"
            placeholder="Buscar..."
            value={product}
            onChange={(e) => handleChange(e)}
          />
      </div>
    </StyledDiv>
  );
};

export default SearchAtCatalogo;
