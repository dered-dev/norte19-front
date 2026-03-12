import React from "react"
import { Fade } from 'react-awesome-reveal'
import CountUp from 'react-countup';

// ** Interfaces
import { Innumbers } from "../../../interfaces/InvestorsHome";

/**
 * A functional component that renders a section of the Investor Home page.
 * The component renders a section with a title and a list of cards with counters.
 * The component uses the Fade component from react-awesome-reveal to animate
 * the title and the cards.
 * The component uses the CountUp component to animate the counters.
 * @param {Innumbers} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorHomeNumbers = ({ data }: { data: Innumbers }): React.JSX.Element => {

    const renderCounts = (): React.JSX.Element[] => {
        return data.numbers.map((card, index) => (

            <div key={index} className="col-lg-3 col-md-3 col-sm-3">
                <div className="stats-item text-left w-100 h-100">
                    <p>{card.subtitle}</p>
                    <CountUp
                        end={card.amount}
                        duration={3}
                    />
                </div>
            </div>
        ))
    }

    return (
        <div className="about responsive-margin pad-60">
            <div className="container" data-aos="fade-up">
                <h2 className="title-border">
                    <b>{data.title}</b>
                </h2>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Fade direction="up" triggerOnce>
                            <div id="stats" className="stats inversion-stats">
                                <div className="container">
                                    <div className="row gy-4">
                                        {renderCounts()}
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorHomeNumbers