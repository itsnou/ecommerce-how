import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/sending";
import { getProfile } from "../../redux/actions/request";

const Profile = () => {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.loged);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div>
      {loged === "on" ? (
        user.map((el) => {
          return (
            <div>
              <h1>{el.name}</h1>
              <h1>{el.lastName}</h1>
              <h1>{el.address}</h1>
              <h1>{el.email}</h1>
            </div>
          );
        })
      ) : (
        <h1>No logueado</h1>
      )}
    </div>
  );
};

export default Profile;
