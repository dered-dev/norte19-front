import React from "react";
import { render, screen } from "@testing-library/react";
import LeadersBoardSections from "./LeadersBoardSections";
import { vi } from "vitest";
import { LeadersMock } from "../../mocks/Leaders";

vi.mock("./LeadersCulture/LeadersCulture", () => ({
    default: vi.fn(() => <div data-testid="LeadersCulture">LeadersCulture Component</div>),
}));

vi.mock("./LeadersMaxims/LeadersMaxims", () => ({
    default: vi.fn(() => <div data-testid="LeadersMaxims">LeadersMaxims Component</div>),
}));

vi.mock("./LeadersMission/LeadersMission", () => ({
    default: vi.fn(() => <div data-testid="LeadersMission">LeadersMission Component</div>),
}));

describe("LeadersBoardSections Component", () => {


    it("renders LeadersCulture component when background color is light_gray and image data is null", () => {
        render(<LeadersBoardSections data={LeadersMock.data.attributes.sections} />);
        expect(screen.getAllByTestId("LeadersCulture")).toBeTruthy();
    });

    it("renders LeadersMaxims component when background color is light_gray and image data is not null", () => {
        render(<LeadersBoardSections data={LeadersMock.data.attributes.sections} />);
        expect(screen.getAllByTestId("LeadersMaxims")).toBeTruthy();
    });

    it("renders LeadersMission component when background color is not light_gray", () => {
        render(<LeadersBoardSections data={LeadersMock.data.attributes.sections} />);
        expect(screen.getAllByTestId("LeadersMission")).toBeTruthy();
    });
});
