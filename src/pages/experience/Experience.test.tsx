import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "./Experience";
import { vi } from "vitest";
import { ExperienceMock } from "./mocks/ExperienceMock";

// Mock subcomponents
vi.mock("./components/ExperienceHeader/ExperienceHeader", () => ({
    default: () => <div data-testid="experience-header">Experience Header</div>,
}));

vi.mock("./components/ExperienceProjects/ExperienceProjects", () => ({
    default: () => <div data-testid="experience-projects">Experience Projects</div>,
}));

vi.mock("./components/ExperienceClients/ExperienceClients", () => ({
    default: () => <div data-testid="experience-clients">Experience Clients</div>,
}));

vi.mock('../../hooks/useFetchData/useFetchData', () => {
    return {
        useFetchData: () => ({
            data: ExperienceMock,
            loading: true
        })
    };
});

describe("Experience Component", () => {
    test("renders Experience component with subcomponents", () => {
        render(<Experience />);

        // Check if ExperienceHeader is rendered
        const experienceHeader = screen.getByTestId("experience-header");
        expect(experienceHeader).toBeInTheDocument();
        expect(experienceHeader).toHaveTextContent("Experience Header");

        // Check if ExperienceProjects is rendered
        const experienceProjects = screen.getByTestId("experience-projects");
        expect(experienceProjects).toBeInTheDocument();
        expect(experienceProjects).toHaveTextContent("Experience Projects");

        // Check if ExperienceClients is rendered
        const experienceClients = screen.getByTestId("experience-clients");
        expect(experienceClients).toBeInTheDocument();
        expect(experienceClients).toHaveTextContent("Experience Clients");
    });
});
