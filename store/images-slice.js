import { createSlice } from "@reduxjs/toolkit";
import { Image as ImageModel } from "../models/Image";

const initialState = {
  images: [],
};

const imagesSlice = createSlice({
  initialState,
  name: "images",
  reducers: {
    addNewImage(state, action) {
      const newImageObject = new ImageModel(
        action.payload.title,
        action.payload.imageUri
      );
      state.images.push(newImageObject);
    },

    removeImage(state, action) {
      const filteredImages = state.images.filter(
        (image) => image.id !== action.payload.id
      );
      state.images = filteredImages;
    },
  },
});

export const imagesActions = imagesSlice.actions;

export default imagesSlice.reducer;
