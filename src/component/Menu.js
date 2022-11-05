import menuData from "./menuData.js"
import "../asset/css/navbar.css"
// import { Link } from "react-router-dom"
// import SubMenu from "./SubMenu"

import MenuItems from "./MenuItems"
export default function Menu() {
  return (
    <>
      <nav className="navBar">
        <label htmlFor="drop" className="toggle">&#8801; Menu</label>
        <input type="checkbox" id="drop" />
        <ul className="mainMenu">
          {
            menuData.map((singleMenu, index) => {
              return <MenuItems singleMenu={singleMenu} key={index} />
            })
          }
        </ul>
      </nav>

    </>
  )
}

