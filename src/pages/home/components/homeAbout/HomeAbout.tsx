import React from 'react'

// ** Third library imports
import { Fade } from "react-awesome-reveal"
import CountUp from 'react-countup';

// ** Interfaces
import { Aboutus } from '../../interfaces/Home';

// ** Custom components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';

/**
 * A functional component that renders the About Us section of the Home page.
 * The component renders a section with a title, a description, and a list of
 * cards with counters.
 * The component uses the Fade component from react-awesome-reveal to animate
 * the title and the cards.
 * The component uses the CountUp component to animate the counters.
 * @param {Aboutus} data - The data for the About Us section.
 * @returns {React.JSX.Element} The JSX element representing the About Us section.
 */
const HomeAbout = ({ data }: { data: Aboutus }): React.JSX.Element => {

    /**
     * A function that renders a list of cards with counters based on the provided
     * cards data.
     * The function maps over the cards array and renders a card with a counter
     * and a subtitle for each card.
     * The function uses the CountUp component to animate the counters.
     * @returns {React.JSX.Element[]} An array of JSX elements representing the cards.
     */
    const renderCounts = (): React.JSX.Element[] => {
        return data.Home_about_us_section_1.cards.map((card, index) => (

            <div key={index} className="col-lg-4 col-md-3 col-sm-3">
                <div className="stats-item text-left w-100 h-100">
                    <CountUp
                        end={card.amount}
                        duration={1}
                    />
                    <p>{card.subtitle}</p>
                </div>
            </div>
        ))
    }

    return (
        <section id="home-about" className="about section responsive-margin">

            <Fade direction="up" triggerOnce>
                <div className="container section-title">
                    <h2>{data.home_about_us_title}</h2>
                </div>
            </Fade>


            <div className="container">

                <div className="row">

                    <div className="col-lg-6">
                        <Fade direction="up" triggerOnce>
                            <div id="stats" className="stats">

                                <div className="container">

                                    <div className="row gy-4">
                                        {renderCounts()}
                                    </div>

                                </div>

                            </div>
                        </Fade>


                    </div>

                    <div className="col-lg-6 content">
                        <Fade direction="up" triggerOnce>
                            <RenderParagraphs data={data.Home_about_us_section_1.description} />
                        </Fade>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default HomeAbout