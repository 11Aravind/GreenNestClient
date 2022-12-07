import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";
import "./OrderPlaced.css";
export const OrderPlaced = () => {
  const navigate = useNavigate();
  const { emptyCart } = useCart();

  setTimeout(() => {
    emptyCart();
    navigate("/");
  }, 4000);
  return (
    <div className="orderPlacedContainer bgGreen">
      <div className="orderMSG">
        Your order has been placed
        <div className="orderIcon">
          <i className="fa fa-check-circle" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
