import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.scss";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "./../../../Redux/Actions/Address Action";
import PasswordBox from "../PasswordBox";
import UserNameBox from "../UserNameBox";
import EmailBox from "../EmailBox";
import ConfirmPasswordBox from "../ConfirmPasswordBox";
import PhoneBox from "../PhoneBox";
import PasswordBoxResponsive from "../PasswordBoxResponsive";
import UserNameBoxResponsive from "../UserNameBoxResponsive";
import EmailBoxResponsive from "../EmailBoxResponsive";
import ConfirmPasswordBoxResponsive from "../ConfirmPasswordBoxResponsive";
import PhoneBoxResponsive from "../PhoneBoxResponsive";

export default function LogIn() {
  const [canSignUp, setCanSignUp] = useState(false);

  // This is react router
  const history = useHistory();
  // This is redux
  const dispatch = useDispatch();
  const {
    userName,
    email,
    phoneNumber,
    password,
    passwordConfirmation,
  } = useSelector((state) => state.theUsersAuthenticationInformation);

  function handleSignUp() {
    axios({
      url: "http://5.9.249.45:8000/signup",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: userName.name,
        email: email,
        phone: phoneNumber,
        password: password.text,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        history.push("/users/login");
        dispatch(setAddress("/users/login"));
      })
      .catch((err) => console.log(err));
  }
  // This handles the signUp authentication
  useEffect(() => {
    let handleSignUpAuthentication = () => {
      if (
        email.address &&
        !email.error &&
        phoneNumber.number &&
        !phoneNumber.error &&
        password.text &&
        !password.error &&
        passwordConfirmation.text &&
        !passwordConfirmation.error
      ) {
        setCanSignUp(true);
      } else {
        setCanSignUp(false);
      }
    };
    handleSignUpAuthentication();
  }, [password, passwordConfirmation, phoneNumber, email]);

  return (
    <div className={styles.logIn_page}>
      <section id="loginBox">
        <div className={styles.logIn_page__logIn_box}>
          <div className={styles.logIn_page__logIn_box__header}>
            <span className={styles.logIn_page__logIn_box__header__text}>
              عضویت
            </span>
          </div>
          <div className={styles.logIn_page__logIn_box__user_name_box}>
            <div
              className={styles.logIn_page__logIn_box__user_name_box__normal}
            >
              <UserNameBox />
            </div>
            <div
              className={
                styles.logIn_page__logIn_box__user_name_box__responsive
              }
            >
              <UserNameBoxResponsive />
            </div>
          </div>
          <div className={styles.logIn_page__logIn_box__email_box}>
            <div
              className={styles.logIn_page__logIn_box__user_name_box__normal}
            >
              <EmailBox />
            </div>
            <div
              className={
                styles.logIn_page__logIn_box__user_name_box__responsive
              }
            >
              <EmailBoxResponsive />
            </div>
          </div>
          <div className={styles.logIn_page__logIn_box__phone_box}>
            <div
              className={styles.logIn_page__logIn_box__user_name_box__normal}
            >
              <PhoneBox />
            </div>
            <div
              className={
                styles.logIn_page__logIn_box__user_name_box__responsive
              }
            >
              <PhoneBoxResponsive />
            </div>
          </div>
          <div className={styles.logIn_page__logIn_box__password_box}>
            <div
              className={styles.logIn_page__logIn_box__user_name_box__normal}
            >
              <PasswordBox />
            </div>
            <div
              className={
                styles.logIn_page__logIn_box__user_name_box__responsive
              }
            >
              <PasswordBoxResponsive />
            </div>
          </div>
          <div className={styles.logIn_page__logIn_box__confirm_password_box}>
            <div
              className={styles.logIn_page__logIn_box__user_name_box__normal}
            >
              <ConfirmPasswordBox />
            </div>
            <div
              className={
                styles.logIn_page__logIn_box__user_name_box__responsive
              }
            >
              <ConfirmPasswordBoxResponsive />
            </div>
          </div>
          <div className={styles.logIn_page__logIn_box__signUp_button}>
            {canSignUp ? (
              <button
                type="submit"
                className={
                  styles.logIn_page__logIn_box__signUp_button__submit_button
                }
                onClick={handleSignUp}
              >
                عضویت
              </button>
            ) : (
              <button
                type="submit"
                className={
                  styles.logIn_page__logIn_box__signUp_button__submit_button_off
                }
              >
                عضویت
              </button>
            )}
          </div>
          <div className={styles.logIn_page__logIn_box__registered}>
            <span>عضو هستید؟</span>
            <Link
              to="/users/login"
              className={styles.logIn_page__logIn_box__registered__link}
              onClick={() => dispatch(setAddress("/users/login"))}
            >
              ورود
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
