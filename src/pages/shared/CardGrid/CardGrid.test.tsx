import React from "react";
import { render, screen } from "@testing-library/react";
import CardGrid from "./CardGrid";

describe("CardGrid", () => {
    const mockCards = [
        { id: 1, name: "Card 1" },
        { id: 2, name: "Card 2" },
    ];
    const mockImages = ["image1.jpg", "image2.jpg"];
    const renderContent = (card: typeof mockCards[0]) => <div>{card.name}</div>;

    it("renders a grid of cards", () => {
        render(<CardGrid cards={mockCards} images={mockImages} renderContent={renderContent} />);

        expect(screen.getByText("Card 2")).toBeInTheDocument();
    });
});
