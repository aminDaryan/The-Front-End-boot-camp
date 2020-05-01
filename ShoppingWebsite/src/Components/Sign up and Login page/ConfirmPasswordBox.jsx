import React, { useState, useEffect } from "react";
import { setUserAuthenticationPasswordConfirmation } from "../../Redux/Actions/User authentication Action";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import LockIcon from "@material-ui/icons/Lock";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& input": {
      height: "1.2vw",
    },
  },
  textField: {
    width: "100%",
  },
}));

const CssInput = withStyles({
  root: {
    "&::after": {
      border: "0.085vw solid #F0B90B",
    },
    "& input": {
      direction: "ltr",
      height: "1.2vw",
      padding: "0.45vw",
    },
  },
})(Input);

const CssLabel = withStyles({
  root: {
    left: "71.5%",
    fontFamily: "Shabnam",
    fontSize: "1vw",
    width: "6vw",
    transition: "0.2s",

    "&.Mui-focused": {
      color: "#F0B90B",
      marginLeft: "1vw",
    },
  },
})(InputLabel);

const CssLabelError = withStyles({
  root: {
    left: "71.5%",
    fontFamily: "Shabnam",
    fontSize: "1vw",
    width: "6vw",
    transition: "0.2s",

    "&.Mui-focused": {
      color: "secondary",
      marginLeft: "1vw",
    },
  },
})(InputLabel);

const FormHelperTextError = withStyles({
  root: {
    color: "red",
    fontFamily: "shabnam",
  },
})(FormHelperText);

export default function PasswordBox() {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const { password } = useSelector(
    (state) => state.theUsersAuthenticationInformation
  );

  useEffect(() => {
    if (values.password) {
      if (values.password === password.text) {
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setError(false);
    }
    dispatch(setUserAuthenticationPasswordConfirmation(values.password, error));
  }, [values.password]);

  useEffect(() => {
    dispatch(setUserAuthenticationPasswordConfirmation(values.password, error));
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
          <div style={{ marginBottom: "-1.7vw", marginRight: "-0.5vw" }}>
            <LockIcon
              style={{
                fontSize: "1.2vw",
                color: "#707070",
                opacity: "0.7",
                margin: "0.5vw",
              }}
            />
          </div>
          <div>
            {error ? (
              <CssLabelError
                htmlFor="standard-adornment-password"
                color={"secondary"}
              >
                تایید رمز عبور
              </CssLabelError>
            ) : (
              <CssLabel htmlFor="standard-adornment-password">
                تایید رمز عبور
              </CssLabel>
            )}
            <CssInput
              id="standard-adornment-input"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              style={{ width: "20.9vw"}}
              color={error ? "secondary" : "primary"}
            />
            {error ? (
              <FormHelperTextError
                id="standard-weight-helper-text"
                color={"secondary"}
              >
                رمز عبور باید یکسان باشد
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
