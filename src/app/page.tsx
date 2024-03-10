"use client";

import "./page.css";
import HeaderItems from "../../components/HeaderItems";
import BlockQuestions from "../../components/BlockQuestions";
import BlockFocus from "../../components/BlockFocus";
import BlockTitle from "../../components/BlockTitle";

const Home: React.FC = () => {
  return (
    <>
      <HeaderItems />

      <div className="container">
        {/* one block */}
        <BlockTitle title="ХОБЛ: мифы и реальность" />
        <BlockQuestions />

        {/* two block */}
        <div className="block__therapy">
          <BlockTitle title="Терапия ХОБЛ: что в фокусе?" />
          <div className="elem__focus">
            Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
          </div>
          <BlockFocus />
        </div>
      </div>
    </>
  );
};
export default Home;
