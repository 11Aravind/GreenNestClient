// import { useEffect } from "react"
// import axios from "axios";
import Card from "../component/Card";
import Carousel from "react-grid-carousel";
// import { CountriesSlider } from "../component/Card"
import Slider from "../component/Imageslider";
// import { Slidercard } from "../component/Slidercard"
import { useSelector } from "react-redux";
export default function Home() {
  const products = useSelector((state) => state.productdetails.productList);
  const imagePath = useSelector((state) => state.banner.imagePath);

  return (
    <>
      <Slider />
      <div className="product-container spacing">
        <div className="headding-container">
          <div className="label-img">
            <img
              src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/New-Plants_2x_d5110dfd-b698-4342-ba8d-9aa908711a32_small.png?v=1656414976"
              alt="label-img"
            />
          </div>
          <div className="product-headding topheadding">New Arrivals</div>
          <div className="arrow-container"></div>
        </div>

        <div className="card-container">
          <Carousel
            containerStyle={{ width: "100%" }}
            loop={false}
            cols={2}
            rows={1}
            mobileBreakpoint={392}
            responsiveLayout={[
              { breakpoint: 761, cols: 2, rows: 1 },
              { breakpoint: 2080, cols: 4, rows: 1 },
            ]}
          >
            {products.map((item, index) => {
              var newArrivalArray = JSON.parse(item.product_tags);
              return newArrivalArray.filter((name) =>
                name.includes("NEW_ARRIVALS")
              ) == "NEW_ARRIVALS" ? (
                <Carousel.Item key={index}>
                  <Card
                    image={imagePath + item.product_img}
                    cardClass="single-card"
                    productname={item.product_name}
                    oldprice={item.old_price}
                    newprice={item.selling_price}
                    description={item.description}
                    productInfo={item}
                    viewProduct={true}
                  />
                </Carousel.Item>
              ) : null;
            })}
          </Carousel>
        </div>

        <div className="headding-container spacing">
          <div className="label-img">
            <img
              src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Bestseller-1_2x_9a883cf1-58ba-4c74-badf-f02924575b68_small.png?v=1656416175"
              alt="label-img"
            />
          </div>
          <div className="product-headding topheadding">Trending Products</div>
          <div className="arrow-container"></div>
        </div>

        <div className="card-container">
          <Carousel
            containerStyle={{ width: "100%" }}
            loop={false}
            cols={2}
            rows={1}
            mobileBreakpoint={392}
            responsiveLayout={[
              { breakpoint: 761, cols: 2, rows: 1 },
              { breakpoint: 2080, cols: 4, rows: 1 },
            ]}
          >
            {products.map((item, index) => {
              var newArrivalArray = JSON.parse(item.product_tags);
              // console.log(newArrivalArray);
              return newArrivalArray.filter((name) =>
                name.includes("BEST_SELLER")
              ) == "BEST_SELLER" ? (
                <Carousel.Item key={index}>
                  <Card
                    image={imagePath + item.product_img}
                    cardClass="single-card"
                    productname={item.product_name}
                    oldprice={item.old_price}
                    newprice={item.selling_price}
                    description={item.description}
                    productInfo={item}
                  />
                </Carousel.Item>
              ) : null;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
