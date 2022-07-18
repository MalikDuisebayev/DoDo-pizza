import React from "react";
import { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const arrayCategories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {arrayCategories.map((el, idx) => {
          return (
            <li
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={activeIndex === idx ? "active" : ""}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
