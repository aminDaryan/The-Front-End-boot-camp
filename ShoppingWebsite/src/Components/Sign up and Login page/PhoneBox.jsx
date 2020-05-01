import React, { useState, useEffect } from "react";
import { setUserAuthenticationPhoneNumber } from "./../../Redux/Actions/User authentication Action";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { useDispatch } from "react-redux";

const CssInput = withStyles({
  root: {
    "& input::-webkit-outer-spin-button": {
      appearance: "none",
      margin: 0,
    },
    "& input::-webkit-inner-spin-button": {
      appearance: "none",
      margin: 0,
    },

    "& div": {
      lineHeight: "1.2vw",
      fontSize: "1vw",
      marginTop: "1vw",
    },
    "& .MuiInputLabel-formControl": {
      left: "77%",
      fontFamily: "Shabnam",
      fontSize: "1vw",
      width: "5vw",
      transition: "0.2s",
    },
    "& label.Mui-focused": {
      color: "#F0B90B",
      marginLeft: "1vw",
      appearance: "none",
    },
    "&::after": {
      border: "0.085vw solid #F0B90B",
    },
    "& input": {
      height: "1.2vw",
      padding: "0.39vw 0 0.45vw",
      direction: "ltr",
    },
  },
})(Input);

const CssLabel = withStyles({
  root: {
    left: "73%",
    fontFamily: "Shabnam",
    fontSize: "1vw",
    width: "6vw",
    transition: "0.2s",

    "& label": {
      margin: "1vw",
    },
    "&.Mui-focused": {
      color: "#F0B90B",
      marginLeft: "1.3vw",
    },
  },
})(InputLabel);

const CssLabelError = withStyles({
  root: {
    left: "73%",
    fontFamily: "Shabnam",
    fontSize: "1vw",
    width: "6vw",
    transition: "0.2s",

    "& label": {
      margin: "1vw",
    },
    "&.Mui-focused": {
      color: "secondary",
      marginLeft: "1.3vw",
    },
  },
})(InputLabel);

const FormHelperTextError = withStyles({
  root: {
    color: "red",
    fontFamily: "shabnam",
  },
})(FormHelperText);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "100%",
  },
}));

export default function PasswordBox() {
  const classes = useStyles();
  const [values, setValues] = useState({
    phoneNumber: "",
  });

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (values.phoneNumber) {
      function validatePhoneNumber(phoneNumber) {
        var re = /^(09|9)[0-9]{9,9}$/;
        return re.test(phoneNumber);
      }
      if (validatePhoneNumber(values.phoneNumber)) {
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setError(false);
    }
    dispatch(setUserAuthenticationPhoneNumber(values.phoneNumber, error));
  }, [values.phoneNumber]);

  useEffect(() => {
    dispatch(setUserAuthenticationPhoneNumber(values.phoneNumber, error));
  }, [error]);

  return (
    <div>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "0.5vw", paddingTop: "1.8vw" }}>
            <PhoneIphoneIcon
              style={{
                fontSize: "1.2vw",
                color: "#707070",
                opacity: "0.7",
                padding: "0",
              }}
            />
          </div>
          <div>
            {error ? (
              <CssLabelError
                htmlFor="standard-adornment-password"
                color={"secondary"}
              >
                شماره همراه
              </CssLabelError>
            ) : (
              <CssLabel htmlFor="standard-adornment-password">
                شماره همراه
              </CssLabel>
            )}
            <CssInput
              id="standard-required"
              type="number"
              style={{ width: "20.8vw" }}
              color={error ? "secondary" : "primary"}
              onChange={handleChange("phoneNumber")}
            />
            {error ? (
              <FormHelperTextError
                id="standard-weight-helper-text"
                color={"secondary"}
              >
                شماره نا معتبر می باشد.
              </FormHelperTextError>
            ) : (
              ""
            )}
          </div>
        </div>
      </FormControl>
    </div>
  );
}
