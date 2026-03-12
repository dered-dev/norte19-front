import { render, screen } from "@testing-library/react";
import InvestorHomeHeader from "./InvestorHomeHeader"; // Adjust the path as necessary
import React from "react";
import { InvestorsHeaderMock } from "../../../mocks/InvestorsHeaderMock";

describe("InvestorHomeHeader Component", () => {
    beforeEach(() => {
        render(<InvestorHomeHeader data={InvestorsHeaderMock.data.attributes.header} title="Kit Para Inversionistas" />);
    });

    it("renders the component without crashing", () => {
        expect(screen.getByText(/NORTE 19/i)).toBeInTheDocument();
        expect(screen.getByText(/Kit Para/i)).toBeInTheDocument();
        expect(screen.getByText(/Inversionistas/i)).toBeInTheDocument();
    });

    it("renders the download links", () => {
        const invitationLink = screen.getByText(/Invitación Llamada 2T24/i);
        expect(invitationLink).toBeInTheDocument();
    });

});
