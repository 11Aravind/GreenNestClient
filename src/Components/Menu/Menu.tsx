import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
const Menu = () => {
  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="nav-link scrollto active" to="/">
            <div className="logo">
              <img src="./logo.png" className="img-fluid" />
            </div>
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto" to="/">
                  Home
                </Link>
              </li>
              {/* <li><a className="nav-link scrollto active" href="#hero">Home</a></li> */}
              {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
              <li>
                <Link className="nav-link scrollto" to="/about">
                  About
                </Link>
              </li>

              <li>
                <NavHashLink
                  to="/#services"
                  smooth
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Services
                </NavHashLink>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              {/* <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Menu;
