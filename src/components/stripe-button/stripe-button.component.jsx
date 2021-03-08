import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ISqPlA1s45vx4Kcz991OSGFqIQaU6BhBkQzA7de8N5uiuUSvvOzx435o5qkX2P355HHHNAgRwiPNuRtfEwZwzGX00D1kvQV7K";

  const onToken = (token) => {
    console.log(token);
    alert("Pament Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
