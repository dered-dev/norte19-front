import React from "react"
import { Fade } from 'react-awesome-reveal'
import { Link } from "react-router-dom"

// ** Interfaces
import { Innumbers } from "../../../interfaces/InvestorsHome"
import moreInfoBack from "/assets/images/all/back__moreinfo.png"

/**
 * A functional component that renders a section of the Investor Home page.
 * The component renders a section with an image and a contact us section.
 * The component uses the Fade component from react-awesome-reveal to animate
 * the image and the contact us section.
 * @param {Innumbers} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorHomeMoreInfo = ({ data }: { data: Innumbers }): React.JSX.Element => {
    // TODO: Add a background image {{ backgroundImage: `url(${data.banner?.data?.attributes?.url})` }}
    return (
        
        <div className="about block__more__info" 
                style={{ backgroundImage: `url(${moreInfoBack})` }}>
            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-lg-6 nomargin">
                        <Fade direction="up" triggerOnce>
                            <img
                                src={data.banner?.data?.attributes?.url}
                                className="img-fluid"
                                alt="contacto"
                            />
                        </Fade>
                    </div> */}

                    <div className="col-lg-12 content margin-section text-center mb-30">
                        <Fade direction="up" triggerOnce>
                            <h2 className="mb-5 more__info__title">
                                {data.contact_us.title}
                            </h2>
                            <Link to="/contact" className="read-more">
                                <span>{data.contact_us?.button_text}</span>
                            </Link>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorHomeMoreInfo