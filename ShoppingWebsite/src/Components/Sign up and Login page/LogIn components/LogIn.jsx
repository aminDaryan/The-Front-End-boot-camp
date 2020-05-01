import React, { useState, useEffect } from "react";
import styles from "./LogIn.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "./../../../Redux/Actions/Address Action";
import { setVerification } from "./../../../Redux/Actions/Verification Action";
import {
  setProfileProperties,
  setProfileAddress,
} from "./../../../Redux/Actions/Profile Properties Action";
import PasswordBox from "../PasswordBox";
import UserNameBox from "../UserNameBox";
import PasswordBoxResponsive from "../PasswordBoxResponsive";
import UserNameBoxResponsive from "../UserNameBoxResponsive";

export default function LogIn({ location, history }) {
  const [error, setError] = useState(false);
  const { userName, password } = useSelector(
    (state) => state.theUsersAuthenticationInformation
  );
  const dispatch = useDispatch();

  let cookies = new Cookies();

  function handleFetchingJWTToken() {
    axios({
      url: "http://5.9.249.45:8000/login/",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: { username: userName.name, password: password.text },
    })
      .then((res) => {
        setError(false);
        return res.data;
      })
      .then((data) => {
        if (data.token) {
          dispatch(setVerification(true, data.token));
          cookies.set("token", data.token, { path: "/" });
          axios
            .get("http://5.9.249.45:8000/edit_profile/update_profile/", {
              headers: {
                Authorization: "jwt " + data.token,
              },
            })
            .then((res) => {
              cookies.set("profile", res.data[0], { path: "/" });
              return dispatch(setProfileProperties(res.data[0]));
            });

          axios({
            url: "http://5.9.249.45:8000/edit_profile/add_address/",
            method: "get",
            headers: {
              Authorization: "jwt " + data.token,
            },
          })
            .then((res) => {
              dispatch(
                setProfileAddress(res.data[res.data.length - 1].address)
              );
              cookies.set("address", res.data[res.data.length - 1].address, {
                path: "/",
              });
              console.log(res.data);
              return res.data;
            })
            .catch((er) => console.log(er));
          // push to from page after logedin
          const { from } = location.state || { from: { pathname: "/" } };
          history.push(from);
        }
      })
      .catch(() => setError(true));
  }

  return (
    <div className={styles.logIn_page}>
      <section id="loginBox">
        <div className={styles.logIn_page__logIn_box}>
          <div className={styles.logIn_page__logIn_box__header}>
            <span className={styles.logIn_page__logIn_box__header__text}>
              ورود
            </span>
          </div>
          <div className={styles.logIn_page__logIn_box__password_box}>
            <div className={styles.logIn_page__logIn_box__password_box__normal}>
              <PasswordBox />
            </div>
            <div
              className={styles.logIn_page__logIn_box__password_box__responsive}
            >
              <PasswordBoxResponsive />
            </div>
          </div>
          <div className={styles.logIn_page__logIn_box__email_box}>
            <div className={styles.logIn_page__logIn_box__email_box__normal}>
              <UserNameBox />
            </div>
            <div
              className={styles.logIn_page__logIn_box__email_box__responsive}
            >
              <UserNameBoxResponsive />
            </div>
          </div>
          {error ? (
            <div className={styles.logIn_page__logIn_box__error_box}>
              <p className={styles.logIn_page__logIn_box__error_box__text}>
                نام کاربری یا رمز عبور غلط است.
              </p>
            </div>
          ) : (
            ""
          )}
          <div className={styles.logIn_page__logIn_box__logIn_button}>
            <button
              type="submit"
              className={styles.link__submit}
              onClick={() => {
                handleFetchingJWTToken();
              }}
            >
              ورود
            </button>
          </div>
          <div className={styles.logIn_page__logIn_box__forgot_password}>
            <Link
              to="/users/changepassword"
              className={styles.logIn_page__logIn_box__forgot_password__link}
            >
              فراموشی رمز عبور
            </Link>
          </div>
          <div className={styles.logIn_page__logIn_box__register}>
            <span>اکانت ندارید؟</span>
            <Link
              to="/users/signup"
              className={styles.logIn_page__logIn_box__register__link}
              onClick={() => dispatch(setAddress("/users/signup"))}
            >
              عضویت
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
