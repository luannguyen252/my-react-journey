import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import * as actionTypes from "../store/actions";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Form = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name"),
    surname: yup.string().required("Please enter your surname"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please an email address"),
  });

  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch({ type: actionTypes.SUBMIT_FORM_DATA, payload: data });
    setIsFormActive(false);
  };

  return (
    <>
      {!isFormActive ? (
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => setIsFormActive(true)}
        >
          Add Form
        </Button>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                label="First Name"
                name="firstName"
                control={control}
                variant="outlined"
                fullWidth
                autoComplete="fname"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                label="Surname"
                name="surname"
                control={control}
                variant="outlined"
                fullWidth
                autoComplete="lname"
                error={!!errors.surname}
                helperText={errors.surname?.message}
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                label="Email Address"
                name="email"
                control={control}
                variant="outlined"
                fullWidth
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                label="Customer Query"
                name="customerQuery"
                control={control}
                variant="outlined"
                fullWidth
                autoComplete="off"
                multiline={true}
                rows={4}
                rowsMax={8}
                defaultValue=""
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      )}
    </>
  );
};

export default Form;
