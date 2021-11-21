import React from "react";
import { render } from "@testing-library/react";
import CompanyList from "./CompanyList";
import { MemoryRouter } from "react-router-dom";

it("snapshot", function () {
    const companyList = [
        {
            name: "test1",
            description: "test1 company",
            logoUrl: "https://test1.com",
            handle: "test1",
            numEmployees: 5,
        }, 
        {
            name: "test2",
            description: "test2 company",
            logoUrl: "https://test2.com",
            handle: "test2",
            numEmployees: 5,
        }
    ]

    const { asFragment } = render(
        <MemoryRouter>
            <CompanyList companyList={companyList} />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});