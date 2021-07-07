import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledDiv from "./styled.js";
import { getProductsAll } from "../../redux/actions/request";
import ProductCard from "../ProductCard/ProductCard";
import Filters from "../Filters/Filters";

const Catalogo = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getProductsAll());
  }, [dispatch]);

  const askFilter = filter === "on" ? productsFilter : products;

  return (
    <StyledDiv>
      <div className="filter">
        <Filters></Filters>
      </div>
      <div className="cards-container">
        {products &&
          askFilter.map((el) => {
            return (
              <ProductCard
                name={el.name}
                image={el.imageUrl}
                price={el.price}
                category={el.category}
                id={el._id}
              />
            );
          })}
      </div>
    </StyledDiv>
  );
};

export default Catalogo;
