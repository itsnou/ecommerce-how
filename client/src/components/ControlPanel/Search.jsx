import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { getProductsByName, getUsers, reset, userFiltered } from '../../redux/actions';

import Button from '@material-ui/core/Button';
import { StyledSearch } from './styled';

const Search = ({ itemValue }) => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();
    const store = useSelector(state => state);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (itemValue) {
            case 'product':
                dispatch(getProductsByName(input));
            case 'user':
                dispatch(userFiltered(input, store.users));
            default:
                setInput('');
        }
        setInput('');
    };

    useEffect(() => {
        dispatch(getUsers());
        if (input.length === 0) {
            setInput('');
        }
        return dispatch(reset("searchUser"))
    }, [dispatch]);

    return (
        <StyledSearch>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='search'
                        placeholder='Buscar...'
                        value={input}
                        onChange={handleChange}
                    />
                    <Button
                        className='btn'
                        variant='contained'
                        onClick={handleSubmit}
                    >
                        <HiOutlineSearch />
                    </Button>
                </form>
            </div>
        </StyledSearch>
    );
};

export default Search;
