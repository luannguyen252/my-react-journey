import React, { useState } from "react";

interface ProductsListProps {}

interface Product {
  title: string;
  price: number;
  id: string;
}

const initialProducts = [
  {
    title: "The Legend of Zelda™: Breath of the Wild",
    price: 59.99,
    id: "tlozbotw",
  },
  {
    title: "The Legend of Zelda™: Link’s Awakening",
    price: 59.99,
    id: "tlozla",
  },
  {
    title: "The Legend of Zelda™: Skyward Sword HD",
    price: 59.99,
    id: "tlozsshd",
  },
];

const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  return (
    <div className="products__list">
      <h2>Game List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : $${product.price}`}</span>
        </div>
      ))}

      <button
        onClick={() =>
          setProducts((prevProducts) => [
            {
              title: "1111",
              price: 100,
              id: "111",
            },
            ...prevProducts,
          ])
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductsList;
