import React from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";

import axios from "axios";
import { useState, useEffect } from "react";
import Sceleton from "../components/Sceleton/Sceleton";

import Pagination from "../components/UI/Pagination/Pagination";

import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
} from "../store/filterSlice/filterSlice";

const Home = ({ searchValue }) => {
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const onChangeCategoryID = (id) => {
    dispatch(setCategoryId(id));
  };

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClickPageCount = (number) => {
    console.log(number);
    dispatch(setCurrentPage(number));
  };

  const CATEGORY = categoryId ? `&category=${categoryId}` : "";
  const SORT_BY = sort ? `&sortBy=${sort.sort} ` : "";
  const SEARCH = searchValue ? `&search=${searchValue}` : "";

  const url = `https://62d80b28908831393589cdd8.mockapi.io/items?page=${currentPage}&limit=4${CATEGORY}${SORT_BY}${SEARCH}&order=desc`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  const SCELETON = [...new Array(4)].map((_, idx) => <Sceleton key={idx} />);
  const PIZZA = items.map((obj) => <Pizza key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} event={onChangeCategoryID} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? SCELETON : PIZZA}</div>
      <Pagination value={currentPage} onChangePage={onClickPageCount} />
    </div>
  );
};

export default Home;
