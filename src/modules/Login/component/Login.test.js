import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
import DisplayLogin from "./DisplayLogin";

afterEach(cleanup);

it('login user', () => {
    const {getByTestId} = render(<DisplayLogin />);

    fireEvent.submit(getByTestId('submit-form'))

    expect(getByTestId('username')).toHaveTextContent("");
})