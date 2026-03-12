import React from "react";
import { render, screen } from "@testing-library/react"
import InvestorUsSections from "./InvestorUsSections"
import { InvestorsUsMock } from "../../../mocks/InvestorsUsMock";

describe("InvestorUsSections Component", () => {


    it("renders the correct number of sections", () => {
        render(<InvestorUsSections data={InvestorsUsMock.data.attributes.history} />)

        // Check if the correct number of sections is rendered
        const sections = screen.getAllByLabelText("section-investor-us")
        expect(sections).toHaveLength(InvestorsUsMock.data.attributes.history.section.length)
    })

})
