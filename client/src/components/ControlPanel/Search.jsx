import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { getProductsByName, getUsers, reset, userFiltered } from '../../redux/actions';

import Button from '@material-ui/core/Button';
import { StyledSearch } from './styled';

const Search = ({ itemValue }) => {
    const [input, setInput] = useState('');
    const entry = useRef(input.length)
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
                break;
            case 'user':
                dispatch(getUsers());
                dispatch(userFiltered(input, store.users));
                break;
            default:
                setInput('');
        }
        setInput('');
    };

    useEffect(() => {
        if (entry.current === 0) {
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
