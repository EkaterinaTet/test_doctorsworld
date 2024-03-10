"use client";

import "../src/app/page.css";
import React from "react";
import BlockQuestion from "./BlockQuestion";
import HiddenBlockOne from "./HiddenBlockOne";
import HiddenBlockTwo from "./HiddenBlockTwo";

const BlockQuestions = () => {
  return (
    <>
      <div className="block__questions">
        <BlockQuestion
          imgSrcBtn="img/click1.svg"
          btnClassName="btn1"
          imgSrc="img/question1.svg"
          question={
            <>
              ХОБЛ болеют
              <span className="bold-text"> преимущественно мужчины?</span>
            </>
          }
          text="В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание..."
        >
          <HiddenBlockOne />
        </BlockQuestion>

        <BlockQuestion
          imgSrcBtn="img/click2.svg"
          btnClassName="btn2"
          imgSrc="img/question2.svg"
          question={
            <>
              <span className="bold-text"> Опасно </span> не наличие
              заболевания, а
              <br />
              обострения?
            </>
          }
          text="Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
          одно среднетяжелое или тяжелое обострение случится в течение..."
        >
          <HiddenBlockTwo />
        </BlockQuestion>
      </div>
    </>
  );
};
export default BlockQuestions;
