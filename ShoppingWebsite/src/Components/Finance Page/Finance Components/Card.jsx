import React from "react";
import styles from "./Card.module.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useDispatch } from "react-redux";
import {
  setAddingToCart,
  setSubtractingFromToCart,
  setTheAmountOfTheProduct,
  setTheDeletionOfTheProduct,
} from "./../../../Redux/Actions/The Carts Actions";

export default function List({ theProductItself, name, image, price, number }) {
  const dispatch = useDispatch();

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      dispatch(setTheAmountOfTheProduct(theProductItself, e.target.value));
      e.target.value = ""
    }
  }

  return (
    <div className={styles.card}>
      <div
        className={styles.card__delete}
        onClick={() => dispatch(setTheDeletionOfTheProduct(theProductItself))}
      >
        &#10006;
      </div>
      <div className={styles.card__image_container}>
        <img
          className={styles.card__image_container__image}
          src={image}
          alt=""
        />
      </div>
      <div className={styles.card__description}>
        <div className={styles.card__description__name}>
          <p className={styles.card__description__name__text}>{name}</p>
        </div>
        <div className={styles.card__description__adding_section}>
          <button
            className={styles.card__description__adding_section__adding}
            onClick={() => dispatch(setAddingToCart(theProductItself))}
          >
            <AddIcon style={{ fontSize: "1.3vw" }} />
          </button>
          <input
            placeholder={number}
            type="number"
            className={styles.card__description__adding_section__number}
            onKeyDown={handleKeyDown}
          />
          {number == 1 ? (
            <button
              className={styles.card__description__adding_section__removing}
              onClick={() =>
                dispatch(setTheDeletionOfTheProduct(theProductItself))
              }
            >
              <DeleteOutlineIcon style={{ fontSize: "1.3vw" }} />
            </button>
          ) : (
            <button
              className={styles.card__description__adding_section__subtracting}
              onClick={() =>
                dispatch(setSubtractingFromToCart(theProductItself))
              }
            >
              <RemoveIcon style={{ fontSize: "1.3vw" }} />
            </button>
          )}
        </div>

        <div className={styles.card__description__price_section}>
          {/* <div  className={styles.card__description__price_section__off_price}>
            <span>تخفیف</span>
            <span>۹۲,۰۰۰</span>
            <span>تومان</span>
          </div> */}

          <div
            className={styles.card__description__price_section__actual_price}
          >
            <span
              className={
                styles.card__description__price_section__actual_price__price
              }
            >
              {price}
            </span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
