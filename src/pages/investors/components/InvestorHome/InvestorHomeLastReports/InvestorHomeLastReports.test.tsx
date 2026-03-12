import React from "react";
import { render, screen } from "@testing-library/react";
import InvestorHomeLastReports from "./InvestorHomeLastReports"; // Adjust the path as needed
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { InvestorsHomeMock } from "../../../mocks/InvestorsHomeMock";

describe("InvestorHomeLastReports Component", () => {
    it("renders the component without crashing", () => {
        render(
            <MemoryRouter>
                <InvestorHomeLastReports data={InvestorsHomeMock.data.attributes.sections[0]} index={0} />
            </MemoryRouter>
        );
        expect(screen.getByText(/Últimos Reportes/i)).toBeInTheDocument();
    });

    it("renders the component without crashing show links", () => {
        render(
            <MemoryRouter>
                <InvestorHomeLastReports data={InvestorsHomeMock.data.attributes.sections[1]} index={1} />
            </MemoryRouter>
        );
        expect(screen.getByText(/Información de la Acción/i)).toBeInTheDocument();
    });

});
