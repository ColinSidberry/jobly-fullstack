import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
    const job = {
        title: "best job",
        salary: 180000, 
        equity: 200, 
        companyHandle: "test-company",
        companyName: "test company",
    }

    const { asFragment } = render(
        <MemoryRouter>
            <JobCard job={job} />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});