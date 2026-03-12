import React from "react";
import { Fade } from "react-awesome-reveal";
import classnames from 'classnames';

// ** Interfaces
import { Section } from "../../../interfaces/Leaders";

// ** Components
import RenderParagraphs from "../../../../../components/RenderParagraphs/RenderParagraphs";

const LeadersMission = ({ data }: { data: Section }): React.JSX.Element => {

    return (
        <>
            <section className="about section is__mision">
                <Fade direction="up" triggerOnce>
                    <h5 className="mb-5 title__mision"><b>{data.title}</b></h5>
                    <RenderParagraphs data={data.description} />
                </Fade>
            </section>

        </>
    )
}

export default LeadersMission