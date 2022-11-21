import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    addWishlist: (state, action) => {
      state.wishlist.push(action?.payload);
    },
  },
});

export default globalSlice.reducer;
export const {addWishlist} = globalSlice.actions;
