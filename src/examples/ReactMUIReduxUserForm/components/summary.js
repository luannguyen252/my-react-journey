import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { syntaxHighlight } from "../functions/utilities";
import * as actionTypes from "../store/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    padding: theme.spacing(1),
    "&:not(:last-child)": {
      marginBottom: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: "cornsilk",
    },

    "& .hidden-delete-button": {
      position: "absolute",
      display: "none",
    },

    "&:hover .hidden-delete-button": {
      display: "flex",
      top: 0,
      right: 0,
    },
  },

  pre: {
    textAlign: "left",
    whiteSpace: "pre-wrap",
    "& .string": { color: "green" },
    "& .number": { color: "darkorange" },
    "& .boolean": { color: "blue" },
    "& .null": { color: "magenta" },
    "& .key": { color: "red" },
  },

  customHoverFocus: {
    backgroundColor: "red",
    "&:hover, &.Mui-focusVisible": { backgroundColor: "pink" },
  },
}));

const Summary = () => {
  const classes = useStyles();
  const formEntries = useSelector((state) => state.formEntries);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: actionTypes.DELETE_FORM_DATA, entryId: id });
  };

  return (
    <>
      {formEntries.length > 0 ? (
        formEntries.map((entry) => (
          <Paper key={entry.id} className={classes.paper}>
            <pre
              className={classes.pre}
              dangerouslySetInnerHTML={{
                __html: syntaxHighlight(
                  JSON.stringify(entry.value, undefined, 4)
                ),
              }}
            />
            <IconButton
              className="hidden-delete-button"
              aria-label="Delete"
              onClick={() => handleDelete(entry.id)}
            >
              <DeleteOutline />
            </IconButton>
          </Paper>
        ))
      ) : (
        <Typography component="p" variant="body2">
          There isn't any submitted form data
        </Typography>
      )}
    </>
  );
};

export default Summary;
