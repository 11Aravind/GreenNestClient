// import Menu from "./Menu";
import Searchbar from "./Searchbar";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import { useState } from "react";
import menuData from "./menuData.js";
import "../CSS/NavBar.css";
const Navbar = () => {
  const [isOpen, handleClick] = useState(false);

  let options = [
    // {
    //     name: "Education",
    //     titleIcon: <i className="fa fa-graduation-cap"></i>,
    //     content: [{ id: 1, name: "My courses", to: "/my-courses" }]
    // },
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
                },
                { id: 4, name: "Flowering Plants" },
                { id: 5, name: "Hanging Plants" },
                { id: 6, name: "Cacti and Succulents" },
                { id: 7, name: "Air Purifying Plants" },
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
                { id: 9, name: "Air Purifying Plants" },
                { name: "FLOWER SEEDS", id: 10 },
                { name: "VEGETABLE SEEDS", id: 11 },
                { name: "MICROGREEN SEEDS", id: 12 },
                { name: "HERB SEEDS", id: 13 },
                { name: "FLOWER BULBS", id: 14 },
                { name: "FRUIT SEEDS", id: 15 },
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
                { name: "PLASTIC PLANTERS" },
                { name: "CERAMIC PLANTERS" },
                { name: "METAL PLANTERS" },
                { name: "HANGING PLANTERS" },
                { name: "PLANT STANDS" },
                { name: "ZURI COLLECTION" },
                { name: "SEEDLING TRAYYS" },
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
                { name: "POTTING MIX AND FERTILISERS" },
                { name: "GARDEN TOOLS" },
                { name: "WATERING CANS AND SPRAYERS" },
                { name: "GARDEN DECOR & ACCESSORIES" },
                { name: "PEST CONTROL" },
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
        // onItemClick={this.handleClick}
      />
      {/* using in our button to open the sidebar */}
      {/* <button > */}
      <div className="headerDiv">
        <i
          className="fa fa-bars menuIcon"
          onClick={() => handleClick(true)}
          aria-hidden="true"
        ></i>
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
      </div>
      {/* </button> */}
    </div>
  );
};
export default Navbar;
