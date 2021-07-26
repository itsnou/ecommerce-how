import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getOrders } from "../../redux/actions/request";
import StyledDiv from "./styled";
import { Link } from "react-router-dom";
import Wishlist from "../Wishlist/Wishlist";

const Profile = () => {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.loged);
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getOrders());
  }, [dispatch]);

  console.log(orders);

  return (
    <div>
      {loged === "on" ? (
        user.map((el) => {
          return (
            <StyledDiv>
              <div>
                <h1>
                  Bienvenido {el.name} {el.lastName}
                </h1>
              </div>
              <hr />
              <div>
                <h2>Email: {el.email}</h2>
              </div>
              <div className='container-wishlist'>
                <Link to="/wishlist" className='profile-wishlist'>Mi Wishlist</Link>
              </div>
              <div>
                <h4>Compras realizadas: </h4>
                <ul className="orders-ul">
                  {orders.length > 0 ? (
                    orders.map((invoice, idx) => {
                      return (
                        <Link
                          to={`/profile/${idx}`}
                          params={{ orders: orders }}
                          className="orders-links"
                        >
                          <li className="orders-li" key={idx}>
                            <div className="orders-users">
                              <h4>Fecha de compra: </h4>
                              <p>{invoice.date.slice(0, 10)}</p>
                              <p>{invoice.state}</p>
                            </div>
                          </li>
                        </Link>
                      );
                    })
                  ) : (
                    <li>
                      <p>No posee compras realizadas</p>
                    </li>
                  )}
                </ul>
              </div>
            </StyledDiv>
          );
        })
      ) : (
        <h1>No logueado</h1>
      )}
    </div>
  );
};

export default Profile;
