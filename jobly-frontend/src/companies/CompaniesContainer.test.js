import React from "react";
import { render } from "@testing-library/react";
import CompaniesContainer from "./CompaniesContainer";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <CompaniesContainer />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});