import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import LoggedOutNav from "./LoggedOutNav";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider currUser={null}>
          <LoggedOutNav />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});