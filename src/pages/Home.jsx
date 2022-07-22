import React from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";

import axios from "axios";
import { useState, useEffect } from "react";
import Sceleton from "../components/Sceleton/Sceleton";

import Pagination from "../components/UI/Pagination/Pagination";

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sort: "rating",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const CATEGORY = categoryIndex ? `&category=${categoryIndex}` : "";
  const SORT_BY = sortType ? `&sortBy=${sortType.sort} ` : "";
  const SEARCH = searchValue ? `&search=${searchValue}` : "";

  const url = `https://62d80b28908831393589cdd8.mockapi.io/items?page=${currentPage}&limit=4${CATEGORY}${SORT_BY}${SEARCH}&order=desc`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => res)
      .then((data) => {
        setItems(data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
    window.scrollTo(0, 0);
  }, [categoryIndex, sortType, searchValue, currentPage]);

  const SCELETON = [...new Array(4)].map((_, idx) => <Sceleton key={idx} />);
  const PIZZA = items.map((obj) => <Pizza key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryIndex} event={setCategoryIndex} />
        <Sort value={sortType} event={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? SCELETON : PIZZA}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
