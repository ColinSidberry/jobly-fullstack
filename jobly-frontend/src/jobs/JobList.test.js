import React from "react";
import { render } from "@testing-library/react";
import JobList from "./JobList";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
    const jobList = [
        {
            title: "best job",
            salary: 180000, 
            equity: 200, 
            companyHandle: "test-company",
            companyName: "test company",
        }, 
        {
            title: "second best job",
            salary: 179999, 
            equity: 200, 
            companyHandle: "test-company",
            companyName: "test company",
        }
    ]

    const { asFragment } = render(
        <MemoryRouter>
            <JobList jobList={jobList} />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});