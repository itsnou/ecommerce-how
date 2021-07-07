import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledDiv from "./styled.js";
import { getProductsAll, getProductsByName } from "../../redux/actions/request";
import ProductCard from "../ProductCard/ProductCard";
import ReactPaginate from "react-paginate";
import Loading from "../Loading/Loading";

const Catalogo = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(getProductsAll());
    dispatch(getProductsByName(""));
  }, [dispatch]);

  useEffect(() => {
    if (store.search !== 0) {
      setProducts(store.search);
    } else {
      setProducts(store.products);
    }
  }, [store.search, store.products]);

  //paginated
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 6; // productos a mostrar
  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product, idx) => {
      return <ProductCard key={idx} product={product} />;
    });

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {store.loading ? (
        <Loading />
      ) : (
        <StyledDiv>
          <div className="filter"></div>
          <div className="cards-container">{displayProducts}</div>
          <div className="paginate">
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
          </div>
        </StyledDiv>
      )}
    </>
  );
};

export default Catalogo;
