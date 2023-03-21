import CountUp from "react-countup";
import "./About.css";
import Contact from "../Contact/Contact";

export const About = ({ marginTop = 70 }) => {
  return (
    <>
      <img className="aboutUsBGImg2"    data-aos="fade-left" src="./img/product/pineapple.png" />
      <img
        className="aboutUsBGImg1"
        data-aos="fade-right"
        src="https://freepngimg.com/thumb/orange/19-orange-png-image-download.png"
      />
      <section id="about" style={{ marginTop: marginTop }} className="about">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p className="fontSizeAbout">
                Welcome to our vegetable and fruit exporting company! We are a
                passionate team of experts committed to providing the freshest
                and highest-quality produce to our customers around the world.
                With years of experience in the industry, we have established
                strong relationships with farmers and suppliers to ensure that
                our fruits and vegetables are sourced from the best farms and
                orchards in the region. Our produce is carefully handpicked,
                packed, and shipped to meet the highest standards of freshness
                and quality, ensuring that our customers receive the best
                possible products.
              </p>
              <ul className="fontSizeAbout">
                <li>
                  <i className="ri-check-double-line"></i> High-quality produce.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Efficient shipping
                  and logistics.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Sustainability and
                  ethical practices.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Excellent customer
                  service.
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="fontSizeAbout">
                At our company, we take pride in our commitment to
                sustainability and ethical practices. We believe in supporting
                local farmers and communities, reducing waste, and promoting
                environmentally friendly methods of farming. Our team works
                tirelessly to ensure that our products meet the highest
                standards of quality, safety, and sustainability, so you can
                feel good about the fruits and vegetables you purchase from us.
                We are dedicated to providing our customers with the best
                possible experience, from the quality of our produce to the
                efficiency of our shipping and customer service. Thank you for
                choosing our company for your fruit and vegetable needs!
              </p>
              {/* <!-- <a href="#" className="btn-learn-more">Learn More</a> --> */}
            </div>
          </div>
        </div>
      </section>
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src="./img/counts-img.svg" alt="" className="img-fluid" />
            </div>

            <div
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-emoji-smile"></i>
                      <CountUp
                        end={1000}
                        duration={4}
                        suffix="+"
                        className="purecounter"
                      />
                      <p>
                        <strong>Happy Clients</strong>: Quality produce,
                        efficient shipping, sustainable practices, Happy
                        Clientsworldwide.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-journal-richtext"></i>
                      <CountUp
                        end={1000000}
                        duration={4}
                        suffix="+"
                        className="purecounter"
                      />
                      <p>
                        <strong>Orders</strong>. Fresh fruits and vegetables
                        delivered worldwide, hassle-free orders.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock"></i>
                      <CountUp
                        end={5}
                        duration={4}
                        suffix="+"
                        className="purecounter"
                      />
                      <p>
                        <strong>Five year</strong>: Experienced professional
                        with five years' expertise in ex[prting field.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-award"></i>
                      <CountUp
                        end={35}
                        duration={4}
                        suffix="+"
                        className="purecounter"
                      />
                      {/* <span
                        data-purecounter-start="0"
                        data-purecounter-end="35"
                        data-purecounter-duration="2"
                        className="purecounter"
                      ></span> */}
                      <p>
                        <strong>Employees</strong>: Highly qualified employees
                        make up our workforce.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End .content--> */}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};
