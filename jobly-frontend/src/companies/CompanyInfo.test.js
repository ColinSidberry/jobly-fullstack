import React from "react";
import { render } from "@testing-library/react";
import CompanyInfo from "./CompanyInfo";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyInfo />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});