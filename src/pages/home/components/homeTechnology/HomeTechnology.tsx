import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Interfaces
import { Section } from '../../interfaces/Home'

// ** Custom components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs'

/**
 * A React functional component that renders a section of the webpage showcasing the technology used by Norte 19.
 * 
 * @return {React.JSX.Element} A JSX element representing the technology section.
 */
const HomeTechnology = ({ data }: { data: Section }): React.JSX.Element => {
    return (
        <section className="about light-background-tab nomargin">

            <div className="container-fluid">

                <div className="row gy-4">

                    <div className="col-lg-6 nomargin">
                        <Fade direction="up" triggerOnce>
                            <img src={data.image?.data?.attributes.url} className="img-fluid" alt="tecnología hotelera" />

                        </Fade>
                    </div>

                    <div className="col-lg-6 content margin-section ps-5">
                        <Fade direction="up" triggerOnce>
                            <h3><span className="color-blue">{data.title}</span></h3>
                            <RenderParagraphs data={data.description} />
                        </Fade>
                    </div>

                </div>

            </div>
        </section>
    )

}

export default HomeTechnology