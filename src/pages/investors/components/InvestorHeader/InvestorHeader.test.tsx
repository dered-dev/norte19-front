import { render, screen, fireEvent } from "@testing-library/react";
import InvestorHeader from "./InvestorHeader"; // Adjust the path as necessary
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import React from "react";
import { InvestorsHeaderMock } from "../../mocks/InvestorsHeaderMock";

vi.mock('../../../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: InvestorsHeaderMock,
            loading: true
        })
    };
});

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => {
            if (key === 'home') {
                return 'Inicio';
            }
            return key;
        },
    }),
}));



describe("InvestorHeader Component", () => {
    const mockToggleTab = vi.fn();
    const mockSetTabs = vi.fn();

    beforeEach(() => {
        render(
            <BrowserRouter>
                <InvestorHeader active="1" toggleTab={mockToggleTab} title="Test" setTabs={mockSetTabs} />
            </BrowserRouter>
        );
        render(
            <BrowserRouter>
                <InvestorHeader active="48" toggleTab={mockToggleTab} title="" setTabs={mockSetTabs} />
            </BrowserRouter>
        );
    });

    it("renders the component without crashing", () => {
        expect(screen.getAllByText(/Inicio/i)).toBeTruthy();
    });

    it("click on tab", () => {
        const secondTab = screen.getAllByLabelText("investor-tab");
        fireEvent.click(secondTab[1]);
        expect(mockToggleTab).toHaveBeenCalled();
    });
});
