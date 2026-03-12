import React from "react"
import { Zoom } from "react-awesome-reveal"

// ** Interfaces
import { Factsheet } from "../../../interfaces/InvestorsUs"

/**
 * A functional component that renders a section of the Investor Us page.
 * The component renders a section with a title and a button to download a document.
 * The component uses the Zoom component from react-awesome-reveal to animate the section.
 * @param {{ data: Factsheet }} props - The data for the component.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorUsKnowMore = ({ data }: { data: Factsheet }): React.JSX.Element => {

    return (

        <div className="call-to-action our-services section dark-background section-inversionista">
            <div className="container">
                <Zoom triggerOnce>
                    <div className="row">
                        <div className="col-xl-10">
                            <div>
                                <h3>{data.title}</h3>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div>
                                <a href={data.document?.data?.attributes?.url} target="_blank" className="download-btn" rel="noreferrer">
                                    <span>{data.button_text}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div >

    )
}

export default InvestorUsKnowMore