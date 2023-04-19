import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetEmp } from "../../actions";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styledGrid } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { images } from "../../../assets";
import { useTheme } from "@mui/material/styles";

function searchEmp(name) {
  return function (x) {
    return x.employeeName.toLowerCase().includes(name.toLowerCase()) || !name;
  };
}

const Item = styledGrid(Paper)(({ theme }) => ({
  backgroundColor: "#040c63",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("md")]: {
    marginLeft: 100,
  },
}));

const DisplayEmployee = () => {
  const [name, setName] = useState("");
  const employees = useSelector((state) => state.EmployeeApi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetEmp());
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const [selectedEmp, setselectedEmp] = useState(null);

  const theme = useTheme();

  return (
    <div style={{ textAlign: "center" }}>
      <TextField
        id="search-emp"
        label="Search Name"
        variant="outlined"
        onChange={handleChange}
        sx={{
          marginBottom: 10,
          marginLeft: 20,
          width: "27%",
          [theme.breakpoints.down("md")]: {
            width: "50%",
            marginLeft: 30,
          },
          [theme.breakpoints.down("sm")]: {
            width: "50%",
            marginLeft: 0,
          },
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: 20,
          [theme.breakpoints.down("md")]: {
            marginRight: 3,
          },
          [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            paddingRight: 10,
          },
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 3 }}
          columns={{ xs: 2, sm: 4, md: 12 }}
        >
          {employees.length ? (
            employees.filter(searchEmp(name)).map((emp) => (
              <Grid item xs={2} sm={4} md={4} key={emp.eid}>
                <Item>
                  <Card>
                    <img src={images.Profile} />
                    <CardHeader
                      title={emp.employeeName}
                      subheader={`ID : ${emp.employeeId}`}
                    />
                    <CardActions disableSpacing>
                      <IconButton
                        onClick={() =>
                          setselectedEmp(
                            selectedEmp === emp.eid ? null : emp.eid
                          )
                        }
                      >
                        {selectedEmp === emp.eid ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </IconButton>
                    </CardActions>
                    <Collapse in={selectedEmp == emp.eid}>
                      <CardContent sx={{ textAlign: "left", marginLeft: 5 }}>
                        <p>Contact Number: {emp.contactNumber}</p>
                        <p>Email: {emp.email}</p>
                        <p>Department: {emp.department}</p>
                        <p>ProjectID: {emp.projectId}</p>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Item>
              </Grid>
            ))
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default DisplayEmployee;
