import React from "react";
import styles from "./ProductsList.module.scss";
import { useSelector } from "react-redux";
import CardOfProductsList from "./CardOfProductsList";
import SideBar from "./SideBar Components/SideBar";

export default function ProductsList() {
  let { products } = useSelector(
    (state) => state.theUsersChosenCategorysProductsShownOnPage
  );

  let { loading } = useSelector(
    (state) => state.theCurrentLoadingStatus
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__sideBar_container}>
          <SideBar />
        </div>
        <div className={styles.container__products_container}>
          {!loading ? (
            products.map((product, index) => {
              return (
                <div
                  key={product.name + index}
                  className={
                    styles.container__products_container__product_container
                  }
                >
                  <CardOfProductsList product={product} />
                </div>
              );
            })
          ) : (
            <div className={styles.loading}>
              <img src="/Img/loading.gif" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
