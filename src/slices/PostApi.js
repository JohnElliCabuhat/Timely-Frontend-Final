import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const PostApi = createApi({
  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
  }),
});

export const {useGetAllPostQuery} = PostApi;