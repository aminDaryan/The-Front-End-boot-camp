import React from "react";
import styles from './CartButton.module.scss'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddress } from "./../../../Redux/Actions/Address Action";

export default function CartButton({quantity, toPath}) {
    
  let dispatch = useDispatch();
  return (
    <Link to={toPath} onClick={() => dispatch(setAddress({toPath}))}>
      <button className={styles.button}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <span className={styles.button__count}>{quantity}</span>
      </button>
    </Link>
  );
}
