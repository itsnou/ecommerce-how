import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/sending";
import { getProfile } from "../../redux/actions/request";

const Profile = () => {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.loged);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return <div>{loged === "on" ? <h1>Logueado</h1> : <h1>No logueado</h1>}</div>;
};

export default Profile;
