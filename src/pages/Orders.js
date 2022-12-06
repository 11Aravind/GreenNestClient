import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { httpRequest } from "../API/api";
import ButtonComponent from "../component/ButtonComponent";
import Quantitybtn from "../component/Quantitybtn";
import "./Order.css";

const Orders = () => {
  const imagePath = useSelector((state) => state.banner.imagePath);
  const [orders, setOrders] = useState([]);
  // let orders = [];
  useEffect(() => {
    const loginCredentials = JSON.parse(
      localStorage.getItem("loginCredentials")
    );
    if (loginCredentials != null)
      httpRequest({ user_id: loginCredentials.user_id }, "getOrder.php").then(
        (data) => {
          console.log(data);
          setOrders(data);
        }
      );
  }, []);

  return (
    <>
      {orders.map((order, index) => {
        return <OrderItem key={index} order={order} />;
      })}
    </>
  );
};
export default Orders;

export const OrderItem = ({ order }) => {
  let orderedProducts = JSON.parse(order.product_id);
  const { order_id, totalAmount, transaction_id } = order;
  const [showProduct, toggleProduct] = useState(false)
  return (
    <div className="orderContainer">
      <div className="orderDetails">
        <div className="order_id font12">ID: {order_id}</div>
        <div className="totalAmount font12">Total: {totalAmount} </div>
        <div className="transaction_id font12">Payment: {transaction_id}</div>
        <div className="status font12">Transist</div>
        <div className="status font12"onClick={()=>toggleProduct(!showProduct)}>Open {showProduct}</div>
      </div>
        <div className="orderMsg">"Ecom id :65465456465464654"</div>
      <div> </div>
      <div className={showProduct?"products displayBlock" : "products displayNone"} >
        {orderedProducts.map((orderedProduct, index) => {
          return <Product key={index} orderedProduct={orderedProduct} />;
        })}
      </div>
    </div>
  );
};

export const Product = ({ orderedProduct }) => {
  const productList = useSelector((state) => state.productdetails.productList);
  const imagePath = useSelector((state) => state.banner.imagePath);

  let getProductDetailsByProductID = (product_id) => {
    let productDetails = productList.filter((item) => {
      return item.product_id == product_id;
    });
    return productDetails && productDetails[0];
  };
  const { product_id, quantity, price } = orderedProduct;
  const { product_name, product_img } =
    getProductDetailsByProductID(product_id);
  // console.log(productDetails)
  return (
    <>
      <div className="productContainer">
        <div className="productImageSection">
          <div className="name">{product_name}</div>
          <div className="image">
            <img src={imagePath + product_img} width="90" />
          </div>
        </div>
        <div className="price">{price}</div>
        <div className="quantity">{quantity}</div>
        <div className="total">{parseInt(quantity) * parseInt(price)}</div>
      </div>
    </>
  );
};
