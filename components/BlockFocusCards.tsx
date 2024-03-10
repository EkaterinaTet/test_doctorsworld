import "../src/app/page.css";
import React from "react";

interface Item {
  id: number;
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    id: 1,
    imgSrc: "img/item1.svg",
    alt: "Ингаляционный антихолинергик",
    title: "<span>Ингаляционный</span> антихолинергик",
    description:
      "Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов¹",
  },
  {
    id: 2,
    imgSrc: "img/item2.svg",
    alt: "Ингаляционный β2-агонист",
    title: "<span>Ингаляционный</span> β2-агонист",
    description:
      "Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции",
  },
  {
    id: 3,
    imgSrc: "img/item3.svg",
    alt: "Ингаляционный глюкокортикостероид (ИГКС)",
    title:
      "<span>Ингаляционный</span> глюкокортикостероид <span> (ИГКС)</span>",
    description:
      "Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей",
  },
];

const BlockFocusCards = () => {
  return (
    <div className="block__focus-items">
      {items.map((item) => (
        <div key={item.id} className="block__focus-item">
          <img src={item.imgSrc} alt={item.alt} />
          <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
export default BlockFocusCards;
