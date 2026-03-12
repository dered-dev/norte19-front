import { render, screen } from "@testing-library/react";
import InvestorHomeMoreInfo from "./InvestorHomeMoreInfo";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { InvestorsHomeMock } from "../../../mocks/InvestorsHomeMock";

describe("InvestorHomeMoreInfo Component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <InvestorHomeMoreInfo data={InvestorsHomeMock.data.attributes.in_numbers} />
            </MemoryRouter>
        );
    });

    it("renders the component without crashing", () => {
        expect(screen.getByText(/¿Necesitas más información\?/i)).toBeInTheDocument();
    });

});
