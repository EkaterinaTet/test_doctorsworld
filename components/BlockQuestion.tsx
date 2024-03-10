import "../src/app/page.css";
import React from "react";

interface QuestionProps {
  idClass: string;
  btnClassName: string;
  imgSrcBtn: string;
  imgSrc: string;
  question: React.ReactNode; // для поддержки различных типов данных
  text: string;
}

const BlockQuestion: React.FC<QuestionProps> = ({
  idClass,
  btnClassName,
  imgSrc,
  question,
  text,
  imgSrcBtn,
}) => {
  return (
    <div id={idClass} className="block__question">
      <button className={btnClassName}>
        <img src={imgSrcBtn} alt="clickMe" />
      </button>
      <img src={imgSrc} alt="img" />
      <p className="block__question-item">{question}</p>
      <img className="border__item" src="img/Vector 49.svg" alt="img" />
      <p className="block__question-text">{text}</p>
    </div>
  );
};
export default BlockQuestion;
