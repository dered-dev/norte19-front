import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Interfaces
import { Ourservices } from '../../interfaces/Home';

// ** Custom components
import SpecialIcons from '../../../shared/SpecialIcons/SpecialIcons';

/**
 * A React functional component that renders a section of the webpage showcasing the more services provided by Norte 19.
 * 
 * @return {React.JSX.Element} A JSX element representing the more services section.
 */
const HomeMoreServices = ({ data }: { data: Ourservices }): React.JSX.Element => {

    /**
     * A function that renders a list of service cards based on the provided cardsMoreServices data.
     * 
     * @return {React.JSX.Element[]} An array of JSX elements representing the service cards.
     */
    const renderCardsMoreServices = (): React.JSX.Element[] => {
        return data.cards.map((card) => {
            return (
                <div className="col-md-4 col-10" key={card.title}>
                    <Fade direction="up" triggerOnce>
                        <div className="service-item position-relative h-100">
                            <SpecialIcons iconName={card.icon} />
                            <div>
                                <h4 className="title">{card.title}</h4>
                                <p className="description">{card.description}</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            )
        })
    }

    return (
        <section className="services section dark-background">

            <div className="container section-title services-margin">
                <Fade direction="up" triggerOnce>
                    <h2 className="color-white">{data.title}</h2>
                    <p className="color-white">{data.subtitle}</p>
                </Fade>
            </div>

            <div className="container mt-30">

                <div className="row gy-4 cards-services">
                    {renderCardsMoreServices()}
                </div>

            </div>

        </section>
    )

}

export default HomeMoreServices