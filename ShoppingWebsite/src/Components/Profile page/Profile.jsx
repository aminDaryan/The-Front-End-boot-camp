import React, { useState, useEffect, useReducer } from "react";
import styles from "./Profile.module.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import ToPersian from "./../PersianNumber";
import Email from "./Profile Components/Email";
import Phone from "./Profile Components/Phone";
import UserName from "./Profile Components/UserName";
import Address from "./Profile Components/Address";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import {
  setProfileUserName,
  setProfileEmail,
  setProfilePhone,
  setProfileAddress,
} from "./../../Redux/Actions/Profile Properties Action";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f0b90b",
    },
  },
});

const initialState = {
  userName: "",
  email: "",
  phone: "",
  address: "",
};

const initialStateError = {
  email: false,
  phone: false,
};

function profileReducer(state, action) {
  switch (action.type) {
    case "INITIALVALUE":
      return {
        userName: action.payload.userName,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
      };
    case "CHANGEUSERNAME":
      return { ...state, userName: action.payload };
    case "CHANGEEMAIL":
      return { ...state, email: action.payload };
    case "CHANGEPHONE":
      return { ...state, phone: action.payload };
    case "CHANGEADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
}

function errorReducer(state, action) {
  switch (action.type) {
    case "CHANGEEMAILERROR":
      return { ...state, email: action.payload };
    case "CHANGEPHONEERROR":
      return { ...state, phone: action.payload };
    default:
      return state;
  }
}

export default function Profile() {
  const [edit, setEdit] = useState(false);

  const [errors, dispatchErrors] = useReducer(errorReducer, initialStateError);
  const [values, dispatchValues] = useReducer(profileReducer, initialState);

  const { user, email, phone, address, id } = useSelector(
    (state) => state.theUsersProfileProperties
  );

  const dispatch = useDispatch();
  let cookies = new Cookies();

  function handleEdit() {
    const token = "jwt " + cookies.get("token");

    axios({
      url: "http://5.9.249.45:8000/edit_profile/add_address/",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: { address: values.address },
    })
      .then((res) => {
        dispatch(setProfileAddress(values.address));
        return res.data;
      })
      .catch((er) => console.log(er));

    axios({
      url: "http://5.9.249.45:8000/edit_profile/update_profile/",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: {
        profile_update: {
          user: values.userName,
          email: values.email,
          phone: values.phone,
          id: id,
        },
      },
    })
      .then((res) => {
        dispatch(setProfileUserName(values.userName));
        dispatch(setProfileEmail(values.email));
        dispatch(setProfilePhone(values.phone));
        return res.data;
      })
      .catch((er) => console.log(er));

    setEdit(!edit);
  }

  useEffect(() => {
    dispatchValues({
      type: "INITIALVALUE",
      payload: {
        userName: user,
        email: email,
        phone: phone,
        address: address,
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__side_bar}></div>
      <div className={styles.container__main}>
        <div className={styles.container__main__profile_information}>
          <div className={styles.container__main__profile_information__grid}>
            <div
              className={
                styles.container__main__profile_information__grid__user_name
              }
            >
              <span
                className={
                  styles.container__main__profile_information__grid__user_name__header
                }
              >
                نام و نام خانوادکی:
              </span>
              {edit ? (
                <UserName
                  initilaValue={user}
                  handleChangeUserName={dispatchValues}
                />
              ) : (
                <span
                  className={
                    styles.container__main__profile_information__grid__user_name__text
                  }
                >
                  {user}
                </span>
              )}
            </div>
            <div
              className={
                styles.container__main__profile_information__grid__email
              }
            >
              <span
                className={
                  styles.container__main__profile_information__grid__email__header
                }
              >
                ایمیل:
              </span>
              {edit ? (
                <Email
                  initilaValue={email}
                  handleChangeEmail={dispatchValues}
                  handleChangeEmailError={dispatchErrors}
                />
              ) : (
                <span
                  className={
                    styles.container__main__profile_information__grid__email__text
                  }
                >
                  {email}
                </span>
              )}
            </div>
            <div
              className={
                styles.container__main__profile_information__grid__phone
              }
            >
              <span
                className={
                  styles.container__main__profile_information__grid__phone__header
                }
              >
                تلفن:
              </span>
              {edit ? (
                <ThemeProvider theme={theme}>
                  <Phone
                    initilaValue={phone}
                    handleChangePhone={dispatchValues}
                    handleChangePhoneError={dispatchErrors}
                  />
                </ThemeProvider>
              ) : (
                <span
                  className={
                    styles.container__main__profile_information__grid__phone__text
                  }
                >
                  <ToPersian
                    number={phone.toLocaleString(navigator.language, {
                      minimumFractionDigits: 0,
                    })}
                    size="1.3vw"
                  />
                </span>
              )}
            </div>
            <div
              className={
                styles.container__main__profile_information__grid__address
              }
            >
              <span
                className={
                  styles.container__main__profile_information__grid__address__header
                }
              >
                آدرس:
              </span>
              {edit ? (
                <Address
                  initilaValue={address}
                  handleChangeAddress={dispatchValues}
                />
              ) : (
                <span
                  className={
                    styles.container__main__profile_information__grid__address__text
                  }
                >
                  {address}
                </span>
              )}
            </div>
          </div>
          <div className={styles.container__main__profile_information__edit}>
            {!errors.email && !errors.phone ? (
              <button
                className={
                  styles.container__main__profile_information__edit__button
                }
                onClick={handleEdit}
              >
                {edit ? "اتمام ویرایش" : "ویرایش اطلاعات شخصی"}
              </button>
            ) : (
              <button
                className={
                  styles.container__main__profile_information__edit__button_error
                }
              >
                ویرایش غلط است
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
