import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceClients from "./ExperienceClients";
import { ExperienceMock } from "../../mocks/ExperienceMock";

describe("ExperienceClients Component", () => {

    const mock = ExperienceMock

    test("renders the client image within the SwiperSlide", () => {
        render(<ExperienceClients brands={mock.data.attributes.brands_carrousell} />);

        // Check for client image in the slide
        const clientImage = screen.getByAltText("Brand");
        expect(clientImage).toBeInTheDocument();
    });
});
