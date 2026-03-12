import React from "react";
import { Fade } from 'react-awesome-reveal'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Interfaces
import { Card, Section } from "../../interfaces/Technology";

// ** Components
import CardGrid from "../../../shared/CardGrid/CardGrid";
import SwiperCardGrid from "../../../shared/SwiperCardGrid/SwiperCardGrid";
import SpecialIcons from "../../../shared/SpecialIcons/SpecialIcons";

/**
 * A React functional component that renders a section of the webpage with a title and a list of cards.
 * Each card represents a technology used by Norte 19 and has a title and a description.
 * The component renders a desktop version and a mobile version.
 * The mobile version uses a swiper to display the cards.
 * @param {{ section: Section }} props - The props to render the component with. The section is an object that contains the data of the section.
 * @returns {React.JSX.Element} - The JSX element representing the component.
 */
const TechnologyCards = ({ section }: { section: Section }): React.JSX.Element => {

    /**
     * A function that renders a paragraph with the title of a card.
     * The title is rendered with a bold tag.
     * The function is used to render the content of each card in the TechnologyCards component.
     * @param {Card} card - The data for the card to be rendered.
     * @returns {React.JSX.Element} - The JSX element representing the rendered paragraph.
     */
    const renderContent = (card: Card): React.JSX.Element => (
        <p className="color-gray mt-30">
            <b>{card.title}</b>
        </p>
    );

    return (
        <div className="services section light-background">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 content services-margin">
                        <Fade direction="up" triggerOnce>
                            <h2 className="mb-30">
                                <b>{section.title}</b>
                            </h2>
                            <div className="col-md-8 web-element-2">
                                <Fade direction="up" triggerOnce>
                                    <div className="service-item position-relative">
                                        <SpecialIcons iconName={section.cards[0].icon} />
                                        <p className="color-gray mt-30">
                                            <b>{section.cards[0].title}</b>
                                        </p>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>

                    <CardGrid
                        cards={section.cards}
                        renderContent={renderContent} />
                </div>
            </div>


            <SwiperCardGrid
                cards={section.cards}
                renderContent={renderContent}
            />

        </div>
    )
}

export default TechnologyCards