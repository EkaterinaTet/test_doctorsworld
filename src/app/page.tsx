import "./page.css";
// import React, { useState } from "react";

const Home: React.FC = () => {
  // const [showBlock1, setShowBlock1] = useState<boolean>(true);
  // const [showBlock2, setShowBlock2] = useState<boolean>(false);
  // const [showBlock3, setShowBlock3] = useState<boolean>(true);
  // const [showBlock4, setShowBlock4] = useState<boolean>(false);

  // // Проверяем, что код выполняется на клиенте перед использованием useState

  // const toggleContent = () => {
  //   setShowBlock1(!showBlock1);
  //   setShowBlock2(!showBlock2);
  // };

  // const toggleContent2 = () => {
  //   setShowBlock3(!showBlock3);
  //   setShowBlock4(!showBlock4);
  // };

  return (
    <>
      <div className="main-img">
        <div className="img-container">
          <svg
            width="1700"
            height="77.12"
            viewBox="0 0 1700 77.12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M439.795 28.1798C318.415 20.2465 91.1442 -7.99995 0.5 0.5L49.9874 -17H1650.5C1600 91.3744 900 38.0964 439.795 28.1798Z"
              fill="url(#paint0_linear_0_5954)"
            ></path>
            <path
              d="M700 49.2851C700 41.3522 450 23.7704 500 32.27L38.5 0H1470.5C1400 108.37 1000 59.2014 800 49.2851Z"
              fill="url(#paint0_linear_0_5955)"
            ></path>
            <path
              d="M732.913 53.5282C465 0 82.3517 59.5426 0 66.7599V0H1247C1186.4 92.0203 917.46 90.4002 732.913 53.5282Z"
              fill="url(#paint0_linear_0_5956)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_0_5954"
                x1="49.9874"
                y1="14.9412"
                x2="1600"
                y2="14.9412"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.383678" stopColor="#BCD77E"></stop>
                <stop offset="0.996656" stopColor="#FDD966"></stop>
              </linearGradient>
              <linearGradient
                id="paint0_linear_0_5955"
                x1="400"
                y1="31.94"
                x2="1500"
                y2="31.94"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.550527" stopColor="#FDD966"></stop>
                <stop offset="1" stopColor="#BCD77E"></stop>
              </linearGradient>

              <linearGradient
                id="paint0_linear_0_5956"
                x1="348.013"
                y1="33.9456"
                x2="1254.76"
                y2="33.9456"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FBFDFF"></stop>
                <stop offset="1" stopColor="#D8EFFF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container">
        {/* one block */}
        <div className="block__title">
          <img className="img-vector" src="img/Vector 48.svg" alt="img" />
          <h1>ХОБЛ: мифы и реальность</h1>
        </div>

        <div className="block__questions">
          <div id="block__question1" className="block__question">
            <button className="btn1">
              <img src="img/click1.svg" alt="clickMe" />
            </button>

            <img src="img/question1.svg" alt="img" />
            <p className="block__question-item">
              ХОБЛ болеют
              <span className="bold-text"> преимущественно мужчины?</span>
            </p>
            <img className="border__item" src="img/Vector 49.svg" alt="img" />
            <p className="block__question-text">
              В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
              (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет,
              было выявлено преобладание...
            </p>
          </div>

          {/* скрытый 1ый блок */}
          <div id="block__question2" className="block__question">
            <button className="btn1">
              <img src="img/click1.svg" alt="clickMe" />
            </button>

            <div className="block__question2-text">
              <p>
                В десятилетнем исследовании
                <span className="bold-text">
                  «Генетическая эпидемиология ХОБЛ» (COPDGene)
                </span>
                среди пациентов с ХОБЛ, диагностированной до 55 лет, было
                выявлено
                <span className="bold-text">преобладание женщин (66%),</span> а
                в возрасте 60-64 лет количество женщин и мужчин.
              </p>
              <p>
                Такое эпидемиологическое распределение заболеваемости ХОБЛ может
                быть связано с тем, что дыхательные пути курящих женщин имеют
                более
                <span className="bold-text">
                  высокий процент площади стенок,
                </span>{" "}
                но меньшую площадь просвета, внутренний диаметр и толщину
                дыхательных путей по сравнению с курящими мужчинами.
              </p>
            </div>
            <img src="img/diagram.png" alt="diagram" />
          </div>

          <div id="block__question3" className="block__question">
            <button className="btn2">
              <img src="img/click2.svg" alt="clickMe" />
            </button>
            <img src="img/question2.svg" alt="img" />
            <p className="block__question-item">
              <span className="bold-text"> Опасно </span> не наличие
              заболевания, а
              <br />
              обострения?
            </p>
            <img className="border__item" src="img/Vector 49.svg" alt="img" />
            <p className="block__question-text">
              Большинство пациентов с ХОБЛ столкнется с обострениями: как
              минимум одно среднетяжелое или тяжелое обострение случится в
              течение...
            </p>
          </div>

          {/* скрытый 2ой блок */}
          <div id="block__question4" className="block__question">
            <button className="btn2">
              <img src="img/click2.svg" alt="clickMe" />
            </button>
            <div className="block__question2-text">
              <p>
                <span className="bold-text">
                  Большинство пациентов с ХОБЛ столкнется с обострениями: как
                  минимум одно среднетяжелое или тяжелое обострение случится в
                  течение 3 лет у 77% пациентов¹.
                </span>
              </p>
              <p>
                В течение 5 лет после первого тяжёлого обострения в живых
                остаются только 40% пациентов.² Прогноз после обострений ХОБЛ
                схож с таковым при сердечной недостаточности, инфаркте миокарда
                и некоторых злокачественных опухолях.
              </p>
            </div>
            <p className="block__question4-subtitle">
              {" "}
              Пятилетняя выживаемость пациентов
            </p>
            <div className="block__question4-items">
              <div className="block__question4-item">
                <img src="img/heart.svg" alt="heart" />
                <div>
                  <span className="procent">45,5%</span>
                  <p className="block__question4-text">
                    пациентов с{" "}
                    <span className="bold-text">
                      сердечной недостаточностью
                    </span>
                    ¹
                  </p>
                </div>
                <p className="block__question4-content">
                  Популяционное когортное исследование (N=385)
                </p>
              </div>
              <div className="block__question4-item">
                <img src="img/infarct.svg" alt="infarct" />
                <div>
                  <span className="procent">55,3%</span>
                  <p className="block__question4-text">
                    пациентов с
                    <span className="bold-text">инфарктом миокарда</span>¹
                  </p>
                </div>

                <p className="block__question4-content">
                  Апостериорный анализ когортного исследования (N=2887)
                </p>
              </div>
              <div className="block__question4-item">
                <img src="img/cancer.svg" alt="cancer" />
                <div>
                  <span className="procent">50,5%</span>
                  <p className="block__question4-text">
                    пациентов с
                    <span className="bold-text">раком мочевого пузыря</span>
                  </p>
                </div>
                <p className="block__question4-content">
                  Исследование Национальной статистической службы (N=42642)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* two block */}
        <div className="block__therapy">
          <div className="block__title">
            <img className="img-vector" src="img/Vector 48.svg" alt="img" />
            <h2>Терапия ХОБЛ: что в фокусе?</h2>
          </div>

          <div className="elem__focus">
            Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
          </div>

          <div className="block__focus">
            <p className="focus-title">
              Приоритетные направления фармакотерапевтической стратегии при
              ХОБЛ¹:
            </p>
            <div className="block__focus-items">
              <div className="block__focus-item">
                <img src="img/item1.svg" alt="Ингаляционный антихолинергик" />
                <h3>
                  <span>Ингаляционный </span>антихолинергик
                </h3>
                <p>
                  Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая
                  с ним в конкурентный антагонизм за взаимодействие с
                  эффекторными мускариновыми рецепторами, дополняет и
                  потенцирует эффект β2-агонистов¹
                </p>
              </div>
              <div className="block__focus-item">
                <img src="img/item2.svg" alt="Ингаляционный β2-агонист" />
                <h3>
                  <span>Ингаляционный</span> β2-агонист
                </h3>
                <p>
                  Вызывает бронходилатацию посредством релаксации гладкомышечных
                  клеток бронхов независимо от характера констриктивных
                  стимулов, т. е. выступают в качестве функциональных
                  антагонистов бронхоконстрикции
                </p>
              </div>
              <div className="block__focus-item">
                <img
                  src="img/item3.svg"
                  alt="Ингаляционный глюкокортикостероид (ИГКС)"
                />
                <h3>
                  <span>Ингаляционный</span> глюкокортикостероид
                  <span> (ИГКС)</span>
                </h3>
                <p>
                  Снижает частоту обострений, особенно в сочетании с ДДБА,
                  подавляют хроническое воспаление при астме и снижают
                  гиперреактивность дыхательных путей
                </p>
              </div>
            </div>

            <div className="arrow-elem">
              <img src="img/elem-arrow.svg" alt="arrow" />
              <img src="img/elem-arrow.svg" alt="arrow" />
            </div>

            <div className="block__focus-content">
              <div>
                <p>
                  Пациентам с ХОБЛ рекомендуется комбинирование
                  бронходилататоров с разными механизмами действия; Назначение
                  2-х бронходилататоров из группы длительнодействующих
                  β2-агонистов (ДДБА) и длительнодействующих антихолинергиков
                  (ДДАХ), действие которых дополняет и усиливает друг друга¹.
                </p>
              </div>
              <div>
                <p>
                  Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых
                  обострений в течение 1 года/1 тяжелое обострение,
                  потребовавшее госпитализации) рекомендуется назначение ИГКС в
                  дополнение к ДДБА; Последние исследования показали, что
                  амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает
                  госпитальную летальность по сравнению с пациентами,
                  принимавшими только ДДБА (8,1% vs 13,2%)¹.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
