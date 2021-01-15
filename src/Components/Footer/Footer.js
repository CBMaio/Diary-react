import  GitHubIcon  from "../../Assets/Images/github.png";
import  LinkedinIcon  from "../../Assets/Images/linkedin.png";
import './footer.css'

const Footer = () => {
  return (
    <>
      <span>
        <p className="mb-0">
          <em>Carolina Belén Maio - 2021</em>
        </p>
      </span>
      <span className="icon-container">
        <a href="https://github.com/CBMaio" className="link">
          <img src={GitHubIcon} alt="github Icon" className="icon mr-1 ml-1"/>
        </a>
        <a href="https://www.linkedin.com/in/carolinamaio/" className="link">
          <img src={LinkedinIcon} alt="Linkedin Icon" className="icon mr-1 ml-1" />
        </a>
      </span>
    </>
  );
};

export default Footer;
