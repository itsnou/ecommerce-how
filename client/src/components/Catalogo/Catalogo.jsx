import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import StyledDiv from './styled.js';
import {getProductsAll} from '../../redux/actions/request';
import ProductCard from '../ProductCard/ProductCard';
import ReactPaginate from 'react-paginate';


const Catalogo = () => {
    const dispatch = useDispatch();
    const products = useSelector(state=> state.products);

    useEffect(()=>{
        dispatch(getProductsAll());
     },[dispatch]);

     //paginated
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage= 6; // productos a mostrar
    const pagesVisited = pageNumber * productsPerPage;
    const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product,idx) =>{
        return <ProductCard key={idx} product={product}/>
    });

    const pageCount = Math.ceil(products.length / productsPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected);
    };

    return (
        <StyledDiv>
            <div className='filter'>
            </div>
            <div className='cards-container'>
                {displayProducts}
            </div>
            <div className='paginate'>
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
    );
}
 
export default Catalogo;