import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkOut } from "../../../redux/actions/sending";
import { setPayment } from "../../../redux/actions/cart";
import Button from "@material-ui/core/Button";
import StyledDiv from "./styled";

const StripePayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setPayment());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      console.log(id);
      dispatch(checkOut({ id, payment }));
      elements.getElement(CardElement).clear();
    } else {
      console.log(error);
    }
  };

  return (
    <StyledDiv>
      <h1>Productos: </h1>
      <div>
        <ul>
          {cart &&
            cart.map((el, idx) => {
              <li>{el.name} </li>;
            })}
        </ul>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="form-container">
        <CardElement className="form-control" />
        <Button type="submit">ENVIAR</Button>
      </form>
    </StyledDiv>
  );
};

export default StripePayment;
