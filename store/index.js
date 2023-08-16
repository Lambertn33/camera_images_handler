import { configureStore } from "@reduxjs/toolkit";

import imagesReducer from "./images-slice";

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
