import React from "react";
import { render, cleanup} from "@testing-library/react";
import DisplayTimesheet from "./DisplayTimesheet";
import { Provider } from "react-redux";
import {store} from "../../../store";

afterEach(cleanup);

test("Timesheet renders without error", () => {
  render(
    <Provider store={store}>
      <DisplayTimesheet />
    </Provider>
  );
});