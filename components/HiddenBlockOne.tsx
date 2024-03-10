import "../src/app/page.css";

const HiddenBlockOne = () => {
  return (
    <>
      <div>
        <div id="block__question2" className="block__question">
          <div className="block__question2-text">
            <p>
              В десятилетнем исследовании
              <span className="bold-text">
                «Генетическая эпидемиология ХОБЛ» (COPDGene)
              </span>
              среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено
              <span className="bold-text">преобладание женщин (66%),</span> а в
              возрасте 60-64 лет количество женщин и мужчин.
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
      </div>
    </>
  );
};
export default HiddenBlockOne;
