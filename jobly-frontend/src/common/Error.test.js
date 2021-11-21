import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

it("matches snapshot", function () {
  const errors = ["error1", "error2"];
  const { asFragment } = render(<Error errors={errors} />);
  expect(asFragment()).toMatchSnapshot();
});
