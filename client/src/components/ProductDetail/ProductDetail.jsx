import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/request";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const detail = useSelector((store) => store.productDetail);

  const [quantity, setCuantity] = useState(0);

  const handleInputChange = (e) => {
    let num = e.target.value;
    if (num < 1 || num > detail.stock) {
      setCuantity(num);
    }
  };

  useEffect(() => {
    let id = match.params.id;
    dispatch(getProductDetail(id));
  }, []);

  return (
    <div>
      <h1>Componente detail</h1>
      <h2>{detail.name}</h2>
      <div>
        <img src={detail.imageUrl} alt="image not found" />
      </div>
      <div>
        <h3>Bodega: {detail.vineyard}</h3>
        <h3>Categoria: {detail.category}</h3>
        <h3>Precio: ${detail.price}</h3>
        <div>
          <h3>Varietal/es: </h3>
          {detail.varietal &&
            detail.varietal.map((e) => {
              return <h3 key={e}>{e}</h3>;
            })}
        </div>
        <h3>detalle: {detail.description}</h3>
        <div>
          <input type="number" value={quantity} />
          <button>add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
