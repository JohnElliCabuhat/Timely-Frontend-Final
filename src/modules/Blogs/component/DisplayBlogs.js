import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetBlg } from "../../actions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "justify",
  color: theme.palette.text.secondary,
}));

const DisplayBlogs = () => {
  const blogs = useSelector((state) => state.BlogsApi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetBlg());
  }, []);

  // const blogList = blogs.length ? (
  //   blogs.map((blog) => {
  //     return (
  //       <div key={blog.bid}>
  //         <p>Blog Title: {blog.blogTitle}</p>
  //         <p>Blog Description: {blog.blogDescription}</p>
  //         <img src={blog.blogImage} />
  //         <hr></hr>
  //       </div>
  //     );
  //   })
  // ) : (
  //   <p>No post yet</p>
  // );
  return (
    <div>
      <Box sx={{ width: "100%", marginLeft: 10 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {blogs.map((blg) => (
            <Grid item xs={6} key={blg.bid}>
              <Item>
                <Card sx={{ width: "100%" }}>
                  <CardActionArea
                    href={blg.blogLink}
                    target="_blank"
                    rel="noopener"
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={blg.blogImage}
                      alt="event photo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blg.blogTitle}
                      </Typography>
                      {/* <p style={{ textAlign: "justify" }}>
                        {new Date(evt.eventDate).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p> */}
                      <Typography variant="body2" color="text.secondary">
                        {blg.blogDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* {blogList} */}
    </div>
  );
};

export default DisplayBlogs;
