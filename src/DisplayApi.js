import React from "react";
import { useGetAllPostQuery } from "./slices/PostApi";

const DisplayApi = () => {
  const responseInfo = useGetAllPostQuery();
  console.log(responseInfo.data);
  const postList = responseInfo.data ? (
    responseInfo.data.map((user) => {
      return (
        <React.Fragment key={user.id}>
          <p>Title: {user.title}</p>
          <p>Body: {user.body}</p>
        </React.Fragment>
      );
    })
  ) : (
    <p>No post yet</p>
  );
  return <div>
    <h3>Sample API</h3>
    {postList}</div>;
};

export default DisplayApi;
