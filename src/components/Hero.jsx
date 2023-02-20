import { Link } from "react-router-dom";
import heroImage from "../assets/illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <h1 className="title">More than just shorter links</h1>
          <p className="text">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <Link className="btn btn--rounded" to="">
            Get Started
          </Link>
        </div>
        <img src={heroImage} className="hero__image" />
      </div>
    </div>
  );
};

export default Hero;
