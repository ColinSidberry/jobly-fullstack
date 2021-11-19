import React from "react";
import { render } from "@testing-library/react";
import FormField from "./FormField";

it("matches snapshot", function () {
  const { asFragment } = render(<FormField />);
  expect(asFragment()).toMatchSnapshot();
});
