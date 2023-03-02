import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardTemplate({ userDisplay }) {
  const userDataList = userDisplay.length ? (
    userDisplay.map((user) => {
      return (
        <React.Fragment key={user.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.job}
              </Typography>
            </CardContent>
          </Card>
        </React.Fragment>
      );
    })
  ) : (
    <></>
  );

  return <>{userDataList}</>;
}
