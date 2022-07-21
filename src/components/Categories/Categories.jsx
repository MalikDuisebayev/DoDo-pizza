import React from "react";
import { useState } from "react";

const Categories = ({ value, event }) => {
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
              onClick={() => event(idx)}
              className={value === idx ? "active" : ""}
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
