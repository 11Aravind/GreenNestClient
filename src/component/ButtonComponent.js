import { useCart } from "react-use-cart";
const ButtonComponent = ({ classs, product, text, viewProduct }) => {
  const { addItem } = useCart();
  return (
    <>
      <button
        onClick={() => {
          if (viewProduct) {
          } else {
            let tmpProduct = JSON.parse(JSON.stringify(product));
            tmpProduct.id = product.product_id;
            tmpProduct.price = product.selling_price;
            addItem(tmpProduct,1);
          }
        }}
        className={classs}
      >
        {text}
      </button>
    </>
  );
};
export default ButtonComponent;
