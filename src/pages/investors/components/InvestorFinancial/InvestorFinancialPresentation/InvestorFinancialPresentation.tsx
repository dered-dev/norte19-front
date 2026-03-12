import React from 'react'
import { Zoom } from 'react-awesome-reveal'

// ** Interfaces
import { Corporatepresentation } from '../../../interfaces/InvestorsFinancial'

/**
 * A functional component that renders the corporate presentation section of the Investor Financial page.
 * The component renders a section with a title, a subtitle, and a link to download a document.
 * The component uses the Zoom animation effect from react-awesome-reveal.
 * @param {Corporatepresentation} data - The data for the corporate presentation section.
 * @returns {React.JSX.Element} The JSX element representing the corporate presentation section.
 */
const InvestorFinancialPresentation = ({ data }: { data: Corporatepresentation }): React.JSX.Element => {

    return (
        <div className="call-to-action our-services section dark-background section-inversionista mt-5">
            <div className="container">
                <Zoom triggerOnce>
                    <div
                        className="row"
                        style={{ alignItems: 'center' }}
                    >
                        <div className="col-xl-10">
                            <div>
                                <p>{data.title}</p>
                                <h3>{data.subtitle}</h3>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div>
                                <a
                                    href={data.file?.data?.attributes?.url}
                                    className="download-btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>{data.button_text}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Zoom>

            </div>
        </div>
    )
}

export default InvestorFinancialPresentation