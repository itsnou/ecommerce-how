import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const buyWine = (product) => {
    //aca van las cosas del carrito para que pusheen.
    dispatch(addToCart(product));
  };

  return (
    <div>
      {product.name ? (
        <div className="container-card">
          <Link to={`/product/${product._id}`}>
            <div className="card-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
          </Link>
          <div className="card-sales">
            <h3 className="card-name">{product.name}</h3>
            <hr className="line-div" />
            <p className="card-adds">{product.category}</p>
            <h2 className="card-price">$ {product.price}</h2>
            <div className="card-buttonsDiv">
              <button
                className="card-buttons_build"
                onClick={() => buyWine(product)}
              >
                <FaCartPlus />
                AGREGAR
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>No hay coincidencias</h1>
      )}
    </div>
  );
};

export default ProductCard;
