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

  return <div>{user && loged === "on" ? 
  <StyledDiv>
    <div>
      <h1>Bienvenido: {user[0].name} {user[0].lastName}</h1>
    </div>
    <hr/>
    <div>
      <h2>Email: {user[0].email}</h2>
    </div>
    <div>
      <h4>Compras realizadas: </h4>
      {
        user[0].orders.length > 0 
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
