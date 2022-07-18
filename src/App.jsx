import React from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Pizza from "./components/Pizza/Pizza";
import pizzas from "./assets/json/db.json";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((obj, idx) => {
                return <Pizza {...obj} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
