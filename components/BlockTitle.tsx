import "../src/app/page.css";
import React from "react";

interface BlockTitleProps {
  title: string;
}

const BlockTitle: React.FC<BlockTitleProps> = ({ title }) => {
  return (
    <div className="block__title">
      <img className="img-vector" src="img/Vector 48.svg" alt="img" />
      <h2>{title}</h2>
    </div>
  );
};
export default BlockTitle;
