// import Menu from "./Menu";
import Searchbar from "./Searchbar";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import { useState } from "react";
import "../CSS/NavBar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Shopingcart from "../pages/Shopingcart";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, handleClick] = useState(false);
  const menuClicked = ({ rout, name }) => {
    if (rout) {
      navigate(rout, { state: { tag: name } });
      handleClick(false);
    }
    // console.log(data)
  };
  let options = [
    {
      name: "",
      titleIcon: <i className="fa fa-paragraph"></i>,
      hideBorder: true,
      content: [
        {
          id: 1,
          name: "PLANTS",
          children: [
            {
              content: [
                {
                  id: 3,
                  name: "indoor plants",
                  ["Some property i need on clicking this"]: "value",
                  rout: "/productList",
                },
                { id: 4, name: "Flowering Plants", rout: "/productList" },
                { id: 5, name: "Hanging Plants", rout: "/productList" },
                { id: 6, name: "Cacti and Succulents", rout: "/productList" },
                { id: 7, name: "Air Purifying Plants", rout: "/productList" },
              ],
            },
          ],
        },
        {
          id: 8,
          name: "SEEDS",
          children: [
            {
              content: [
                { id: 9, name: "Air Purifying Plants", rout: "/productList" },
                { name: "FLOWER SEEDS", id: 10, rout: "/productList" },
                { name: "VEGETABLE SEEDS", id: 11, rout: "/productList" },
                { name: "MICROGREEN SEEDS", id: 12, rout: "/productList" },
                { name: "HERB SEEDS", id: 13, rout: "/productList" },
                { name: "FLOWER BULBS", id: 14, rout: "/productList" },
                { name: "FRUIT SEEDS", id: 15, rout: "/productList" },
              ],
            },
          ],
        },
        {
          id: 16,
          name: "Planters",
          children: [
            {
              content: [
                { name: "PLASTIC PLANTERS", rout: "/productList" },
                { name: "CERAMIC PLANTERS", rout: "/productList" },
                { name: "METAL PLANTERS", rout: "/productList" },
                { name: "HANGING PLANTERS", rout: "/productList" },
                { name: "PLANT STANDS", rout: "/productList" },
                { name: "ZURI COLLECTION", rout: "/productList" },
                { name: "SEEDLING TRAYYS", rout: "/productList" },
              ],
            },
          ],
        },
        {
          id: 16,
          name: "Plant care",
          children: [
            {
              content: [
                { name: "POTTING MIX AND FERTILISERS", rout: "/productList" },
                { name: "GARDEN TOOLS", rout: "/productList" },
                { name: "WATERING CANS AND SPRAYERS", rout: "/productList" },
                { name: "GARDEN DECOR & ACCESSORIES", rout: "/productList" },
                { name: "PEST CONTROL", rout: "/productList" },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <MultilevelSidebar
        open={isOpen}
        onToggle={() => handleClick(!isOpen)}
        options={options}
        header="Green Nest"
        onItemClick={menuClicked}
      />

      <div className="headerDiv">
        <i
          className="fa fa-bars menuIcon"
          onClick={() => handleClick(true)}
          aria-hidden="true"
        ></i>

        <Link to="/">
          <div className="logo">
            <img
              srcSet="//cdn.shopify.com/s/files/1/0579/7924/0580/files/greenlogo.png?height=200&amp;v=1660383580 1x, //cdn.shopify.com/s/files/1/0579/7924/0580/files/greenlogo.png?height=400&amp;v=1660383580 2x"
              src="//cdn.shopify.com/s/files/1/0579/7924/0580/files/greenlogo.png?height=200&amp;v=1660383580"
              loading="lazy"
              width="131"
              height="59"
              alt="Ugaoo"
              className="header__heading-logo small-hide"
            />
          </div>
        </Link>
      </div>
      {/* </button> */}
      <Link to="/cart">
        <div className="cartButton">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
