import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Interfaces
import { History } from '../../../interfaces/InvestorsUs'

// ** Components
import RenderParagraphs from '../../../../../components/RenderParagraphs/RenderParagraphs'

/**
 * A functional component that renders the history section of the Investor Us page.
 * The component renders a section with a title, a description, and an image.
 * The component uses the Fade component from react-awesome-reveal to animate
 * the title.
 * @param {History} data - The data for the history section.
 * @returns {React.JSX.Element} The JSX element representing the history section.
 */
const InvestorUsHistory = ({ data }: { data: History }): React.JSX.Element => {

    return (
        <div className="about responsive-margin pad-60 white-background title-history">
            <div className="container margin-section">
                <Fade direction="up" triggerOnce>
                    <h2 className="title-border">
                        <b>{data.title}</b>
                    </h2>
                </Fade>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 order-md-2 margin-section">
                        <div className='mt-30'>
                            <RenderParagraphs data={data.text} />
                        </div>

                    </div>

                    <div className="col-lg-12 margin-section order-md-1">
                        {
                            data.banner?.data?.attributes?.url && (
                                <img
                                    src={data.banner?.data?.attributes?.url}
                                    className="img-fluid w-100"
                                    alt="historia"
                                />
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorUsHistory