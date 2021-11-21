import React from "react";
import { render } from "@testing-library/react";
import JobsContainer from "./JobsContainer";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <JobsContainer />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});