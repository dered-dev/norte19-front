import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceSuccessStories from "./ExperienceSuccessStories";
import { ExperienceMock } from "../../mocks/ExperienceMock";


describe("ExperienceSuccessStories Component", () => {

    const mock = ExperienceMock

    test("renders ExperienceSuccessStories component with title", () => {
        render(<ExperienceSuccessStories
            success={mock.data.attributes.success_stories}
            successTitle={mock.data.attributes.success_stories_title}
        />);

        // Check if the title "Casos de éxito" is rendered
        const titleElement = screen.getByRole("heading", { name: /Casos de éxito/i });
        expect(titleElement).toBeInTheDocument();
    });

    test("renders Swiper with SwiperSlide and testimonial content", () => {
        render(<ExperienceSuccessStories
            success={mock.data.attributes.success_stories}
            successTitle={mock.data.attributes.success_stories_title}
        />);


        // Check if testimonial name and company are rendered
        const testimonialName = screen.getByText(mock.data.attributes.success_stories.experiences[0].name);
        expect(testimonialName).toBeInTheDocument();
    });
});
