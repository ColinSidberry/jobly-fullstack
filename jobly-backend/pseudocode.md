App-C
    Nav-C
    Routes-C
        Jobs (full list of jobs)-C, route to Jobs
            state: allJobsList, isLoaded, searchTerm
        Companies (full list)-C,Route to Companies
            state: companiesList, isLoaded, searchTerm
            Form-C
            CompanyCard-C
            -state: companyJobsList, isLoaded
                JobCardList-C
                -props: company
                        JobCard-C
                        -props: job
        SingleCompany-R to CompanyCard


        (SingleJob?)

