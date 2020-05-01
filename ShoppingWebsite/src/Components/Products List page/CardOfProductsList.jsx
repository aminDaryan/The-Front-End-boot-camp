import React from "react";
import styles from "./CardOfProductsList.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddingToCart } from "./../../Redux/Actions/The Carts Actions";
import { setChosenProduct } from "./../../Redux/Actions/Fetch Chosen Product Action";
import AddIcon from "@material-ui/icons/Add";
import ToPersian from "./../PersianNumber";

export default function Card({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Link
        to={`/product/${
          product.detail.split("http://5.9.249.45:8000/menu/")[1]
        }`}
        className={styles.card__link}
        onClick={() => dispatch(setChosenProduct(product))}
      >
        <div className={styles.card__link__image_container}>
          <img
            className={styles.card__link__image_container__image}
            src={product.image}
            alt=""
          />
        </div>
        <div className={styles.card__link__text}>
          <p className={styles.card__link__text__name}>{product.name}</p>
          {/* <p className={styles.card__link__text__off_price}>{priceBeforeOff}</p> */}
          {/* <p className={styles.card__link__text__off}>{off}</p> */}
          <p className={styles.card__link__text__toman}>تومان</p>
          <p className={styles.card__link__text__price}>
            <ToPersian
              number={product.price.toLocaleString(navigator.language, {
                minimumFractionDigits: 0,
              })}
              size="1.5vw"
            />
          </p>
        </div>
      </Link>
      <div
        className={styles.card__adding}
        onClick={() => dispatch(setAddingToCart(product))}
      >
        <button className={styles.card__adding__button}>
          <AddIcon style={{ fontSize: "1.5vw" }} />
        </button>
        <span className={styles.card__adding__text}>افزودن به سبد</span>
      </div>
    </div>
  );
}
