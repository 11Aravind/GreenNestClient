import { useState } from "react";
import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import ButtonComponent from "../../component/ButtonComponent";
import "./OrderConfirmation.css";
export const OrderConfirmation = () => {
  const { isEmpty, items, cartTotal } = useCart();
  const savedAddress = useSelector((state) => state.user.address);
  const [address, setAddress] = useState(savedAddress);
  const [paymentMode, setPaymentMode] = useState("cod");
  let completeOrder = () => {
    console.log(address);
    console.log(items);
    console.log(paymentMode);

  };
  return (
    <div className="spacing categoryFilterContainer">
      <div className="product-headding">Confirm your location</div>
      <div className="address spacing">
        <textarea
          className="signInControl textArea spacing"
          placeholder="Enter Your Address"
          rows="4"
          name="address"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        ></textarea>
      </div>
      <div className="product-headding spacing">Payment mode</div>
      <div className="payementModeDiv spacing">
        <div>
          {" "}
          <label htmlFor="CashOnDelivary"> Cash on delivery</label>{" "}
          <input
            name="paymentMode"
            id="CashOnDelivary"
            type="radio"
            value="cod"
            checked={paymentMode == "cod"}
            onChange={(event) => {
              setPaymentMode(event.target.value);
            }}
          />
        </div>
        <div className="spacing">
          <label htmlFor="Online"> Online Payment</label>{" "}
          <input
            name="paymentMode"
            type="radio"
            id="Online"
            checked={paymentMode == "Online"}
            value="Online"
            onChange={(event) => {
              setPaymentMode(event.target.value);
            }}
          />
        </div>
      </div>
      <ButtonComponent
        text="Confirm"
        classs="addbtn checkOutBtn"
        orderConfirmation={true}
        onClick={completeOrder}
      />
    </div>
  );
};
