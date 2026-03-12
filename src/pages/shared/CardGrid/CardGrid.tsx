import React from "react";
import RenderCardWithSwipper from "../RenderCardWithSwipper/RenderCardWithSwipper";

/**
 * A reusable component for rendering a grid of cards.
 * 
 * @template T - The type of the card data.
 * @param {{ cards: T[], renderContent: (card: T) => React.JSX.Element }} props - The props containing the card data, images, and render function.
 * @returns {React.JSX.Element} - The JSX element representing the card grid.
 */
const CardGrid = <T extends { id: string | number, icon: string }>({
    cards,
    renderContent,
}: {
    cards: T[];
    renderContent: (card: T) => React.JSX.Element;
}): React.JSX.Element => (
    <div className="col-md-7 web-element-2">
        <div className="row">
            {cards.map((card, index) => (
                <RenderCardWithSwipper
                    key={card.id}
                    card={card}
                    index={index}
                    swipper={false}
                    iconName={card.icon}
                    renderContent={renderContent}
                />
            ))}
        </div>
    </div>
);

export default CardGrid;
