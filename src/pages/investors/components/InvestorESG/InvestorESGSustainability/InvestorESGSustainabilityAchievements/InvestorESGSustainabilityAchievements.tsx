import React from 'react'
import { Fade } from 'react-awesome-reveal'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Interfaces
import { Achievements, Goalcard } from '../../../../interfaces/InvestorsESGSustainability'

// ** Components
import RenderParagraphs from '../../../../../../components/RenderParagraphs/RenderParagraphs'
import CardGrid from '../../../../../shared/CardGrid/CardGrid'
import SwiperCardGrid from '../../../../../shared/SwiperCardGrid/SwiperCardGrid'
import SpecialIcons from '../../../../../shared/SpecialIcons/SpecialIcons'

/**
 * Renders the content of a card with its description.
 * 
 * The function uses the RenderParagraphs component to render the description
 * of the given card. The description is wrapped in a div with styling.
 * 
 * @param {Goalcard} card - The card containing the description to be rendered.
 * @returns {React.JSX.Element} - The JSX element representing the card content.
 */
export const renderContent = (card: Goalcard): React.JSX.Element => (
    <div className="color-gray mt-30">
        <RenderParagraphs data={card.description} />
    </div>
);

/**
 * A functional component that renders the achievements section of the Investor ESG Sustainability page.
 * The component renders a section with a title, an image, a description, and a list of
 * cards. Each card is rendered by the renderCards function. The first card is also rendered
 * with an image, and the rest of the cards are rendered in a row with the col-md-7 class.
 * The component also renders a swiper with the same cards in a responsive design.
 * @param {{ section: Achievements }} props - The props to render the component with. The section is an object that contains the data of the achievements section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorESGSustainabilityAchievements = ({ section }: { section: Achievements }): React.JSX.Element => {

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
                                        <SpecialIcons iconName={section.achievements_cards[0].icon} />
                                        <div className="color-gray mt-30">
                                            <RenderParagraphs data={section.achievements_cards[0].description} />
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>

                    <CardGrid
                        cards={section.achievements_cards}
                        renderContent={renderContent} />
                </div>
            </div>


            <SwiperCardGrid
                cards={section.achievements_cards}
                renderContent={renderContent}
            />

        </div>
    )
}

export default InvestorESGSustainabilityAchievements