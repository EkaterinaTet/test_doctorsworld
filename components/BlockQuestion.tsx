import "../src/app/page.css";
import React, { useState } from "react";

interface QuestionProps {
  btnClassName: string;
  imgSrcBtn: string;
  imgSrc: string;
  question: React.ReactNode; // для поддержки различных типов данных
  text: string;
  children?: React.ReactNode;
}

const BlockQuestion: React.FC<QuestionProps> = ({
  btnClassName,
  imgSrc,
  question,
  text,
  imgSrcBtn,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block__question">
      <button className={btnClassName} onClick={() => setIsOpen(!isOpen)}>
        <img src={imgSrcBtn} alt="clickMe" />
      </button>
      {isOpen ? (
        children
      ) : (
        <>
          <img src={imgSrc} alt="img" />
          <p className="block__question-item">{question}</p>
          <img className="border__item" src="img/Vector 49.svg" alt="img" />
          <p className="block__question-text">{text}</p>
        </>
      )}
    </div>
  );
};
export default BlockQuestion;
