import mediaReducer from "../slices/mediaSlice";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        media: mediaReducer
    }
  })
  export default store;