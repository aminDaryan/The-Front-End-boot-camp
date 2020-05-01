import React, { useState, useEffect } from "react";
import "./ArrowStyles.scss";
import styles from "./MostSelledItems.module.scss";
import { useDispatch } from "react-redux";
import { setChosenProduct } from "./../../../Redux/Actions/Fetch Chosen Product Action";
import { Link } from "react-router-dom";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import CardOfMostSelledItems from "./CardOfMostSelledItems";
import Axios from "axios";
import ToPersian from "./../../PersianNumber";

export default function MostSelledItems() {
  const [mostSelledItems, setMostSelledItems] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAmazingProducts() {
      let items = await Axios.get("http://5.9.249.45:8000/Amazing_Offers").then(
        (res) => res.data
      );
      setMostSelledItems(items);
    }
    fetchAmazingProducts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__text_container}>
        <span className={styles.container__text_container__text}>پیشنهاد</span>
        <span className={styles.container__text_container__text}>شگفت</span>
        <span className={styles.container__text_container__text}>انگیز!</span>
      </div>
      <div className={styles.container__cards_container}>
        <Carousel
          className={styles.container__cards_container__carousel}
          slidesPerScroll={4}
          slidesPerPage={4}
          rtl
          infinite
          arrowLeft={
            <i
              className="fa fa-angle-right carousel_arrows__right"
              aria-hidden="true"
              name="angle-double-left"
            />
          }
          arrowLeftDisabled={
            <i
              className="fa fa-angle-right carousel_arrows__right"
              aria-hidden="true"
              name="angle-left"
            />
          }
          arrowRight={
            <i
              className="fa fa-angle-left carousel_arrows__left"
              aria-hidden="true"
              name="angle-double-right"
            />
          }
          arrowRightDisabled={
            <i
              className="fa fa-angle-left carousel_arrows__left"
              aria-hidden="true"
              name="angle-right"
            />
          }
          addArrowClickHandler
          keepDirectionWhenDragging
          breakpoints={{
            640: {
              slidesPerPage: 1,
              arrows: false,
            },
            900: {
              slidesPerPage: 2,
              arrows: false,
            },
          }}
        >
          {mostSelledItems &&
            mostSelledItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/product/${
                    item.product_detail.split("http://5.9.249.45:8000/menu/")[1]
                  }`}
                  className={styles.container__cards_container__carousel__link}
                  onClick={() => dispatch(setChosenProduct(item))}
                >
                  <CardOfMostSelledItems
                    name={item.product}
                    price={
                      <ToPersian
                        number={item.price.toLocaleString(navigator.language, {
                          minimumFractionDigits: 0,
                        })}
                        size="1.5vw"
                      />
                    }
                    image={item.image}
                  />
                </Link>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
}
