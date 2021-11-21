import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import LoggedInNav from "./LoggedInNav";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <LoggedInNav />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});