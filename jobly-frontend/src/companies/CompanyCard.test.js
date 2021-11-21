import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
    const company = {
        name: "test",
        description: "test company",
        logoUrl: "https://test.com",
        handle: "test",
        numEmployees: 5,
    }

    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard company={company} />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});