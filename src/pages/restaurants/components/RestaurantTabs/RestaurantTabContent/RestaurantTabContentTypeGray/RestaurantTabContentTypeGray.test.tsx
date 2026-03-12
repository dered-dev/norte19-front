import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantTabContentTypeGray from "./RestaurantTabContentTypeGray";
import { RestaurantsPagesMock } from "../../../../mocks/RestaurantsPagesMock";

describe("RestaurantTabContentTypeGray", () => {
    const page = RestaurantsPagesMock.data[0].attributes.page[0];
    it("renders the title", () => {
        render(<RestaurantTabContentTypeGray page={page} />);

        const titleElement = screen.getAllByText(/Café Plus/i);
        expect(titleElement).toBeTruthy();
    });
});
