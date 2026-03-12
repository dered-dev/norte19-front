import React from "react"
import { Fade } from 'react-awesome-reveal'
import { Link } from "react-router-dom"

// ** Interfaces
import { Innumbers } from "../../../interfaces/InvestorsHome"

/**
 * A functional component that renders a section of the Investor Home page.
 * The component renders a section with an image and a contact us section.
 * The component uses the Fade component from react-awesome-reveal to animate
 * the image and the contact us section.
 * @param {Innumbers} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorHomeMoreInfo = ({ data }: { data: Innumbers }): React.JSX.Element => {
    return (
        <div className="about more__info">
            <div className="container-fluid">
                <div className="row gy-4">
                    <div className="col-lg-6 nomargin">
                        <Fade direction="up" triggerOnce>
                            <img
                                src={data.banner?.data?.attributes?.url}
                                className="img-fluid"
                                alt="contacto"
                            />
                        </Fade>
                    </div>

                    <div className="col-lg-6 content margin-section text-center mb-30">
                        <Fade direction="up" triggerOnce>
                            <h2 className="mt-30">
                                <b>{data.contact_us.title}</b>
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