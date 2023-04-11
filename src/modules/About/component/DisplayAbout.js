import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DisplayAbout = () => {
  return (
    <div>
      <div>
        <h1>Leadership Team</h1>
        <Box sx={{ flexGrow: 1, marginLeft: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    sx={{ height: 400 }}
                    image={"images/CEO-Picture.jpg"}
                    title="CEO Picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Jerald Krasinski
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      CEO
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    sx={{ height: 400 }}
                    image={"images/CFO-Picture.jpg"}
                    title="CFO Picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Mike Towns
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      CFO
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    sx={{ height: 400 }}
                    image={"images/COO-Picture.jpg"}
                    title="COO Picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Anthony Hopkins
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      COO
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div>
        <h1>Sponsors</h1>
        <Box sx={{ flexGrow: 1, marginLeft: 20 }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <img
                src={"images/microsoft.jpg"}
                style={{ maxWidth: "100%", maxHeight: 150, paddingTop:20 }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={"images/mysql.jpg"}
                style={{ maxWidth: "100%", maxHeight: 150, paddingBottom:20 }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={"images/react.jpg"}
                style={{ maxWidth: "100%", maxHeight: 150 }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={"images/netcore.jpg"}
                style={{ maxWidth: "100%", maxHeight: 150 }}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default DisplayAbout;
