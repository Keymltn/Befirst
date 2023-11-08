import m from "./Topheader.module.scss";
import russia_flag from "../../assets/russiaflag.svg";
import { Link } from "react-router-dom";

const Topheader = () => {
  return (
    <div className={m.topheader}>
      <div className={m.container}>
        <ul>
          <li>
            <img src={russia_flag} alt="Russia Flag" />
          </li>
          <li>
            <Link to="/signin">
              <p className={m.topheader_signin}>ВХОД</p>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <p>РЕГИСТРАЦИЯ</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topheader;
