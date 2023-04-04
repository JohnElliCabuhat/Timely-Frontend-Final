import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetTms, onUptTms } from "../../actions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DisplayTimesheet = () => {
  const timesheets = useSelector((state) => state.TimesheetApi);
  console.log(timesheets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetTms());
  }, []);

 

  const handleChange = (id, event) => {
    dispatch(onUptTms(id, event.target.value));
  };

  return (
    <div style={{ marginLeft: 100 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Timesheet ID</TableCell>
              <TableCell align="center">Start Date</TableCell>
              <TableCell align="center">End Date</TableCell>
              <TableCell align="center">Employee Name</TableCell>
              <TableCell align="center">Project Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timesheets.map((timesheet) => (
              <TableRow
                key={timesheet.tid}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {timesheet.timesheetId}
                </TableCell>
                <TableCell align="center">
                  {timesheet.startDate.slice(0, 10)}
                </TableCell>
                <TableCell align="center">
                  {timesheet.endDate.slice(0, 10)}
                </TableCell>
                <TableCell align="center">{timesheet.employeeName}</TableCell>
                <TableCell align="center">{timesheet.projectName}</TableCell>
                <TableCell align="center">{timesheet.status}</TableCell>
                <TableCell align="center">
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <Select
                      value={timesheet.status}
                      onChange={(event) => handleChange(timesheet.tid, event)}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={"Approved"}>Approved</MenuItem>
                      <MenuItem value={"Rejected"}>Rejected</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {timesheetList} */}
    </div>
  );
};

export default DisplayTimesheet;
