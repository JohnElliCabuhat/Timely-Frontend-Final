import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Posts = () => {
  const users = useSelector((state) => state.userAPI);
  console.log(users);
  console.log(users.length);
  const usersList = users.length ? (
    users.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.job}</p>
          <hr></hr>
        </div>
      );
    })
  ) : (
    <p>No Post Yest</p>
  );

  return <div>{usersList}</div>;
};

export default Posts;
