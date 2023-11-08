import m from "./Footer.module.scss";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/insta.svg";
import telegram from "../../assets/telega.svg";
import linkedin from "../../assets/linkedin.svg";
import footerlogo from "../../assets/footer_logo.svg";

const Footer = () => {
  return (
    <div className={m.footer}>
      <div className={m.container}>
        <div className={m.footer_wrapper}>
          <div className={m["footer_link-map"]}>
            <h2>Карта сайта</h2>
            <ul>
              <li>Главная</li>
              <li>Результаты</li>
              <li>О нас</li>
              <li>Правила</li>
              <li>Работы</li>
            </ul>
          </div>
          <div className={m.footer_contacts}>
            <h2>Контакты</h2>
            <ul>
              <li>+998 71 234 56 78</li>
              <li>befirst@gmail.com</li>
              <li>
                г. Ташкент, Юнусабадский <br /> район, ул Узбекистан
              </li>
            </ul>
          </div>
          <div className={m.footer_social}>
            <h2>Мы в соцсетях:</h2>
            <ul>
              <li>
                <a target="_blank" href="https://www.facebook.com/">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://web.telegram.org/">
                  <img src={telegram} alt="Telegram" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/">
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className={m.footer_logo}>
            <a href="">
              <img src={footerlogo} alt="Logo" />
            </a>
            <p>BeFirst 2023 ©</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
