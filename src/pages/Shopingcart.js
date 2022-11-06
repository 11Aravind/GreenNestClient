import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import ButtonComponent from "../component/ButtonComponent";
import Quantitybtn from "../component/Quantitybtn";

const Shopingcart = () => {
  const { isEmpty, items, cartTotal } = useCart();
  const imagePath = useSelector((state) => state.banner.imagePath);
  if (isEmpty) return <p>Your cart is empty</p>;
  console.log(items);
  return (
    <>
      {/* <h1 className="cart_headding spacing">Shopping Cart</h1> */}
      <div className="cart-container">
        <div className="cart-body">
          {items.map((product, key) => {
            return (
              <div className="body-tr" key={key}>
                <div className="img-cart cart-th">
                  <img
                    className="product-cart-img"
                    src={imagePath + product.product_img}
                    alt="product-img"
                  />
                </div>
                <div className="product-det-cart">
                  <div className="cart-th">{product.product_name}</div>
                  <div className="cart-th main-txt">{product.price}</div>
                  <div className="cart-th">
                    <Quantitybtn item={product} />
                  </div>
                  {/* <div className="cart-th">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
        <ButtonComponent
          text={"Checkout (" + cartTotal + ")"}
          classs="addbtn"
        />
      </div>
    </>
  );
};
export default Shopingcart;
