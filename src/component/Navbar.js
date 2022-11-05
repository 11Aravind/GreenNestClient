import Menu from "./Menu";
import Searchbar from "./Searchbar";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import { useState } from "react";
const Navbar = () => {
    const [isOpen, handleClick] = useState(false);

    let options = [
        // {
        //     title: "Education",
        //     titleIcon: <i className="fa fa-graduation-cap"></i>,
        //     content: [{ id: 1, name: "My courses", to: "/my-courses" }]
        // },
        {
            title: "",
            titleIcon: <i className="fa fa-paragraph"></i>,
            hideBorder: true,
            content: [
                {
                    id: 2,
                    name: "Web Development",
                    icon: <i className="fa fa-chrome"></i>,
                    children: [
                        {
                            titleIcon: <i className="fa fa-opera"></i>,
                            content: [
                                {
                                    id: 3,
                                    name: "functions",
                                    ["Some property i need on clicking this"]: "value"
                                },
                                {
                                    id: 4,
                                    name: "aa",
                                    ["Some property i need on clicking this"]: "value",
                                    children: [{
                                        content: [{ id: 1, name: "My courses", to: "/my-courses" }]
                                    }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
    return (
        <>
            <MultilevelSidebar
                open={isOpen}
                onToggle={() => handleClick(!isOpen)}
                options={options}
                header="Greennest"
            // onItemClick={this.handleClick}
            />
            {/* using in our button to open the sidebar */}
            {/* <button > */}
            <i className="fa fa-bars" onClick={() => handleClick(true)} aria-hidden="true"></i>
            {/* </button> */}


        </>
    )
}
export default Navbar;