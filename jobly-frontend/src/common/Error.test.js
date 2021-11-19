import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

it("matches snapshot", function () {
  const { asFragment } = render(<Error />);
  expect(asFragment()).toMatchSnapshot();
});
