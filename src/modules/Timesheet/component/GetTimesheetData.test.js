import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DisplayTimesheet from "./DisplayTimesheet";

const mockStore = configureStore([]);

describe("DisplayTimesheet", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      TimesheetApi: [
        {
          tid: 1,
          timesheetId: "TS0001",
          startDate: "2022-01-01T00:00:00.000Z",
          endDate: "2022-01-07T00:00:00.000Z",
          employeeName: "John Doe",
          projectName: "Project A",
          status: "Pending",
        },
        {
          tid: 2,
          timesheetId: "TS0002",
          startDate: "2022-01-08T00:00:00.000Z",
          endDate: "2022-01-14T00:00:00.000Z",
          employeeName: "Jane Smith",
          projectName: "Project B",
          status: "Approved",
        },
      ],
    });

    component = render(
      <Provider store={store}>
        <DisplayTimesheet />
      </Provider>
    );
  });

  it("renders the table headers correctly", () => {
    expect(
      component.getByRole("columnheader", { name: "Timesheet ID" })
    ).toBeInTheDocument();
    expect(
      component.getByRole("columnheader", { name: "Start Date" })
    ).toBeInTheDocument();
    expect(
      component.getByRole("columnheader", { name: "End Date" })
    ).toBeInTheDocument();
    expect(
      component.getByRole("columnheader", { name: "Employee Name" })
    ).toBeInTheDocument();
    expect(
      component.getByRole("columnheader", { name: "Project Name" })
    ).toBeInTheDocument();
    expect(
      component.getByRole("columnheader", { name: "Status" })
    ).toBeInTheDocument();
    expect(
      component.getByRole("columnheader", { name: "" })
    ).toBeInTheDocument();
  });

  it("renders the correct number of rows", () => {
    expect(component.getAllByRole("row")).toHaveLength(3);
  }); })