import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/request";
import StyledDiv from "./styled";

const Profile = () => {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.loged);
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div>
      {loged === "on" ? (
        user.map((el) => {
          return (
            <StyledDiv>
              <div>
                <h1>
                  Bienvenido: {el.name} {el.lastName}
                </h1>
              </div>
              <hr />
              <div>
                <h2>Email: {el.email}</h2>
              </div>
              <div>
                <h4>Compras realizadas: </h4>
                {el.orders.length > 0 ? (
                  <div>{/* aca va el mapeo de los productos */}</div>
                ) : (
                  <div>
                    <p>No posee compras realizadas</p>
                  </div>
                )}
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
