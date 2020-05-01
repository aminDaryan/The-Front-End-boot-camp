import React from "react";
import styles from "./MostVisitedPages.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddress } from "./../../../Redux/Actions/Address Action";

export default function MostVisitesPagesSlider() {
  const MostVisitedCategories = [
    { name: "وسایل خانه", image: "/Img/4.png", api: "/a" },
    { name: "پوشاک", image: "/Img/9.jpg", api: "/b" },
    { name: "خودرو", image: "/Img/10.jpg", api: "/c" },
    { name: "موبایل", image: "/Img/11.jpg", api: "/d" },
  ];
  
  let dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h3>صفحات پربازدید</h3>
      </div>
      <div className={styles.container__cards_container}>
        {MostVisitedCategories.map((category, index) => {
          return (
            <div
              key={index + category}
              className={styles.container__cards_container__card}
            >
              <Link
                to={category.api}
                className={styles.container__cards_container__card__link}
                onClick={() => dispatch(setAddress(category.api))}
              >
                <img
                  className={
                    styles.container__cards_container__card__link__image
                  }
                  src={category.image}
                  alt="No Image Available"
                />
                <div
                  className={
                    styles.container__cards_container__card__link__text_box
                  }
                >
                  <span
                    className={
                      styles.container__cards_container__card__link__text_box__text
                    }
                  >
                    {category.name}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
