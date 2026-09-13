import "./styles/Landing.css";
import tanishaImage from "../assets/tanisha.png";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hi, I'm</h2>
            <h1>TANISHA</h1>
          </div>

          <div className="landing-photo">
            <img
              src={tanishaImage}
              alt="Tanisha"
              draggable={false}
            />
          </div>

          <div className="landing-info">
            <h3>A</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Backend &amp; AI Developer</div>
            </h2>

            <p className="landing-tagline">
              Building intelligent, scalable &amp; practical solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;