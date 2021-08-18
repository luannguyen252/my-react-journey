import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store.hooks";
import {
  addProduct,
  addProductAsync,
  getErrorMessage,
  Product,
} from "./products.slice";

const ProductForm: React.FC = ({}) => {
  // const [{ title, price, id }, setProduct] = useState<Product>({

  const dispatch = useAppDispatch();
  const errorMessage = useSelector(getErrorMessage);

  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // dispatch(addProduct(product));
    dispatch(addProductAsync(product));

    console.log({ product });
  };

  const { title, price, id } = product;

  return (
    <div className="products__form">
      <h2>Add Game to The Store</h2>
      {errorMessage && <span>Error: {errorMessage}</span>}
      <form onSubmit={handleSubmit}>
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="text"
          placeholder="ID"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <button
          style={{ backgroundColor: errorMessage ? "red" : "lightgrey" }}
          type="submit"
          onClick={() => console.log("Game is added.")}
        >
          Add Game
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
