import "../src/app/page.css";

interface QuestionCards {
  id: number;
  imgSrc: string;
  alt: string;
  procent: string;
  textTitle: string;
  content: string;
}
const cards: QuestionCards[] = [
  {
    id: 1,
    imgSrc: "img/heart.svg",
    alt: "heart",
    procent: "45,5%",
    textTitle:
      "пациентов с <span className='bold-text'>сердечной недостаточностью</span>¹",
    content: "Популяционное когортное исследование (N=385)",
  },
  {
    id: 2,
    imgSrc: "img/infarct.svg",
    alt: "infarct",
    procent: "55,3%",
    textTitle:
      "пациентов с <span className='bold-text'>инфарктом миокарда</span>",
    content: "Апостериорный анализ когортного исследования (N=2887)",
  },
  {
    id: 3,
    imgSrc: "img/cancer.svg",
    alt: "cancer",
    procent: "50,5%",
    textTitle:
      "пациентов с <span className='bold-text'>раком мочевого пузыря</span>",
    content: "Исследование Национальной статистической службы (N=42642)",
  },
];

const HiddenBlockTwoCards = () => {
  return (
    <div className="block__question4-items">
      {cards.map((card) => (
        <div key={card.id} className="block__question4-item">
          <img src={card.imgSrc} alt={card.alt} />
          <div>
            <span className="procent">{card.procent}</span>
            <p
              className="block__question4-text"
              dangerouslySetInnerHTML={{ __html: card.textTitle }}
            />
          </div>
          <p className="block__question4-content">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

const HiddenBlockTwo = () => {
  return (
    <div id="block__question4" className="block__question">
      <button className="btn2">
        <img src="img/click2.svg" alt="clickMe" />
      </button>
      <div className="block__question2-text">
        <p>
          <span className="bold-text">
            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
            одно среднетяжелое или тяжелое обострение случится в течение 3 лет у
            77% пациентов¹.
          </span>
        </p>
        <p>
          В течение 5 лет после первого тяжёлого обострения в живых остаются
          только 40% пациентов.² Прогноз после обострений ХОБЛ схож с таковым
          при сердечной недостаточности, инфаркте миокарда и некоторых
          злокачественных опухолях.
        </p>
      </div>
      <p className="block__question4-subtitle">
        {" "}
        Пятилетняя выживаемость пациентов
      </p>
      <HiddenBlockTwoCards />
    </div>
  );
};

export default HiddenBlockTwo;
