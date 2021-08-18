import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import validateProduct from "../fake.api";
import { RootState } from "../store";

export interface Product {
  title: string;
  price: number;
  id: string;
}

export enum ValidationState {
  Fulfilled,
  Pending,
  Rejected,
}

interface ProductsSlideState {
  products: Product[];
  validationState?: ValidationState;
  errorMessage?: string;
}

export const addProductAsync = createAsyncThunk(
  "products/addNewProduct",
  async (initialProduct: Product) => {
    const product = await validateProduct(initialProduct);
    return product;
  }
);

const initialProducts: Product[] = [
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

const initialState: ProductsSlideState = {
  products: initialProducts,
  validationState: undefined,
  errorMessage: undefined,
};

const productsSlide = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // return [action.payload, ...state];
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => ({
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => ({
      ...state,
      validationState: ValidationState.Fulfilled,
      errorMessage: undefined,
      products: [...state.products, action.payload],
    }));
    builder.addCase(addProductAsync.rejected, (state, action) => ({
      ...state,
      validationState: ValidationState.Rejected,
      errorMessage: action.error.message,
    }));
    builder.addCase(addProductAsync.pending, (state, action) => ({
      ...state,
      validationState: ValidationState.Pending,
      errorMessage: undefined,
    }));
  },
});

export const { addProduct, removeProduct } = productsSlide.actions;

export const getProductsSelector = (state: RootState) =>
  state.products.products;
export const getErrorMessage = (state: RootState) =>
  state.products.errorMessage;

export default productsSlide.reducer;
