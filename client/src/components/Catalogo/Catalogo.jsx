import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledDiv from "./styled.js";
import { getProductsAll, getProductsByName } from "../../redux/actions/request";
import ProductCard from "../ProductCard/ProductCard";
import ReactPaginate from "react-paginate";
import Loading from "../Loading/Loading";
import Filters from "../Filters/Filters";
import Sort from "../Sorts/Sort";

const Catalogo = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);
    const products = useSelector((state) => state.products);
    const productsFilter = useSelector((state) => state.productsFilter);
    const [renderProduct, setRenderProduct] = useState([]);
    const filter = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(getProductsAll());
        dispatch(getProductsByName(""));
    }, [dispatch]);

    useEffect(() => {
        if (search.length) {
            setPageNumber(0);
        } else {
            if (productsFilter && productsFilter.length) {
                setPageNumber(0);
            }
        }
    }, [search.length, productsFilter]);

    useEffect(() => {
        setRenderProduct(search.length ? search : products);
    }, [search, products]);

    let filterProducts = filter === "on" ? productsFilter : renderProduct;

    //paginated
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 6; // productos a mostrar
    const pagesVisited = pageNumber * productsPerPage;
    const displayProducts = filterProducts
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((product, idx) => {
            return <ProductCard key={idx} product={product} />;
        });

    const pageCount = Math.ceil(filterProducts.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <StyledDiv>
                <div className="filter">
                    <Filters></Filters>
                    <Sort></Sort>
                </div>
                <div className="cards-container">
                    {displayProducts.length ? (
                        displayProducts
                    ) : (
                        <h1>No hay coincidencias</h1>
                    )}
                </div>
                <div className="paginate">
                    {filterProducts.length > 6 ? (
                        <ReactPaginate
                            previousLabel={"Anterior"}
                            nextLabel={"Siguiente"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBtn"}
                            previousLinkClassName={"previousBtn"}
                            nextLinkClassName={"nextBtn"}
                            disabledClassName={"paginationDisable"}
                            activeClassName={"paginationActive"}
                        />
                    ) : null}
                </div>
            </StyledDiv>
        </>
    );
};

export default Catalogo;
