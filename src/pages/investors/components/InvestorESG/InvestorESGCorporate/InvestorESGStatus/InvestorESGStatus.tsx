import React from 'react'
import { Zoom } from 'react-awesome-reveal'

// ** Interfaces
import { Socialstatues } from '../../../../interfaces/InvestorsESGCorporate'

/**
 * A functional component that renders the ESG status section.
 * The component displays a title, subtitle, and a download button link.
 * The component uses the Zoom animation effect from react-awesome-reveal.
 * 
 * @param {{ data: Socialstatues }} props - The data for the ESG status section.
 * @returns {React.JSX.Element} The JSX element representing the ESG status section.
 */
const InvestorESGStatus = ({ data }: { data: Socialstatues }): React.JSX.Element => {

    return (
        <div className="section dark-background section-inversionista">
            <div className="container">
                <div className="row justify-content-center">
                    <Zoom triggerOnce>
                        <div className="col-xl-12 text-center">
                            <div>
                                <p className="color-white">{data.title}</p>
                                <h3 className="color-white">{data.subtitle}</h3>
                            </div>
                            <div className="mt-30">
                                <a
                                    href={data.file.data?.attributes?.url}
                                    className="download-btn"
                                    target="_blank"
                                    rel="noreferrer">
                                    <span>{data.button_text}</span>
                                </a>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default InvestorESGStatus