import React, { useState, useEffect } from "react";
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
  handleChangeEmail,
  handleChangeEmailError,
}) {
  const classes = useStyles();
  const [values, setValues] = useState({ email: initilaValue });
  const [error, setError] = useState(false);

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
    handleChangeEmail({ type: "CHANGEEMAIL", payload: values.email });
  }, [values.email]);

  useEffect(() => {
    handleChangeEmailError({ type: "CHANGEEMAILERROR", payload: error });
  }, [error]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input
        defaultValue={initilaValue}
        onChange={(e) => setValues({ email: e.target.value })}
        inputProps={{ "aria-label": "description" }}
        color={!error ? "primary" : "secondary"}
      />
    </form>
  );
}
