import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import arrObjReducer from "./slices/arrObjSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PostApi } from "./slices/PostApi";

export const store = configureStore({
  reducer: {
    sampleData: arrObjReducer,
    [PostApi.reducerPath]: PostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostApi.middleware),
});

setupListeners(store.dispatch);
