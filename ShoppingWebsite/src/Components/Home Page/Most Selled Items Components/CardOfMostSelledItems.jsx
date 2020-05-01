import React from 'react'
import styles from "./CardOfMostSelledItems.module.scss"

export default function CardOfMostSelledItems({name, price, image}) {
    return (
        <div className={styles.card}>
            <div className={styles.card__image_container}>
                <img className={styles.card__image_container__image} src={image} alt=""/>
            </div>
            <div className={styles.card__text}>
                <p className={styles.card__text__name}>{name}</p>
                {/* <p className={styles.card__text__off_price}>{priceBeforeOff}</p> */}
                {/* <p className={styles.card__text__off}>{off}</p> */}
                <p className={styles.card__text__toman}>تومان</p>
                <p className={styles.card__text__price}>{price}</p>
            </div>
        </div>
    )
}
