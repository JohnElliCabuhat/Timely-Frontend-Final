import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetTms, onSetStatus } from "../../actions";
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

import { onSetModalTm } from "../../actions";
import DisplayModalTm from "./DisplayModalTm";

const DisplayTimesheet = () => {
  const timesheets = useSelector((state) => state.TimesheetApi);
  console.log(timesheets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetTms());
  }, []);

  const handleValidate = (id, value) => {
    if (value == "Approved") {
      dispatch(onSetModalTm(true));
      dispatch(onSetStatus({ tid: id, status: value }));
    } else if (value == "Rejected") {
      dispatch(onSetModalTm(true));
      dispatch(onSetStatus({ tid: id, status: value }));
    }
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
            {timesheets.length ? (
              timesheets.map((timesheet) => (
                <TableRow
                  key={timesheet.tid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {timesheet.timesheetId}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(timesheet.startDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(timesheet.endDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell align="center">{timesheet.employeeName}</TableCell>
                  <TableCell align="center">{timesheet.projectName}</TableCell>
                  <TableCell align="center">{timesheet.status}</TableCell>
                  <TableCell align="center">
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                      <Select
                        value={timesheet.status}
                        onChange={(event) =>
                          handleValidate(timesheet.tid, event.target.value)
                        }
                        disabled={
                          timesheet.status === "Approved" ||
                          timesheet.status === "Rejected"
                        }
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value={"Pending"}>Pending</MenuItem>
                        <MenuItem value={"Approved"}>Approved</MenuItem>
                        <MenuItem value={"Rejected"}>Rejected</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>No data</>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <DisplayModalTm />
    </div>
  );
};

export default DisplayTimesheet;
