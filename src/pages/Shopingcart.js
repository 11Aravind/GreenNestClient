import Quantitybtn from "../component/Quantitybtn"
const Shopingcart = () => {
    return (
        <>
            <h1 className="cart_headding">Shopping Cart</h1>
                 <div className="cart-container">
                <div className="cart-body">
                    <div className="body-tr">
                        <div className="img-cart cart-th">
                            <img className="product-cart-img" src="https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/s/a/sardine.jpg" alt="product-img" />
                        </div>

                        <div className="product-det-cart">
                            <div className="cart-th">Premium Goat - Ribs Bone Pieces (250g pack)</div>
                            <div className="cart-th main-txt">₹149.00</div>
                            <div className="cart-th"><Quantitybtn /></div>
                            <div className="cart-th"><i className="fa fa-trash-o" aria-hidden="true"></i></div>
                        </div>

                    </div> {/* //tr close */}
                    <div className="body-tr">

<div className="img-cart cart-th">
    <img className="product-cart-img" src="https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/s/a/sardine.jpg" alt="product-img" />
</div>
<div className="product-det-cart">
    <div className="cart-th">Premium Goat - Ribs Bone Pieces (250g pack)</div>
    <div className="cart-th main-txt">₹149.00</div>
    <div className="cart-th"><Quantitybtn /></div>
    <div className="cart-th"><i className="fa fa-trash-o" aria-hidden="true"></i></div>
</div>

</div> {/* //tr close */}

                </div> {/* //card body close */}
 </div>{/* //cart-container close */}
        </>
    )

}
export default Shopingcart;

