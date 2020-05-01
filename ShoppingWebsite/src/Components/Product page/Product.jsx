import React, { useState, useEffect } from "react";
import styles from "./Product.module.scss";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAddingToCart } from "./../../Redux/Actions/The Carts Actions";
import ToPersian from "./../PersianNumber";
import { GlassMagnifier } from "react-image-magnifiers";
import DesxriptionTab from "./DescriptionTab";

export default function Product() {
  const [theProduct, setTheProduct] = useState(false);

  let { product } = useSelector((state) => state.theUsersCurrentChosenProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product.detail) {
      Axios.get(product.detail).then((res) => setTheProduct(res.data));
    } else {
      Axios.get(product.product_detail).then((res) => setTheProduct(res.data));
    }
  }, []);
  return (
    <>
      {theProduct ? (
        <div className={styles.container}>
          <div className={styles.container__product_in_general}>
            <div
              className={styles.container__product_in_general__image_container}
            >
              <GlassMagnifier
                imageSrc={theProduct.image}
                imageAlt="Example"
                className={
                  styles.container__product_in_general__image_container__image
                }
                square={true}
              />
            </div>
            <div
              className={
                styles.container__product_in_general__short_description_container
              }
            >
              <span
                className={
                  styles.container__product_in_general__short_description_container__name
                }
              >
                {product.name ? product.name : product.product}
              </span>
              <span
                className={
                  styles.container__product_in_general__short_description_container__brand
                }
              >
                {" "}
                برند: {theProduct.brand}
              </span>
              <span
                className={
                  styles.container__product_in_general__short_description_container__color_container
                }
              >
                رنگ:{" "}
                <span
                  className={
                    styles.container__product_in_general__short_description_container__color_container__color
                  }
                  style={{ backgroundColor: theProduct.color }}
                ></span>
              </span>
            </div>
            <div className={styles.container__product_in_general__purchase}>
              <span
                className={
                  styles.container__product_in_general__purchase__price
                }
              >
                <ToPersian
                  number={theProduct.price.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })}
                  size="1.8vw"
                />{" "}
                تومان
              </span>
              <button
                className={
                  styles.container__product_in_general__purchase__button
                }
                onClick={() => dispatch(setAddingToCart(product))}
              >
                اضافه به سبد خرید
              </button>
            </div>
          </div>
          <div className={styles.container__description}>
            <DesxriptionTab theProduct={theProduct} />
          </div>
        </div>
      ) : (
        <div className={styles.loading}>
          <img src="/Img/loading.gif" alt="" />
        </div>
      )}
    </>
  );
}
