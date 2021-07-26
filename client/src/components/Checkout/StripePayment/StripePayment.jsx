import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkOut } from "../../../redux/actions/sending";
import { setPayment } from "../../../redux/actions/cart";
import Button from "@material-ui/core/Button";
import StyledDiv from "./styled";
import { Redirect } from "react-router";

const StripePayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const cart = useSelector((state) => state.cart);
  let total = 0;

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

  console.log(cart);

  return (
    <StyledDiv>
      <h1>Detalle: </h1>
      <div className='detail'>
        <ul>
          {cart &&
            cart.map((el, idx) => {
              total = total + el.price * el.quantity
              return <li key={idx}>
                <div>{el.name}</div>
                <div>{el.quantity} un.</div>
                <div>$ {el.price}</div>
                </li>;
            })}
        </ul>
        <h2>Importe total: $ {total}</h2>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="form-container">
        <CardElement className="form-control" />
        <Button type="submit">ENVIAR</Button>
      </form>
      {!cart.length ? <Redirect to="/profile"></Redirect> : null}
    </StyledDiv>
  );
};

export default StripePayment;
