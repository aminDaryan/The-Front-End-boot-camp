import React, { useState, useEffect } from "react";
import { setUserAuthenticationPassword } from "./../../Redux/Actions/User authentication Action";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useDispatch } from "react-redux";

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
    left: "80.5%",
    fontFamily: "Shabnam",
    fontSize: "1vw",
    transition: "0.2s",
    "&.Mui-focused": {
      color: "#F0B90B",
      marginLeft: "1vw",
    },
  },
})(InputLabel);

const CssLabelError = withStyles({
  root: {
    left: "80.5%",
    fontFamily: "Shabnam",
    fontSize: "1vw",
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

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (values.password) {
      function validatePassword(password) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return re.test(password);
      }
      if (validatePassword(values.password)) {
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setError(false);
    }
    dispatch(setUserAuthenticationPassword(values.password, error));
  }, [values.password]);

  useEffect(() => {
    dispatch(setUserAuthenticationPassword(values.password, error));
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
            <VpnKeyIcon
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
                رمز عبور
              </CssLabelError>
            ) : (
              <CssLabel htmlFor="standard-adornment-password">
                رمز عبور
              </CssLabel>
            )}
            <CssInput
              id="standard-adornment-input"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              style={{ width: "20.9vw"}}
              color={error ? "secondary" : "primary"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    style={{ paddingLeft: "0" }}
                  >
                    {values.showPassword ? (
                      <Visibility style={{ fontSize: "1.2vw" }} />
                    ) : (
                      <VisibilityOff style={{ fontSize: "1.2vw" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {error ? (
              <FormHelperTextError
                id="standard-weight-helper-text"
                color={"secondary"}
              >
                رمز عبور باید حداقل ۸ کاراکتر باشد.
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
