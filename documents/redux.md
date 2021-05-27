# React Redux

- Redux is an open-source JavaScript library used to manage application state.

- It allows React components to read data from a Redux Store, and dispatch `Actions` to the `Store` to update data.

- Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model.

- React Redux is conceptually simple.

- It subscribes to the Redux store, checks to see if the data which your component wants have changed, and re-renders your component.

1. Redux does not have Dispatcher concept.
2. Redux has an only Store whereas Flux has many Stores.
3. The Action objects will be received and handled directly by Store.

## Why use React Redux?

The main reason to use React Redux are:

1. React Redux is the official UI bindings for react Application. It is kept up-to-date with any API changes to ensure that your React components behave as expected.
2. It encourages good 'React' architecture.
3. It implements many performance optimizations internally, which allows to components re-render only when it actually needs.

## Redux Architecture

[Redux Architecture](./redux-architecture.png "Redux Architecture")

**STORE:** A Store is a place where the entire state of your application lists. It manages the status of the application and has a dispatch(action) function. It is like a brain responsible for all moving parts in Redux.

**ACTION:** Action is sent or dispatched from the view which are payloads that can be read by Reducers. It is a pure object created to store the information of the user's event. It includes information such as type of action, time of occurrence, location of occurrence, its coordinates, and which state it aims to change.

**REDUCER:** Reducer read the payloads from the actions and then updates the store via the state accordingly. It is a pure function to return a new state from the initial state.

## Redux Installation

```bash
npm install redux react-redux
```
