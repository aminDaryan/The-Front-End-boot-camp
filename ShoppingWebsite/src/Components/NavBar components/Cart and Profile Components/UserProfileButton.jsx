import React from "react";
import styles from "./UserProfileButton.module.scss"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddress } from "../../../Redux/Actions/Address Action";

export default function UserProfileButton({ name, toPath, fromLeft }) {
  const dispatch = useDispatch();
  return (
    <Link to={toPath} onClick={() => dispatch(setAddress({toPath}))}>
      <button className={styles.button}>
        <div className={styles.button__icon}>
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <span className={styles.button__text} style={fromLeft}>
          {name}
        </span>
      </button>
    </Link>
  );
}
