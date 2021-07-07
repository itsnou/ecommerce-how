import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HiOutlineSearch } from "react-icons/hi";
import { getProductsByName } from "../../redux/actions";
import StyledDiv from "./styled.js";
import Button from "@material-ui/core/Button";

const Search = () => {
    const [product, setProduct] = useState("");

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

    return (
        <StyledDiv>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="search"
                        placeholder="Search Wine"
                        value={product}
                        onChange={handleChange}
                    />
                    <Button
                        className="btn"
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        <HiOutlineSearch />
                    </Button>
                </form>
            </div>
        </StyledDiv>
    );
};

export default Search;
