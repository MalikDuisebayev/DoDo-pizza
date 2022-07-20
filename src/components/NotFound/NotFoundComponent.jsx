import React from "react";
import classes from "./NotFoundBlock.module.scss";

const NotFoundComponent = () => {
  console.log(classes.root);
  return (
    <div>
      <h1 className={classes.root}>
        <span>🤭</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={classes.description}>
        Данная страница отсутствует в нашем магазине
      </p>
    </div>
  );
};

export default NotFoundComponent;
