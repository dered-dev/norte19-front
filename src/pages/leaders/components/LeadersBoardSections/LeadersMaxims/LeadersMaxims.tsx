import React from "react";
import { Fade } from "react-awesome-reveal";
import classnames from 'classnames';

// ** Interfaces
import { Section } from "../../../interfaces/Leaders";

// ** Components
import RenderParagraphs from "../../../../../components/RenderParagraphs/RenderParagraphs";


/**
 * A functional component that renders a section of the Leaders page.
 * The component renders a section with an image and a description.
 * The component uses the Fade component from react-awesome-reveal to animate
 * the image and the description.
 * @param {Section} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const LeadersMaxims = ({ data }: { data: Section }): React.JSX.Element => {

    return (
        <section className="about nopadding mt-30 block__maximas" >
            <div className="col-lg-12">
                <Fade direction="up" triggerOnce>
                    <div className="mb-4 wrap__title__maximas">
                        <h4 className="color-white mb-0 title__maximas "><b>{data?.title}</b></h4>
                    </div>
                    <div className="mt-5 mb-5 list__maximas">
                        <RenderParagraphs data={data?.description} />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default LeadersMaxims;