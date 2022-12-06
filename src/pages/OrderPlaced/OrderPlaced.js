import { useNavigate } from "react-router";
import "./OrderPlaced.css";
export const OrderPlaced = () => {
    const navigate = useNavigate();
    setTimeout(() => {
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
