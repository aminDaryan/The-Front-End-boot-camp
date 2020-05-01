import React from "react";
import styles from "./Finance.module.scss";
import Card from "./Finance Components/Card";
import Bill from "./Finance Components/Bill";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ToPersian from "./../PersianNumber";

export default function Finance() {
  const [totalPrice, setTotalPrice] = useState(0);

  let { items } = useSelector((state) => state.theUsersCurrentCartItems);

  useEffect(() => {
    function sumOfPrices() {
      setTotalPrice(
        items.reduce((accumulator, item) => {
          return accumulator + item.product.price * item.quantity ;
        }, 0)
      );
    }

    sumOfPrices();
  }, [items]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__cards}>
          <div className={styles.container__cards__header}>
            <h3>سبد خرید</h3>
          </div>

          <div className={styles.container__cards__list}>
            {items.map((item, index) => {
              return (
                <div
                  className={
                    index !== items.length - 1
                      ? styles.container__cards__list__card
                      : ""
                  }
                >
                  <Card
                    theProductItself={item.product}
                    name={item.product.name}
                    image={item.product.image}
                    price={
                      <ToPersian
                        number={item.product.price.toLocaleString(
                          navigator.language,
                          {
                            minimumFractionDigits: 0,
                          }
                        )}
                        size="1.5vw"
                      />
                    }
                    number={item.quantity}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.container__bill}>
          <Bill
            totalPrice={totalPrice}
            offPrice={0}
            delivaryPrice={items[0] ? 2000 : 0}
          />
        </div>
      </div>
    </>
  );
}
