import React from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";

import axios from "axios";
import { useState, useEffect } from "react";
import Sceleton from "../components/Sceleton/Sceleton";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://62d80b28908831393589cdd8.mockapi.io/items";
  useEffect(() => {
    const data = axios
      .get(url)
      .then((res) => res)
      .then((data) => {
        setItems(data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, idx) => <Sceleton key={idx} />)
          : items.map((obj) => {
              return <Pizza key={obj.id} {...obj} />;
            })}
      </div>
    </div>
  );
};

export default Home;