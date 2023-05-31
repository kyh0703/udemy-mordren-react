import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initalState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducers;
