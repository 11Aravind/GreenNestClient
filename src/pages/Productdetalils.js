import "../asset/css/productdetails.css"
import {Link } from "react-router-dom"
import Quantitybtn from "../component/Quantitybtn"
import ButtonComponent from "../component/ButtonComponent"
export default function Productdetalils() {

  return (
    <>
      <div className="productdetail-container">
        <div className="productdetails-left-container">
          {/* <div className="product-img-container"> */}
            <div className="big-product-img">
              <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-set-of-12-best-beans-vegetable-seeds_600x600.jpg?v=1636785869" alt="big-img" />
            {/* </div> */}
          </div>
        </div>
        <div className="productdetails-right-container spacing">
          <h2 className="product-names">Set of 12 Best Beans Vegetable Seeds</h2>
          {/* <div class="product_subtitle">Net Weight: 480-500g | No. of Pieces: 14-16 | Skinless | Cut: Small Pcs</div> */}
          {/* <div className="price">147</div> */}
          <div className="price-btn-container">
         <div> ₹149.00 /pack</div>
          <div className="button-flex">
            <Quantitybtn />
           <Link to="/cart"> <ButtonComponent text="ADD TO CART" classs="addtocart" /></Link>
          </div>
          (Totel price: 123)
          </div>
          <div className="product-small-desc">
          (MRP Inclusive of all taxes)

Shipping ₹ 79 for entire order
Dispatch in 7 days
Country of origin: India
          </div>
        </div>
      </div>
    </>
  )
}


