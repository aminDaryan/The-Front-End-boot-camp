import React from "react";
import styles from "./Bill.module.scss";
import ToPersian from "./../../PersianNumber";

export default function Bill({ totalPrice, offPrice, delivaryPrice }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__bill}>
        <div className={styles.container__bill__sum_of_prices}>
          <div
            className={styles.container__bill__sum_of_prices__total_products}
          >
            <span
              className={
                styles.container__bill__sum_of_prices__total_products__text
              }
            >
              قیمت کالاها
            </span>
            <span
              className={
                styles.container__bill__sum_of_prices__total_products__price
              }
            >
              {
                <ToPersian
                  number={totalPrice.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })}
                  size="1.5vw"
                />
              }
            </span>
            <span
              className={
                styles.container__bill__sum_of_prices__total_products__toman
              }
            >
              تومان
            </span>
          </div>
          <div className={styles.container__bill__sum_of_prices__off}>
            <span className={styles.container__bill__sum_of_prices__off__text}>
              تخفیف کالا
            </span>
            <span className={styles.container__bill__sum_of_prices__off__price}>
              {
                <ToPersian
                  number={offPrice.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })}
                  size="1.5vw"
                />
              }
            </span>
            <span className={styles.container__bill__sum_of_prices__off__toman}>
              تومان
            </span>
          </div>
          <div className={styles.container__bill__sum_of_prices__delivary}>
            <span
              className={styles.container__bill__sum_of_prices__delivary__text}
            >
              ارسال عادی
            </span>
            <span
              className={styles.container__bill__sum_of_prices__delivary__price}
            >
              {
                <ToPersian
                  number={delivaryPrice.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })}
                  size="1.5vw"
                />
              }
            </span>
            <span
              className={styles.container__bill__sum_of_prices__delivary__toman}
            >
              تومان
            </span>
          </div>
        </div>
        <div className={styles.container__bill__total_price}>
          <span className={styles.container__bill__total_price__text}>
            مبلغ قابل پرداخت
          </span>
          <span className={styles.container__bill__total_price__price}>
            {
              <ToPersian
                number={(totalPrice - offPrice + delivaryPrice).toLocaleString(
                  navigator.language,
                  {
                    minimumFractionDigits: 0,
                  }
                )}
                size="1.5vw"
              />
            }
          </span>
          <span className={styles.container__bill__total_price__toman}>
            تومان
          </span>
        </div>
        <div className={styles.container__bill__purchase}>
          <button className={styles.container__bill__purchase__button}>
            ادامه خرید
          </button>
        </div>
      </div>
    </div>
  );
}
