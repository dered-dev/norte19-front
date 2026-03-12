import InvestorUsSolutions from "./InvestorUsSolutions";
import React from "react";
import { render, screen } from "@testing-library/react";
import { InvestorsUsMock } from "../../../mocks/InvestorsUsMock";

describe("InvestorUsSolutions Component", () => {
    beforeEach(() => {
        render(<InvestorUsSolutions data={InvestorsUsMock.data.attributes.history.section[0]} />);
    });

    it("renders the component without crashing", () => {
        expect(screen.getAllByText(/Soluciones Integrales/i)).toBeTruthy();
    });

});
