import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { editUserStatus, getUserDetail } from "../../../redux/actions";
import { getUsers } from "../../../redux/actions";
import swal from "sweetalert";
import { StyledUserDetail } from "../styled";
import { blockUser } from "../../../redux/actions/sending";

const ItemUsers = ({ match }) => {
  // const fixed = useRef(match.params.id);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetail);
  useEffect(() => {
    dispatch(getUserDetail(match.params.id));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(editUserStatus(user.email));
    dispatch(getUserDetail(match.params.id));
    // swal("¡Buen trabajo!", "¡Usuario modificado!", "success");
  };

  const blockedUser = () => {
    dispatch(blockUser(user._id));
    dispatch(getUserDetail(match.params.id));
  };

  return (
    <StyledUserDetail>
      <div>
        <li className="name">
          Nombre: {user.name} {user.lastName}
        </li>
        <li className="email">Email: {user.email}</li>
        {user.address && <li className="adress">Direccion: {user.address}</li>}
        <br />

        {user.orders && user.orders.length > 0 && (
          <>
            <li>
              {" "}
              Ordenes:
              {user.orders.map((u) => (
                <li>{u}</li>
              ))}
            </li>
          </>
        )}
        <li className="status">{user.userStatus}</li>
        <Button className="btn" variant="contained" onClick={handleClick}>
          Hacer Admin
        </Button>
        <Button
          className="btn"
          variant="contained"
          color="secondary"
          onClick={blockedUser}
        >
          Bloquear Usuario
        </Button>
        <Button className="btn" variant="contained">
          Forzar reinicio de contraseña
        </Button>
      </div>
    </StyledUserDetail>
  );
};

export default ItemUsers;
