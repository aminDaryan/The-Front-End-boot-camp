import React, { useState, useEffect } from "react";
import { setUserAuthenticationEmail } from "./../../Redux/Actions/User authentication Action";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useDispatch } from "react-redux";

const CssInput = withStyles({
  root: {
    "& div": {
      lineHeight: "8vw",
      fontSize: "8vw",
      marginTop: "1vw",
    },
    "& .MuiInputLabel-formControl": {
      left: "89%",
      fontFamily: "Shabnam",
      fontSize: "8vw",
      transition: "0.2s",
    },
    "& label.Mui-focused": {
      color: "#F0B90B",
      marginLeft: "0.5vw",
    },
    "&::after": {
      border: "0.085vw solid #F0B90B",
    },
    "& input": {
      height: "10vw",
      padding: "0.39vw 0 0.45vw",
      direction: "ltr",
    },
  },
})(Input);

const CssLabel = withStyles({
  root: {
    left: "87%",
    fontFamily: "Shabnam",
    fontSize: "5vw",
    width: "6vw",
    transition: "0.2s",

    "& label": {
      margin: "1vw",
    },
    "&.Mui-focused": {
      color: "#F0B90B",
      marginLeft: "2vw",
    },
  },
})(InputLabel);

const CssLabelError = withStyles({
  root: {
    left: "77.5%",
    fontFamily: "Shabnam",
    fontSize: "5vw",
    width: "6vw",
    transition: "0.2s",

    "& label": {
      margin: "1vw",
    },
    "&.Mui-focused": {
      color: "secondary",
      marginLeft: "10.5vw",
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
    email: "",
  });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (values.email) {
      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      if (validateEmail(values.email)) {
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setError(false);
    }
    dispatch(setUserAuthenticationEmail(values.email, error));
  }, [values.email]);

  useEffect(() => {
    dispatch(setUserAuthenticationEmail(values.email, error));
  }, [error]);

  return (
    <div>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <div style={{ marginLeft: "0.5vw", paddingTop: "1.8vw" }}>
            <MailOutlineIcon
              style={{
                fontSize: "8vw",
                color: "#707070",
                opacity: "0.7",
                padding: "0",
                marginRight: "-3vw"
              }}
            />
          </div>
          <div>
            {error ? (
              <CssLabelError
                htmlFor="standard-adornment-password"
                color={"secondary"}
              >
                ایمیل
              </CssLabelError>
            ) : (
              <CssLabel htmlFor="standard-adornment-password">ایمیل</CssLabel>
            )}
            <CssInput
              id="standard-required"
              style={{width: "67.5vw"}}
              color={error ? "secondary" : "primary"}
              onChange={handleChange("email")}
            />
            {error ? (
              <FormHelperTextError
                id="standard-weight-helper-text"
                color={"secondary"}
              >
                ایمیل نا معتبر می باشد.
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
