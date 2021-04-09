import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
import SplitCardForm from "./SplitCardForm";

const stripePromise = loadStripe(
  "pk_test_51Ie9ZXBjQKjl2gnMRtnIKkQcSkKRYqFUkMbvF0tC2w5BIxmC9muLrYSGR9PJOCqnl7liWXY9j1dlMW0Is1xXqdZQ00bQLvMW3m"
);

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
        <h3>Please Pay For Me</h3>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
