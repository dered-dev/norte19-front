import React from "react";

// ** Interfaces
import { Section } from "../../interfaces/Leaders";

// ** Components
import LeadersCulture from "./LeadersCulture/LeadersCulture";
import LeadersMaxims from "./LeadersMaxims/LeadersMaxims";
import LeadersMission from "./LeadersMission/LeadersMission";

/**
 * Renders a component that displays a list of sections, with different components depending on the background color and image of each section.
 *
 * If the background color is light_gray and the image is null, it renders a LeadersCulture component.
 * If the background color is light_gray and the image is not null, it renders a LeadersMaxims component.
 * If the background color is not light_gray, it renders a LeadersMission component.
 *
 * @param {Section[]} data - An array of objects with the information of each section
 * @returns {React.JSX.Element} - The JSX element representing the component
 */
const LeadersBoardSections = ({ data }: { data: Section[] }): React.JSX.Element => {

    return (
        <>
            {
                data.map((section, index) => (
                    <React.Fragment key={index}>
                        {
                            section.background_color === 'light_gray' && section.image.data === null && (
                                <LeadersCulture data={section} />
                            )
                        }
                        {
                            section.background_color === 'light_gray' && section.image.data !== null && (
                                <LeadersMaxims data={section} />
                            )
                        }
                        {
                            section.background_color !== 'light_gray' && (
                                <LeadersMission data={section} />
                            )
                        }

                    </React.Fragment>
                ))
            }
        </>
    )
}

export default LeadersBoardSections