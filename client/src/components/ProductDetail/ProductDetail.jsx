import { React, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/request";
import { addToCart } from "../../redux/actions/cart";
import StyledDiv from "./style";
import StarRatingComponent from "react-star-rating-component";
import { FaWineGlass } from "react-icons/fa";
import emptyheart from "../../assets/image/emptyheart.png";
import fullheart from "../../assets/image/fullheart.png";
import {
  addReview,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/sending";
import Loading from "../Loading/Loading";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const detail = useSelector((store) => store.productDetail);
  const cart = useSelector((store) => store.cart);
  const load = useSelector((store) => store.loading);
  const [count, setCount] = useState(0);
  const [stars, setStars] = useState(0);
  const fixed = useRef(match.params.id);
  const wishlist = useSelector((store) => store.wishlist);
  const [wishlistBoolean, setWishlistBoolean] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(getProductDetail(fixed.current));
    if (wishlist.includes(detail._id)) setWishlistBoolean(true);
  }, [dispatch]);

  useEffect(() => {
    if (cart.length > 0) {
      let wine = cart.find((e) => e._id === detail._id);
      if (wine) {
        setCount(wine.quantity);
      }
    }
  }, []);

  useEffect(() => {
    if (detail.rating) {
      let totalStars = detail.rating.reduce((a, b) => a + b, 0);
      setStars(totalStars / detail.rating.length);
    }
  }, [detail]);

  const handleClick = () => {
    let obj = {
      ...detail,
      quantity: count,
    };
    dispatch(addToCart(obj));
    window.localStorage.setItem(`${detail.name}`, JSON.stringify(obj));
  };

  const handleWishlist = (e) => {
    if (e === "remove") {
      dispatch(removeFromWishlist(detail._id));
      setWishlistBoolean(false);
    }
    if (e === "add") {
      dispatch(addToWishlist(detail._id));
      setWishlistBoolean(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview(content));
    setContent("");
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <StyledDiv>
          <div className="detail-img">
            <img src={detail.imageUrl} alt={detail.name} />
          </div>
          <div className="detail-explain">
            <div className="detail-render">
              <h2>{detail.name}</h2>
              <h3>Bodega: {detail.vineyard}</h3>
              <h3>Categoria: {detail.category}</h3>
              <h3>Precio: ${detail.price}</h3>
              <div className="detail-varietal">
                <h3>Varietal/es: </h3>
                {detail.varietal &&
                  detail.varietal.map((e) => {
                    return <h3 key={e}>{e}</h3>;
                  })}
              </div>
              <div className="detail-stars">
                <h3>
                  puntaje:
                  <StarRatingComponent
                    name="rateWine"
                    editing={false}
                    renderStarIcon={() => (
                      <span>
                        <FaWineGlass />
                      </span>
                    )}
                    starCount={5}
                    value={stars}
                  />
                </h3>
              </div>
              <div className="product-description">
                <h3>Detalle: {detail.description}</h3>
              </div>
              {detail.stock < 1 ? (
                <div className="detail-btn">
                  <h3>SIN STOCK</h3>
                </div>
              ) : (
                <div className="detail-btn">
                  <input
                    type="number"
                    min={detail.quantity}
                    max={detail.stock}
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                  <button onClick={() => handleClick()}>AGREGAR</button>
                  {wishlistBoolean ? (
                    <button
                      className="btn-wishlist"
                      onClick={() => {
                        handleWishlist("remove");
                      }}
                    >
                      <img
                        className="btn-wishlist"
                        alt="Couldn't load"
                        src={fullheart}
                      />
                    </button>
                  ) : (
                    <button
                      className="btn-wishlist"
                      onClick={() => {
                        handleWishlist("add");
                      }}
                    >
                      <img
                        className="btn-wishlist"
                        alt="Couldn't load"
                        src={emptyheart}
                      />
                    </button>
                  )}
                </div>
              )}
            </div>
            <div>
              {window.sessionStorage.getItem("userLog") ? (
                <form onSubmit={(e) => handleSubmit(e)}>
                  <input
                    type="text"
                    placeholder="add review"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <button type="submit">Enviar</button>
                </form>
              ) : null}
            </div>
          </div>
        </StyledDiv>
      )}
    </>
  );
};

export default ProductDetail;
