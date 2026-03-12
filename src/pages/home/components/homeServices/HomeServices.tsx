import React from 'react'
import { Fade } from 'react-awesome-reveal'
import classnames from 'classnames'

// ** Styles
import "./HomeServices.css"

// ** Interfaces
import { Aboutus } from '../../interfaces/Home';

// ** Custom components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';
import SpecialIcons from '../../../shared/SpecialIcons/SpecialIcons';

/**
 * A React functional component that renders a section of the webpage showcasing the services provided by Norte 19.
 * 
 * @return {React.JSX.Element} A JSX element representing the services section.
 */
const HomeServices = ({ data }: { data: Aboutus }): React.JSX.Element => {

    /**
     * A function that renders a list of service cards based on the provided cardsServices data.
     * 
     * @return {JSX.Element[]} An array of JSX elements representing the service cards.
     */
    const renderCardsServices = (): React.JSX.Element[] => {
        return data.home_about_us_section_2.cards.map((card, index) => {
            return (
                <div
                    key={card.subtitle}
                    className={classnames("col-lg-6 col-10", {
                        'card-service-space': index % 2 !== 0
                    })}
                >
                    <Fade direction="up" triggerOnce>
                        <div className="service-item position-relative">
                            <SpecialIcons iconName={card.icon} />
                            <h4 className="title">{card.subtitle}</h4>
                        </div>
                    </Fade>
                </div>
            );
        });
    };

    return (
        <section className="services section light-background">
            <div className="container">
                <div className="row gy-4">
                    <div
                        className="col-lg-6 content services-margin"
                    >
                        <Fade direction="up" triggerOnce>
                            <RenderParagraphs data={data.home_about_us_section_2.description} />
                        </Fade>

                    </div>

                    <div className="col-lg-6">
                        <div className="row cards-services">
                            {renderCardsServices()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices