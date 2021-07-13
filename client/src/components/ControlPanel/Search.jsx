import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { getProductsByName, userFiltered } from '../../redux/actions';

import Button from '@material-ui/core/Button';
import { StyledSearch } from './styled';

const Search = ({ itemValue }) => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput(e.target.value);
        dispatch(getProductsByName(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        switch ({ itemValue }) {
            case 'products':
                return dispatch(getProductsByName(input));
            case 'users':
                return dispatch(userFiltered(input));
            default:
                return;
        }
        setInput('');
    };

    useEffect(() => {
        if (input.length === 0) {
            setInput('');
        }
    }, [dispatch]);

    return (
        <StyledSearch>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='search'
                        placeholder='Buscar...'
                        value={itemValue}
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
