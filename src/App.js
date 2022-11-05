import "./asset/css/style.css";
import React from 'react';
import Navbar from "./component/Navbar.js";
// import Card from "./component/Card.js"
// import Searchbar from "./component/Searchbar.js"
// import Footer from "./component/Footer"
import { useEffect } from "react";
import axios from "axios";
import { AllRoutes } from "./AllRoutes";
import { useDispatch } from "react-redux";
import { fetchandstore } from "./Store1/Slices/productSlice"
import { httpRequest } from "./API/api";
window.$apiBaseUrl = "https://greenlandorganicfarms.com/api/User/";
// window.$apiBaseUrl = "http://localhost/Greennest/api/";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    httpRequest({}, "getProductList.php").then((data) => { dispatch(fetchandstore(data)) }).catch(error => console.log(error));
    // axios.get('http://localhost/Greennest/api/User/getProductList.php')
    //   .then((data) => dispatch(fetchandstore(data.data)))
    //   .catch(error => console.log(error));
  }, []);
  return (
    <>
      {/* <Topnavbar/> */}
      {/* <Searchbar /> */}
      <div className="container">
        <Navbar />
        <AllRoutes />
      </div>
    </>

  );
}

export default App;
