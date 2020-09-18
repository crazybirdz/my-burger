import React from "react";

import classes from "./BurgerIngredient.module.css";

const BurgerIngredient = (props) => {
  let ingredient = null;

  // eslint-disable-next-line default-case
  switch (props.type) {
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seed1}></div>
          <div className={classes.Seed2}></div>
        </div>
      );
      break;
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
  }

  return ingredient;
};

export default BurgerIngredient;