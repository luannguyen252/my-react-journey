import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Form from "./components/Form";
import Summary from "./components/Summary";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },

  box: {
    borderRadius: 4,
    border: "1px solid",
    borderColor: theme.palette.action.disabledBackground,
    padding: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();

  useEffect(() => {
    console.clear();
    console.log(
      "\nDeveloped by Ali Tursucular\n\nLinkedIn: https://www.linkedin.com/in/alitursucular/\nPersonal Portfolio: https://alitursucular.github.io"
    );
  }, []);

  return (
    <Container component="main" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box mt={4} mb={3}>
            <Typography component="h2" variant="h6">
              Customer Query Form
            </Typography>
            <Typography component="span" variant="body2">
              Click on the "Add Button" to add a new form.
            </Typography>
          </Box>
          <Form />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={4} mb={3}>
            <Typography component="h2" variant="h6">
              Submitted Data:
            </Typography>
            <Typography component="span" variant="body2">
              This box is the "Summary Component" that maps out submitted form
              details from Redux store.
            </Typography>
          </Box>
          <Box className={classes.box}>
            <Summary />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
