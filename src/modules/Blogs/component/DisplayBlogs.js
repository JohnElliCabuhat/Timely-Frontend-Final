import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetBlg } from "../../actions";

const DisplayBlogs = () => {
  const blogs = useSelector((state) => state.BlogsApi);
  // console.log(employees);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetBlg());
  }, []);

  const blogList = blogs.length ? (
    blogs.map((blog) => {
      return (
        <div key={blog.bid}>
          <p>Blog Title: {blog.blogTitle}</p>
          <p>Blog Description: {blog.blogDescription}</p>
          <img src={blog.blogImage} />
          <hr></hr>
        </div>
      );
    })
  ) : (
    <p>No post yet</p>
  );
  return <div>{blogList}</div>;
};

export default DisplayBlogs;
