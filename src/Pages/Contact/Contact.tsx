const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115495.19362806421!2d55.286668780596166!3d25.229352293199558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67b3189061c7%3A0x85bf4debb6c37086!2sAl%20Aweer%20Central%20Fruit%20%26%20Vegetable%20Market!5e0!3m2!1sen!2sin!4v1679095616496!5m2!1sen!2sin"
          width="50%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115495.19362806421!2d55.286668780596166!3d25.229352293199558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67b3189061c7%3A0x85bf4debb6c37086!2sAl%20Aweer%20Central%20Fruit%20%26%20Vegetable%20Market!5e0!3m2!1sen!2sin!4v1679095616496!5m2!1sen!2sin"
          width="50%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="row mt-4">
          <div
            className="col-lg-7 col-md-6 mt-2 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info">
              <div>
                <i className="ri-map-pin-line"></i>
                <p>
                  Block- 1 Shop 12Central fruit & vegetable market, Al
                  Aweer,Dubai-UAE Fresh Market Store No: B9 Central fruit and
                  vegetable market, Al Aweer, Dubai-UAE
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 mt-2 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info">
              <div>
                <i className="ri-mail-send-line"></i>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-6 mt-2 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info">
              <div>
                <i className="ri-phone-line"></i>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
