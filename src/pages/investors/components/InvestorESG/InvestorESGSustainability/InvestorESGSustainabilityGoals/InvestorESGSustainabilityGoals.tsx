import React from 'react'
import { Fade } from 'react-awesome-reveal'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Interfaces
import { Goals } from '../../../../interfaces/InvestorsESGSustainability'

// ** Components
import RenderParagraphs from '../../../../../../components/RenderParagraphs/RenderParagraphs'
import { renderContent } from '../InvestorESGSustainabilityAchievements/InvestorESGSustainabilityAchievements'
import CardGrid from '../../../../../shared/CardGrid/CardGrid'
import SwiperCardGrid from '../../../../../shared/SwiperCardGrid/SwiperCardGrid'
import SpecialIcons from '../../../../../shared/SpecialIcons/SpecialIcons'

/**
 * Component that renders the goals section of the sustainability page.
 * 
 * @param {{ section: Goals }} props - The props to render the component with. The section is an object that contains the data of the goals section.
 * @returns {React.JSX.Element} - The JSX element representing the component.
 */
const InvestorESGSustainabilityGoals = ({ section }: { section: Goals }): React.JSX.Element => {

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
                                        <SpecialIcons iconName={section.goal_card[0].icon} />
                                        <div className="color-gray mt-30">
                                            <RenderParagraphs data={section.goal_card[0].description} />
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>

                    <CardGrid
                        cards={section.goal_card}
                        renderContent={renderContent} />
                </div>
            </div>


            <SwiperCardGrid
                cards={section.goal_card}
                renderContent={renderContent}
            />

        </div>
    )
}

export default InvestorESGSustainabilityGoals