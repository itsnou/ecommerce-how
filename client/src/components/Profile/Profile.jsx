import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/sending";
import { getProfile } from "../../redux/actions/request";
import StyledDiv from './styled';

const Profile = () => {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.loged);
  const user = useSelector(state => state.user);
  
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  console.log(user);

  return <div>{loged === "on" ? 
  <StyledDiv>
    <div>
      <h1>Bienvenido: {user.name} {user.lastName}</h1>
    </div>
    <hr/>
    <div>
      <h2>Email: {user.email}</h2>
    </div>
    <div>
      <h4>Compras realizadas: </h4>
      {
        user.orders.length > 0 
        ? <div>
          {/* aca va el mapeo de los productos */}
        </div>
        : <div><p>No posee compras realizadas</p></div>
      }
    </div>
  </StyledDiv> 
  : <h1>No logueado</h1>}</div>;
};

export default Profile;
