import * as actionTypes from "../store/actions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  formEntries: [
    {
      id: "initial1-35e1-43b9-9709-671ce63448c8",
      value: {
        firstName: "Monroe",
        surname: "Vire",
        email: "monroevire@example.com",
        customerQuery: "Query from Monroe Vire",
      },
    },
    {
      id: "initial2-35e1-43b9-9709-671ce63448c8",
      value: {
        firstName: "Delphine",
        surname: "Atkins",
        email: "delphineatkins@example.com",
        customerQuery: "Query from Delphine Atkins",
      },
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_FORM_DATA:
      return {
        formEntries: state.formEntries.concat({
          id: uuidv4(),
          value: action.payload,
        }),
      };
    case actionTypes.DELETE_FORM_DATA:
      return {
        formEntries: state.formEntries.filter(
          (entry) => entry.id !== action.entryId
        ),
      };
    default:
      return state;
  }
};

export default reducer;
