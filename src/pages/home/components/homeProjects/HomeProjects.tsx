import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Interfaces
import { Section } from '../../interfaces/Home'

// ** Custom components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs'

/**
 * Returns a JSX element representing the Home Projects section of the website.
 * 
 * The section includes a brief description of the company's hotel project development services,
 * along with a title and a fade-in animation effect.
 * 
 * @return {React.JSX.Element} The JSX element representing the Home Projects section.
 */
const HomeProjects = ({ data }: { data: Section }): React.JSX.Element => {
    return (
        <section className="about projects section responsive-margin">

            <div className="container">

                <div className="row">

                    <div className="col-lg-6">
                        <Fade direction="up" triggerOnce>
                            <div id="stats" className="stats">

                                <div className="container" data-aos="fade-up" data-aos-delay="100">

                                    <div className="row gy-4">

                                        <div className="section-title text-left title-responsive" data-aos="fade-up">
                                            <h2>
                                                {data.title}
                                            </h2>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Fade>
                    </div>

                    <div className="col-lg-6 content">
                        <Fade direction="up" triggerOnce>
                            <RenderParagraphs data={data.description} />
                        </Fade>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HomeProjects