import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading/Loading';
import { getProductsAll } from '../../redux/actions'

const Home = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(getProductsAll());
    }, [dispatch]);

    return (
        <>
            {store.loading ? <Loading /> :
                (<div>
                    {store.products.length > 0 ?
                        store.products.map(product =>
                            <>aca se renderiza las card de products con las props</>) :
                        <div>
                            <h1>Products not found</h1>
                            <button type="button" onClick={() => { dispatch(getProductsAll()) }}>Return</button>
                        </div>}
                </div>
                )}
        </>
    )
};

export default Home;