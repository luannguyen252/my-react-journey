import React, { useState } from "react";
import { useAppDispatch } from "../store.hooks";
import { addProduct, Product } from "./products.slice";

const ProductForm: React.FC = ({}) => {
  // const [{ title, price, id }, setProduct] = useState<Product>({

  const dispatch = useAppDispatch();

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

    dispatch(addProduct(product));

    console.log({ product });
  };

  const { title, price, id } = product;

  return (
    <div className="products__form">
      <h2>Add Game to The Store</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ID"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <button type="submit" onClick={() => console.log("Game is added.")}>
          Add Game
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
