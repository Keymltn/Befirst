import m from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo_befirst from "../../assets/logo_befirst.svg";
import search from "../../assets/search.svg";
import threedots from "../../assets/threedots.svg";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={m.header}>
      <div className={m.container}>
        <div className={m.header_wrapper}>
          <div className={m.header_logo}>
            <Link to="/">
              <img
                className={m["header_logo-img"]}
                src={logo_befirst}
                alt="Logo Befirst"
              />
            </Link>
            <img className={m.header_search} src={search} alt="Search" />
          </div>
          <div className={m.header_pages}>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/hi">Работы</Link>
              </li>
              <li>
                <Link to="/hi">Правило</Link>
              </li>
              <li>
                <Link to="/hi">Результаты </Link>
              </li>
              <li>
                <Link to="/konkurs">Конкурс</Link>
              </li>
              <li>
                <Link to="/hi">Эксперты</Link>
              </li>
              <li>
                <Link to="/hi">О нас</Link>
              </li>
              <li>
                <Link to="/hi">Личный кабинет</Link>
              </li>
            </ul>
            <Link to="/hi">
              <img
                className={m["header_pages-threedots"]}
                src={threedots}
                alt="Three Dots"
              />
            </Link>
          </div>
          <div className={m.header_menu}>
            <TiThMenu
              className={m["header_menu-icon"]}
              onClick={() => setSidebarOpen(false)}
            />
          </div>
          <div className={m[sidebarOpen ? "sidebar_hidden" : "header_sidebar"]}>
            <div className={m["header_sidebar-back"]}>
              <Link to="/">
                <img
                  className={m["header_logo-img"]}
                  src={logo_befirst}
                  alt="Logo Befirst"
                />
              </Link>
              <MdOutlineKeyboardBackspace
                onClick={() => setSidebarOpen(true)}
                className={m["header_sidebar-back-icon"]}
              />
            </div>
            <div className={m["header_sidebar-pages"]}>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/hi">Работы</Link>
                </li>
                <li>
                  <Link to="/hi">Правило</Link>
                </li>
                <li>
                  <Link to="/hi">Результаты </Link>
                </li>
                <li>
                  <Link to="/konkurs">Конкурс</Link>
                </li>
                <li>
                  <Link to="/hi">Эксперты</Link>
                </li>
                <li>
                  <Link to="/hi">О нас</Link>
                </li>
                <li>
                  <Link to="/hi">Личный кабинет</Link>
                </li>
                <li>
                  <Link to="/hi">Больше</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
