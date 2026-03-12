import React from "react";
import { Zoom } from "react-awesome-reveal";

// ** Interfaces
import { Section } from "../../../interfaces/Leaders";

// ** Components
import RenderParagraphs from "../../../../../components/RenderParagraphs/RenderParagraphs";

import imageCulture from '/assets/images/all/back__cultura.png'

/**
 * A React functional component that renders the Culture section of the Leaders page.
 * The component renders a section with a title and a description.
 * The component uses the Zoom component from react-awesome-reveal to animate the title and the description.
 * The component uses the RenderParagraphs component to render the description.
 * @param {Section} data - The data for the Culture section.
 * @returns {React.JSX.Element} The JSX element representing the Culture section.
 */
const LeadersCulture = ({ data }: { data: Section }): React.JSX.Element => {

    return (
        <div className="wrap__culture">
            {/* TODO */}
            {/* Replace image imageCulture for admin `url(${data.image})`  */}
            <section className="section light-background culture__header" 
                style={{ backgroundImage: `url(${imageCulture})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <Zoom triggerOnce>
                            <div className="col-xl-12">
                                <div className="text-center">
                                    <h2 className="color-white title__culture"><b>{data.title}</b></h2>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>

            </section>
            <section className="culture__description">
                <div className="col-xl-12 pt-5 ps-2 pe-2">
                    <div className="text-center">
                        <RenderParagraphs data={data.description} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LeadersCulture