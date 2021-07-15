import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkOut } from "../../redux/actions/sending";
import { setPayment } from "../../redux/actions/cart";

const StripePayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(setPayment());
  }, []);

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
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <CardElement />
      <button>ENVIAR</button>
    </form>
  );
};

export default StripePayment;
