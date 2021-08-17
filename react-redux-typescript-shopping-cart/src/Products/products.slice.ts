import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Product {
  title: string;
  price: number;
  id: string;
}

const initialState: Product[] = [
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

const productsSlide = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // return [action.payload, ...state];
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlide.actions;

export const getProductsSelector = (state: RootState) => state.products;

export default productsSlide.reducer;
