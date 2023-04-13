import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import DisplayLogin from "./DisplayLogin";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

test("login renders without error", () => {
  render(
    <MemoryRouter>
      <DisplayLogin />
    </MemoryRouter>
  );
});

test("login handles form submission", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <DisplayLogin />
    </MemoryRouter>
  );

  const empIdTextField = getByTestId("username").querySelector("input");
  const empInput = { target: { value: "EMP-123" } };

  const empPasswordTextField = getByTestId("password").querySelector("input");
  const passInput = { target: { value: "admin123" } };

  fireEvent.change(empIdTextField, empInput);
  fireEvent.change(empPasswordTextField, passInput);
  fireEvent.submit(getByTestId("submit-form"));

  expect(location.pathname).toBe("/");
});
