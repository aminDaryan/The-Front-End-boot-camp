import React, { useState, useEffect } from "react";
import { setUserAuthenticationUserName } from "../../Redux/Actions/User authentication Action";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { useDispatch } from "react-redux";

const CssInput = withStyles({
  root: {
    "& div": {
      lineHeight: "8vw",
      fontSize: "8vw",
      marginTop: "5vw",
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
    left: "69.5%",
    fontFamily: "Shabnam",
    fontSize: "5vw",
    width: "22vw",
    transition: "0.2s",

    "& label": {
      marginLeft: "6vw",
    },
    "&.Mui-focused": {
      color: "#F0B90B",
      marginLeft: "6vw",
    },
  },
})(InputLabel);

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
    userName: "",
  });

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    dispatch(setUserAuthenticationUserName(values.userName));
  }, [values.userName]);

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
          <div style={{ marginLeft: "0.5vw", paddingTop: "1.8vw",  marginRight: "-3vw" }}>
            <PersonOutlineIcon
              style={{
                fontSize: "8vw",
                color: "#707070",
                opacity: "0.7",
                padding: "0",
              }}
            />
          </div>
          <div>
            <CssLabel htmlFor="standard-adornment-password">
              نام کاربری
            </CssLabel>

            <CssInput
              id="standard-required"
              style={{ width: "67vw" }}
              onChange={handleChange("userName")}
            />
          </div>
        </div>
      </FormControl>
    </div>
  );
}
