import sliderelement from "../datas/sliderData.js"
// import Rating  from 'react-rating-scale';
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';
import "../asset/css/slider.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerDetails } from "../Store1/Slices/bannerSlice"
import { useEffect, useState } from "react";
export default function Imageslider() {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost/Greennest/api/User/getGalleryList.php')
      .then((data) => { dispatch(fetchBannerDetails(data.data)) })
      .catch(error => console.log(error));
  }, []);
  const banner = useSelector((state) => state.banner.bannerList);
  const imagePath = useSelector((state) => state.banner.imagePath);
  // console.log(banner[0]);
  // 
  // const bannerItem =()=>{
  //   if(banner)
  // }
  return (
    <div className="slider-containerDiv">
      {banner.length > 0 ?
        <Slider autoplay>
          {
            banner.map((singleImg, index) => {
              return (
                <div className="slider-img slide" key={index} style={{ zIndex: "0", backgroundImage: `url(${imagePath + singleImg.image})` }}>
                  {/* <h1>{index}</h1> */}
                </div>

              )
            })
          }

        </Slider>
        : <></>
      }
    </div>
  )
}

