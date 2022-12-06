import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICategory, IProduct } from "Interfaces/productInterface";
import productAPI from "Services/productAPI";

interface State {
  productList: IProduct[];
  productListWithCategory: IProduct[];
  productListWithSearch: IProduct[];
  categories: ICategory[];
  searchText: string;
}
const initialState: State = {
  productList: [],
  productListWithCategory: [],
  productListWithSearch: [],
  categories: [],
  searchText: "",
};

export const getProductList = createAsyncThunk(
  "product/getProductList",
  async () => {
    try {
      const data = await productAPI.getProductList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCategory = createAsyncThunk("product/getCategory", async () => {
  try {
    const data = await productAPI.getCategory();
    return data;
  } catch (error) {
    throw error;
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProductWithCategory: (state, { payload }) => {
      if (payload === "all") state.productListWithCategory = state.productList;
      else if (payload === "other") {
        state.productListWithCategory = state.productList;
        state.categories.map(
          (category) =>
            (state.productListWithCategory =
              state.productListWithCategory.filter(
                (product) => product.category_id !== category.category_id
              ))
        );
      } else
        state.productListWithCategory = state.productList.filter(
          (product: IProduct) => product.category_id === payload
        );

      if (state.searchText)
        state.productListWithSearch = state.productListWithCategory.filter(
          (product) =>
            product.product_name
              .toLowerCase()
              .includes(state.searchText.toLowerCase())
        );
      else state.productListWithSearch = state.productListWithCategory;
    },

    searchProduct: (state, { payload }) => {
      state.searchText = payload;

      if (payload === "")
        state.productListWithSearch = state.productListWithCategory;
      else
        state.productListWithSearch = state.productListWithCategory.filter(
          (product) =>
            product.product_name.toLowerCase().includes(payload.toLowerCase())
        );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, { payload }) => {
      state.productList = payload.data.mypage.product;
      state.productListWithCategory = payload.data.mypage.product;
      state.productListWithSearch = payload.data.mypage.product;
    });

    builder.addCase(getCategory.fulfilled, (state, { payload }) => {
      state.categories = payload.data.mypage.category;
    });
  },
});

export const { filterProductWithCategory, searchProduct } =
  productSlice.actions;

export default productSlice.reducer;
