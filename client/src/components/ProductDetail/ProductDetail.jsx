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
  const [calification, setCalification] = useState(0);
  const [errors, setErrors] = useState("");
  console.log(detail.stock);

  useEffect(() => {
    dispatch(getProductDetail(fixed.current));
    if (wishlist.includes(detail._id)) setWishlistBoolean(true);
  }, [dispatch, detail._id, wishlist]);

  useEffect(() => {
    if (cart.length > 0) {
      let wine = cart.find((e) => e._id === detail._id);
      if (wine) {
        setCount(wine.quantity);
      }
    }
  }, [cart, detail._id]);

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
    if (count < 1 || count > detail.stock) {
      return setErrors(
        `La cantidad máxima es: ${detail.stock}, y la mímina es 1 `
      );
    }
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
    if (calification < 1 || calification > 5) {
      setErrors("");
    }
    dispatch(
      addReview({
        content: content,
        id: detail._id,
        calification: calification,
      })
    );
    setContent("");
    setCalification(0);
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
                    min={1}
                    max={detail.stock}
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                  <button onClick={() => handleClick()}>AGREGAR</button>
                  {window.sessionStorage.getItem("userLog") ? (
                    wishlistBoolean ? (
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
                    )
                  ) : null}
                  <h3>{errors}</h3>
                </div>
              )}
            </div>
            <div>
              {window.sessionStorage.getItem("userLog") ? (
                <div>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                      type="text"
                      placeholder="add review"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <div>
                      Puntaje
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={calification}
                        onChange={(e) => setCalification(e.target.value)}
                      ></input>
                      <button type="submit">Enviar</button>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </StyledDiv>
      )}
    </>
  );
};

export default ProductDetail;
