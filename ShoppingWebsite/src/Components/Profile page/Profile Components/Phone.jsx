import React, { useState, useEffect } from "react";
import "./Phone.scss";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs({
  initilaValue,
  handleChangePhone,
  handleChangePhoneError,
}) {
  const classes = useStyles();

  const [values, setValues] = useState({ phoneNumber: initilaValue });
  const [error, setError] = useState(false);

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

    handleChangePhone({ type: "CHANGEPHONE", payload: values.phoneNumber });
  }, [values.phoneNumber]);

  useEffect(() => {
    handleChangePhoneError({ type: "CHANGEPHONEERROR", payload: error });
  }, [error]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input
        defaultValue={initilaValue}
        type="number"
        onChange={(e) => setValues({ phoneNumber: e.target.value })}
        inputProps={{ "aria-label": "description" }}
        color={!error ? "primary" : "secondary"}
      />
    </form>
  );
}
