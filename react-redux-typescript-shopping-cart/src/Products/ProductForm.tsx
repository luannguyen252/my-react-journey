import React from "react";

interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
  return (
    <div className="products__form">
      <h2>Add Game to The Store</h2>
      <form>
        <input type="text" placeholder="Title" name="title" />
        <input type="number" placeholder="Price" name="price" />
        <input type="text" placeholder="ID" name="id" />
        <button onClick={() => console.log("Game is added.")}>Add Game</button>
      </form>
    </div>
  );
};

export default ProductForm;
