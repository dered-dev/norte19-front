import React from "react";
import { render, screen } from "@testing-library/react"
import InvestorHomeSections from "./InvestorHomeSections"
import { InvestorsHomeMock } from "../../../mocks/InvestorsHomeMock";

describe("InvestorHomeSections", () => {

    it("should render a list of InvestorHomeLastReports components", () => {
        render(<InvestorHomeSections data={InvestorsHomeMock.data.attributes.sections} />)

        expect(screen.getAllByLabelText("section-investor-home")).toHaveLength(2)
    })
})
