import m from "./Hero.module.scss";
import herologo from "../../assets/herologo.svg";
import herokids from "../../assets/herochildren.svg";

const Hero = () => {
  return (
    <div className={m.hero}>
      <div className={m.container}>
        <div className={m.hero_wrapper}>
          <div className={m.hero_info}>
            <h1>МЕРОПРИЯТИЯ ОБРАЗОВАТЕЛЬНОГО ПОРТАЛА</h1>
            <img src={herologo} alt="Logo" />
          </div>
          <div className={m.hero_img}>
            <img src={herokids} alt="Kids" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
