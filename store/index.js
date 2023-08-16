import { configureStore } from "@reduxjs/toolkit";

import imagesReducer from "./images-slice";

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;
