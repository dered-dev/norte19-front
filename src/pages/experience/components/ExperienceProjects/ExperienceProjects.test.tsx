import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import ExperienceProjects from "./ExperienceProjects";
import { vi } from "vitest";
import { ExperienceMock } from "../../mocks/ExperienceMock";

// Mock Swiper modules and styles
vi.mock("swiper/react", () => ({
    Swiper: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper">{children}</div>,
    SwiperSlide: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper-slide">{children}</div>,
}));

describe("ExperienceProjects Component", () => {
    const mock = ExperienceMock;

    test("renders ExperienceProjects component with title", () => {
        render(<ExperienceProjects
            projects={mock.data.attributes.proyects}
            projectsTitle={mock.data.attributes.proyects_title}
        />);

        // Check if the section title is rendered
        const titleElement = screen.getByRole("heading", { name: /Proyectos/i });
        expect(titleElement).toBeInTheDocument();
    });

    test("renders Swiper with SwiperSlide and project content", () => {
        render(<ExperienceProjects
            projects={mock.data.attributes.proyects}
            projectsTitle={mock.data.attributes.proyects_title}
        />);

        // Verify Swiper is rendered
        const swiper = screen.getAllByTestId("swiper");
        expect(swiper[0]).toBeInTheDocument();

        // Verify at least one SwiperSlide is rendered
        const swiperSlide = screen.getAllByTestId("swiper-slide");
        expect(swiperSlide[0]).toBeInTheDocument();

        // Check if project description is rendered
        const projectDescription = screen.getByText(mock.data.attributes.proyects[0].proyect);
        expect(projectDescription).toBeInTheDocument();

    });

    test("renders ExperienceProjects open modal", () => {
        render(<ExperienceProjects
            projects={mock.data.attributes.proyects}
            projectsTitle={mock.data.attributes.proyects_title}
        />);

        const card = screen.getAllByLabelText("project-card");
        act(() => {
            fireEvent.click(card[0]);
        })

        // Check if the modal is rendered
        const closeButton = screen.getByRole('button', { name: /close/i })
        expect(closeButton).toBeInTheDocument();
    });
});
