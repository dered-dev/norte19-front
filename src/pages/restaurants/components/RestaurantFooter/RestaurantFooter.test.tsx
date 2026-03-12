import React from "react";
import { render } from "@testing-library/react";
import RestaurantFooter from "./RestaurantFooter"; // Adjust the import path as needed
import { RestaurantsMock } from "../../mocks/RestaurantsMock";
import { Footer } from "../../interfaces/Restaurants"; // Adjust if necessary


describe("RestaurantFooter", () => {
    const footerData: Footer = RestaurantsMock.data.attributes.footer;

    it("renders the footer title and description", () => {
        const { getByText } = render(<RestaurantFooter data={footerData} />);

        // Check if the title is rendered correctly
        expect(getByText(footerData.title)).toBeInTheDocument();

    });
});
