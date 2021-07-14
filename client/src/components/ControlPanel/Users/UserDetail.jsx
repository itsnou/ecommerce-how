import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { editUserStatus, getUserDetail } from "../../../redux/actions";
import swal from "sweetalert";
import { StyledUserDetail } from "../styled";
import { blockUser } from "../../../redux/actions/sending";

const ItemUsers = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetail);
  useEffect(() => {
    dispatch(getUserDetail(match.params.id));
  }, [dispatch]);

  const handleClick = () => {
    if (user.userStatus === "Admin") {
      swal({ title: "El usuario ya es Admin", icon: "warning" });
    } else if (user.userStatus === "Bloqueado") {
      swal({ title: "El usuario esta Bloqueado", icon: "warning" });
    } else {
      swal({
        title: "¿Estas seguro?",
        text: "Estas por convertir este usuario a Admin",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(editUserStatus(user.email));
            dispatch(getUserDetail(match.params.id));
            swal("El usuario ahora es Admin", {
              icon: "success",
            });
          } else {
            swal("Accion cancelada", {
              icon: "error",
            });
          }
        });
    }
  };

  const blockedUser = () => {
    if (user.userStatus === "Bloqueado") {
      swal({ title: "El usuario ya fue bloqueado", icon: "warning" });
    } else {
      swal({
        title: "¿Estas seguro?",
        text: "Estar por bloquear este usuario",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(blockUser(user._id));
            dispatch(getUserDetail(match.params.id));
            swal("El usuario a sido bloqueado", {
              icon: "success",
            });
          } else {
            swal("Accion cancelada");
          }
        });
    }
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
