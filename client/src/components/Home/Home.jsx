import { React, useEffect } from "react";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
import Destacados from "./Destacados/Destacados";
import StyledDiv from "./styled.js";
import { usePopup } from "react-hook-popup";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/request";
import { subscription } from "../../redux/actions/sending";
import { Snackbar, Alert } from "@material-ui/core";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showPopup, hidePopup] = usePopup(
    "popup",
    ({ message, handleClose }) => (
      <Snackbar open autoHideDuration={6000} onClose={handleClose}>
        <StyledDiv>
          <div className="divNewsletter">
            <h3>¿Quieres suscribirte para recibir ofertas y novedades?</h3>
            <button
              className="subscribe"
              value="subscribe"
              onClick={(e) => {
                subscribe(e);
                handleClose();
              }}
            >
              SÍ
            </button>
            <button className="unsubscribe" onClick={handleClose}>
              NO
            </button>
          </div>
        </StyledDiv>
      </Snackbar>
    )
  );

  const subscribe = (e) => {
    dispatch(subscription(true));
  };

  useEffect(() => {
    if (
      window.sessionStorage.getItem("userLog") &&
      user[0]?.userStatus !== "Admin"
    ) {
      dispatch(getProfile());
    }
  }, [dispatch]);

  useEffect(() => {
    if (user[0]?.subscribed === false) {
      showPopup("hola");
    }
  }, [user]);

  return (
    <StyledDiv>
      <div className="banner">
        <Banner />
      </div>
      <div>
        <Destacados />
      </div>
      <div>
        <Footer />
      </div>
    </StyledDiv>
  );
};

export default Home;
