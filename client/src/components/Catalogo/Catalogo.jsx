import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledDiv from "./styled.js";
import { getProductsAll } from "../../redux/actions/request";
import ProductCard from "../ProductCard/ProductCard";

const Catalogo = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsAll());
  }, [dispatch]);

  console.log(products);

  return (
    <StyledDiv>
      <div className="filter"></div>
      <div className="cards-container">
        {products &&
          products.map((el) => {
            return <ProductCard product={el} />;
          })}
      </div>
    </StyledDiv>
  );
};

export default Catalogo;
