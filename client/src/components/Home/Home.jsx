import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { reset } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);

    useEffect(() => {
        dispatch(reset("search"));
        return dispatch(reset("search"));
    }, [dispatch]);

    return (
        <>
            {store.loading ? (
                <Loading />
            ) : (
                <div>
                    {store.search.length > 0 ? (
                        store.search.map((product) => (
                            <ProductCard product={product} />
                        ))
                    ) : (
                        <div>
                            <h1>ACA VA EL BANNER Y LOS VINOS EN OFERTA</h1>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Home;
