import "./Banner.css";
export const Banner = ({heading}:any) => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 style={{fontSize:"35px"}}>{heading}</h1>
      </div>
    </div>
  );
};
