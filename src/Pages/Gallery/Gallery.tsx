import "./ProductGallery.scss";
export const Gallery = () => {
  const gallery = [
    {
      image:
        "https://images.unsplash.com/photo-1627133833133-adbd0b0e0e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      text: "Text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      text: "Text",
    },
  ];
  return (
    <>
      {/* <section id="about" style={{ marginTop: marginTop }} className="about"></section> */}
      <section className="fullscreen">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Gallery</h2>
          </div>
          <div className="wrapper">
            {gallery.map((galleryItem) => {
              return (
                <div className="imageContainer">
                  <img src={galleryItem.image} alt="" />
                  <span>{galleryItem.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
