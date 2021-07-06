import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi'
import { getProductsForName } from '../../redux/actions';
import StyledDiv from './styled.js';
import { ButtonBase } from '@material-ui/core';

const Search = () => {
    const [product, setProduct] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setProduct(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("*******************", product)
        dispatch(getProductsForName(product));
        setProduct("");
    };

    return (
            <form  onSubmit={handleSubmit} >
                <input
                    type="search"
                    placeholder="Search Wine"
                    value={product}
                    onChange={handleChange}
                />
                <ButtonBase onClick={handleSubmit}>
                    <HiOutlineSearch />
                </ButtonBase>
            </form>
    );
};

export default Search;