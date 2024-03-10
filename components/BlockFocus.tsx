import "../src/app/page.css";
import BlockFocusCards from "./BlockFocusCards";
import React from "react";

interface Text {
  text: string;
}
const TextComponent: React.FC<Text> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const BlockFocus = () => {
  const texts = [
    "Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия; Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга¹.",
    "Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА; Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)¹.",
  ];

  return (
    <>
      <div className="block__focus">
        <p className="focus-title">
          Приоритетные направления фармакотерапевтической стратегии при ХОБЛ¹:
        </p>

        <BlockFocusCards />

        <div className="arrow-elem">
          <img src="img/elem-arrow.svg" alt="arrow" />
          <img src="img/elem-arrow.svg" alt="arrow" />
        </div>

        <div className="block__focus-content">
          {texts.map((text, index) => (
            <TextComponent key={index} text={text} />
          ))}
        </div>
      </div>
    </>
  );
};
export default BlockFocus;
