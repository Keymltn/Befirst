import { useState } from "react";
import m from "./Konkurs.module.scss";
import data from "./konkurs.json";
import prev from "../../assets/toLeft.svg";
import next from "../../assets/toRight.svg";
import kids_2 from "../../assets/kids_2.png";

let itemPerPage = 12;

const Konkurs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rows = data.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const numberOfPage = Math.ceil(data.length / itemPerPage);
  const pageIndex = Array.from(
    { length: numberOfPage },
    (_, index) => index + 1
  );

  return (
    <div className={m.konkurs}>
      <div className={m.container}>
        <div className={m.konkurs_wrapper}>
          <div className={m.konkurs_hero}>
            <h1>КОНКУРС</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
            <button>отправить заявку на участие</button>
          </div>

          <div className={m["konkurs_cards-info"]}>
            <div className={m["konkurs_cards-wrapper"]}>
              <div className={m["konkurs_only-cards-wrapper"]}>
                <div className={m.konkurs_cards}>
                  {rows.map((card, i) => (
                    <div
                      key={i}
                      style={{ backgroundColor: card.background }}
                      className={m["konkurs_cards-red"]}
                    >
                      <img src={card.img} alt="Kids" />
                      <div className={m["konkurs_cards-red-info"]}>
                        <h4>{card.title}</h4>
                        <p>{card.text}</p>
                        <button style={{ backgroundColor: card.btn }}>
                          Читать дальше
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={m["konkurs_cards-pagination"]}>
              <div className={m.konkurs_pagination}>
                <div className={m.pagination}>
                  <button
                    disabled={currentPage < 1}
                    className={m.page_changer}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <img src={prev} alt="Previous" />
                  </button>
                  <p>
                    {pageIndex.map((page) => (
                      <button
                        onClick={() => handlePageChange(page - 1)}
                        key={page}
                        className={m[page == currentPage + 1 ? "active" : ""]}
                      >
                        <p>{page}</p>
                      </button>
                    ))}
                  </p>
                  <button
                    disabled={currentPage > 1}
                    className={m.page_changer}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <img src={next} alt="Next" />
                  </button>
                </div>
              </div>
            </div>
            <div className={m.konkurs_btn}>
              <button>отправить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konkurs;
