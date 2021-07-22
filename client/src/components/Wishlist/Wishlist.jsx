import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/sending";
import { Link } from "react-router-dom";
import StyledDiv from "./styled";

export const Wishlist = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const loged = useSelector((state) => state.loged);
  const [wishlistBoolean, setWishlistBoolean] = useState(true);
  console.log(loged);

  useEffect(() => {
    user[0] &&
      user[0].wishlist?.map((e, index) => {
        products.map((product) => {
          if (product._id === e) {
            setWishlistBoolean(true);
          } else {
            setWishlistBoolean(false);
          }
        });
      });
  }, [user]);

  return (
    <StyledDiv>
      <h1>Productos en la wishlist de {user[0].name}</h1>
      {user[0] &&
        user[0].wishlist?.map((e, index) => {
          return products.map((product) => {
            if (product._id === e) {
              console.log(product);
              return (
                <Link
                  key={product._id}
                  className="link"
                  to={`/product/${product._id}`}
                >
                  <div className="divlink" key={index}>
                    <img src={product.imageUrl} />
                    <h3>{product.name}</h3>
                    <h3>{product.description}</h3>
                    <h3>${product.price}</h3>
                  </div>
                </Link>
              );
            }
          });
        })}
    </StyledDiv>
  );
};

export default Wishlist;
