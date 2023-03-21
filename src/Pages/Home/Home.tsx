import Contact from "../Contact/Contact";
import { ToggleSwitch } from "../../Components/ToggleSwitch/ToggleSwitch";
import { useState, useEffect } from "react";
import "./Gallery.scss";
export const Home = () => {
  const [isVegitable, handleVegitables] = useState(true);
  const fruits = [
    {
      name: "Apple",
    },
    {
      name: "Orange",
    },
    {
      name: "Kiwi",
    },
    {
      name: "Avacado",
    },
    {
      name: "Strawberries",
    },
    {
      name: "Mango",
    },
    {
      name: "Pineapple",
    },
    {
      name: "Grape",
    },
    {
      name: "Banana",
    },
    {
      name: "Watermelon",
    },
    {
      name: "Dragaon Fruit",
    },
    {
      name: "Pappaya",
    },
    {
      name: "Raspberries",
    },
    {
      name: "Cranberries",
    },
    {
      name: "Fig",
    },
    {
      name: "Guava",
    },
    {
      name: "Sapota",
    },
    {
      name: "Pear",
    },
  ];
  const vegitables = [
    {
      name: "Onion",
    },
    {
      name: "Tomato",
    },
    {
      name: "Coconut",
    },
    {
      name: "Mushroom",
    },
    {
      name: "Chillies",
    },
    {
      name: "Celery",
    },
    {
      name: "Cauliflower",
    },
    {
      name: "Potato",
    },
    {
      name: "Carrot",
    },
    {
      name: "Broccoli",
    },
    {
      name: "Pumpkin",
    },
    {
      name: "Capsicum",
    },
    {
      name: "Beetroot",
    },
  ];
  const [products, handleProductArray] = useState(vegitables);

  useEffect(() => {
    handleProductArray(isVegitable ? vegitables : fruits);
  }, [isVegitable]);

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="typewriter col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Savor the taste of nature with our fruits and veggies!
              </h1>
              {/* <!-- <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2> --> */}
              <div data-aos="fade-up" data-aos-delay="800">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="./img/sliderImage.webp"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* <!-- ======= Clients Section ======= --> */}
        {/* <section id="clients" className="clients clients">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src="./img/clients/client-1.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src="./img/clients/client-2.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src="./img/clients/client-3.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src="./img/clients/client-4.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src="./img/clients/client-5.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src="./img/clients/client-6.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- End Clients Section -->

      <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Features</h2>
              <p>Tailored solutions to meet your needs.</p>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bi bi-box"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Wholesale</a>
                  </h4>
                  <p className="description">
                    Bulk supply of fresh produce for global distribution.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bi bi-boxes"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Retail</a>
                  </h4>
                  <p className="description">
                    Fresh, quality produce for retail customers worldwide.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bi bi-airplane"></i>
                  </div>
                  <h4 className="title">
                    <a href=""> International business</a>
                  </h4>
                  <p className="description">
                    International business with Kenya, South Africa, Sri Lanka,
                    India, China, Egypt, Pakistan, Iran, Turkey, Ukraine.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="bi bi-truck"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Own logistics and supply chain management</a>
                  </h4>
                  <p className="description">
                    In-house logistics and supply chain management for efficient
                    operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "1%" }}>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bi bi-currency-dollar"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Attractive Pricing</a>
                  </h4>
                  <p className="description">
                    Competitive and compelling pricing to fit your budget.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bi bi-stars"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Premium Quality</a>
                  </h4>
                  <p className="description">
                    Superior quality products and services to exceed
                    expectations.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <h4 className="title">
                    <a href=""> Direct market access</a>
                  </h4>
                  <p className="description">
                    We offer direct market access to Kenya, South Africa, Sri
                    Lanka, India, China, Egypt, Pakistan, Iran, Turkey, and
                    Ukraine, among other countries.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="bi bi-cursor"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Re-Exporting</a>
                  </h4>
                  <p className="description">
                    Exporting previously imported goods to new markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section -->
      <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Our Products</h2>
              <p>
                Freshly harvested fruits and veggies for global distribution.
              </p>
            </div>
            <ToggleSwitch
              isVegitable={isVegitable}
              handleVegitables={handleVegitables}
            />
            <section className="skills">
              <div className="container">
                <div className="skills-flex-container">
                  {products.map((item, index) => {
                    return (
                      <div className="box" key={index}>
                        <a
                          href={
                            "whatsapp://send?text=I am interested in buying " +
                            item.name +
                            ". Can you provide me with pricing and shipping information?!&phone=+971525966515"
                          }
                        >
                          <div className="image">
                            <img
                              src={"../../../img/product/" + item.name + ".png"}
                              alt={item.name}
                            />
                          </div>{" "}
                        </a>
                        <div className="title">{item.name}</div>
                      </div>
                      // </a>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <Contact />
        {/* <!-- End Contact Section --> */}
      </main>
    </>
  );
};
