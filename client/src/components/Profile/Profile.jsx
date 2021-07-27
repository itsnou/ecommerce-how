import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getOrders } from "../../redux/actions/request";
import StyledDiv from "./styled";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.loged);
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getOrders());
  }, [dispatch]);


  return (
    <div>
      {loged === "on" ? (
        user.map((el) => {
          return (
            <StyledDiv>
              <div>
                <h2>
                  Bienvenido {el.name} {el.lastName}
                </h2>
              </div>
              <hr />
              <div>
                <h4>{el.email}</h4>
              </div>

              <div>
                <h4>Mis compras </h4>
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
                              <p>{invoice.date.slice(0, 10)}</p>
                              <p>$ {invoice.invoice.totalAmount} </p>
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
                <div className='container-wishlist'>
                <Link to="/wishlist" >
                  <button className='btn'>VER WISHLIST</button>
                  </Link>
                  <Link to={"/catalogo"}>
                    <button className='btn'>VOLVER</button>
                </Link>
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
