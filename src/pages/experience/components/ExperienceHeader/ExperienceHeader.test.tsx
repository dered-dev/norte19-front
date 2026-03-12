import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceHeader from "./ExperienceHeader";
import { vi } from "vitest";
import { ExperienceMock } from "../../mocks/ExperienceMock";

// Mock the components that ExperienceHeader depends on
vi.mock("../../../shared/BreadCrumbHeader/BreadCrumbHeader", () => ({
    default: vi.fn(() => <div data-testid="breadcrumb-header">Breadcrumb</div>),
}));

vi.mock("../ExperienceSuccessStories/ExperienceSuccessStories", () => ({
    default: vi.fn(() => <div data-testid="experience-success-stories">Success Stories</div>),
}));

describe("ExperienceHeader Component", () => {

    const mock = ExperienceMock

    test("renders BreadCrumbHeader and ExperienceSuccessStories components", () => {
        render(<ExperienceHeader
            banner={mock.data.attributes.banner}
            success={mock.data.attributes.success_stories}
            successTitle={mock.data.attributes.success_stories_title}
        />);

        // Verify BreadCrumbHeader is rendered with the correct props
        const breadcrumbHeader = screen.getByTestId("breadcrumb-header");
        expect(breadcrumbHeader).toBeInTheDocument();

        // Verify ExperienceSuccessStories is rendered
        const experienceSuccessStories = screen.getByTestId("experience-success-stories");
        expect(experienceSuccessStories).toBeInTheDocument();
    });
});
