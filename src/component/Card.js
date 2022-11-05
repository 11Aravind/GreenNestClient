import "../asset/css/card.css"
import { Link } from "react-router-dom"
import ButtonComponent from "./ButtonComponent"
// import Carousel from 'react-grid-carousel'
export default function Card({image,productname,newprice,oldprice,description,cardClass,product_id}) {
// console.log(window.$apiBaseUrl);
  return (
    // Make a request for a user with a given ID
    <>
     <div className={cardClass}>
<Link to="/productdetails" id={product_id}>
        <div className="product-img">
          <img className="productImage" src={image} alt="productImage" />
          {/* <div class="middle">
            <div class="text">View Product<i className="fa fa-caret-right arrow" aria-hidden="true"></i>
            </div>
          </div> */}
        </div>
        <div className="product-desc-container">
            <div className="product-name"> {productname}</div>
            <div className="price">
              <div>
              <div className="new-price"><b>₹{newprice}</b></div>
              <div className=""><s>₹{oldprice}</s></div>
              </div>
                         </div>
                         <ButtonComponent text="ADD TO CART" classs="addbtn"/>
        </div>
        </Link>
      </div>
    </>
  )
  
}

