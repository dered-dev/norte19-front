import React from "react";
import { render, screen } from "@testing-library/react";
import SwiperCardGrid from "./SwiperCardGrid";


describe("SwiperCardGrid", () => {
    const mockCards = [
        { id: 1, name: "Card 1" },
        { id: 2, name: "Card 2" },
    ];
    const mockImages = ["image1.jpg", "image2.jpg"];
    const renderContent = (card: typeof mockCards[0]) => <div>{card.name}</div>;

    it("renders a swiper slider of cards", () => {
        render(<SwiperCardGrid cards={mockCards} images={mockImages} renderContent={renderContent} />);

        // Verify that each card content is displayed correctly
        mockCards.forEach((card) => {
            expect(screen.getByText(card.name)).toBeInTheDocument();
        });
    });

});
