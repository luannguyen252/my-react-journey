# React Fragments

> Fragments allow you to group a list of children without adding extra nodes to the DOM.

```javascript
class App extends React.Component {
  render() {
    return (
      // Rendering with div tag
      <div>
        <h2>Hello World!</h2>
        <p>Welcome to the JavaTpoint.</p>
      </div>
    );
  }
}
```

```javascript
class App extends React.Component {
  render() {
    return (
      // Rendering with Fragment
      <React.Fragment>
        <h2>Hello World!</h2>
        <p>Welcome to the JavaTpoint.</p>
      </React.Fragment>
    );
  }
}
```

## Why we use Fragments?

1. It makes the execution of code faster as compared to the div tag.
2. It takes less memory.

## Fragments Short Syntax

There is also another shorthand exists for declaring fragments for the above method. It looks like empty tag in which we can use of `<>` and `''` instead of the `React.Fragment`.

```javascript
class Columns extends React.Component {
  render() {
    return (
      // Rendering with short syntax
      <>
        <h2> Hello World! </h2>
        <p> Welcome to the JavaTpoint </p>
      </>
    );
  }
}
```

## Keyed Fragments

You need a key for mapping a collection to an array of fragments such as to create a description list. If you need to provide keys, you have to declare the fragments with the explicit `<React.Fragment>` syntax.

```javascript
export default function FragmentExample(props) {
  return (
    <Fragment>
      {props.items.data.map((item) => (
        // Without the 'key', React will give a key warning
        <React.Fragment key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.url}</p>
          <p>{item.description}</p>
        </React.Fragment>
      ))}
    </Fragment>
  );
}
```
