import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // console.log(typeof state.value," state.value");
      // console.log(action.payload," action.payload");
      // console.log(state.value.includes(action.payload));
      if (state.value.includes(action.payload)) {
        return;
      } else {
        state.value = [...state.value, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state.value = [];
    },
    setCartValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, setCartValue } =
  cartSlice.actions;

export default cartSlice.reducer;
