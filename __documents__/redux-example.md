# React Redux Example

```
- actions
- containers
- reducers
- components
```

## Actions

```javascript
// actions/index.js
let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

// actions/index.spec.js
import * as actions from "./index";

describe("todo actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    expect(actions.addTodo("Use Redux")).toEqual({
      type: "ADD_TODO",
      id: 0,
      text: "Use Redux",
    });
  });

  it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    expect(actions.setVisibilityFilter("active")).toEqual({
      type: "SET_VISIBILITY_FILTER",
      filter: "active",
    });
  });

  it("toggleTodo should create TOGGLE_TODO action", () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: "TOGGLE_TODO",
      id: 1,
    });
  });
});
```

## Reducers

```javascript
// reducers/index.js
import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter,
});

// reducers/todos.js
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;

// reducers/todos.spec.js
import todos from "./todos";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      todos([], {
        type: "ADD_TODO",
        text: "Run the tests",
        id: 0,
      })
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0,
      },
    ]);

    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0,
          },
        ],
        {
          type: "ADD_TODO",
          text: "Use Redux",
          id: 1,
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0,
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1,
      },
    ]);

    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0,
          },
          {
            text: "Use Redux",
            completed: false,
            id: 1,
          },
        ],
        {
          type: "ADD_TODO",
          text: "Fix the tests",
          id: 2,
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0,
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1,
      },
      {
        text: "Fix the tests",
        completed: false,
        id: 2,
      },
    ]);
  });

  it("should handle TOGGLE_TODO", () => {
    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1,
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
        ],
        {
          type: "TOGGLE_TODO",
          id: 1,
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1,
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
    ]);
  });
});

// VisibilityFilter.js
import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
```

## Components

```javascript
// App.js
import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
export default App;

// Footer.js
import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);
export default Footer;

// Link.js
import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;

// Todo.js
import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

// TodoList.js
import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
```

## Containers

```javascript
// containers/AddTodo.js
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);

// containers/FilterLink.js
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);

// containers/VisibleTodoList.js
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

## Store

```javascript
// store/index.js
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
