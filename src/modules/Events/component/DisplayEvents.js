import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetEvt } from "../../actions";
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

const DisplayEvents = () => {
  const events = useSelector(state => state.EventsApi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetEvt());
  }, []);

  return (
    <div>
      <Box sx={{ width: "100%", marginLeft: 10 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {events.length ? (events.map((evt) => (
            <Grid item xs={6} key={evt.evid}>
              <Item>
                <Card sx={{ width: "100%" }}>
                  <CardActionArea
                    href={evt.eventLink}
                    target="_blank"
                    rel="noopener"
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={evt.eventImage}
                      alt="event photo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "bold"}}>
                        {evt.eventName}
                      </Typography>
                      <p style={{ textAlign: "justify" }}>
                        {new Date(evt.eventDate).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <Typography variant="body2" color="text.secondary">
                        {evt.eventDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      href={evt.eventLink}
                      target="_blank"
                      rel="noopener"
                      sx={{color: "#040c63"}}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))) : (<>No Data</>)}
        </Grid>
      </Box>
    </div>
  );
};

export default DisplayEvents;
