import React from 'react'
import { Zoom } from 'react-awesome-reveal'

// ** Interfaces
import { Ourservices } from '../../interfaces/Home'

// ** components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs'

/**
 * A React functional component that renders a section of the webpage showcasing the call to services of Norte 19.
 * 
 * @return {React.JSX.Element} A JSX element representing the call to services section.
 */
const HomeCallToServices = ({ data }: { data: Ourservices }): React.JSX.Element => {
    return (
        <section className="call-to-action our-services section dark-background">

            <div className="container">
                <div className="row justify-content-center">
                    <Zoom triggerOnce>
                        <div className="col-xl-12">
                            <div className="text-center">
                                <h3>{data?.footer[0]?.children[0]?.text}</h3>
                                <RenderParagraphs data={data?.footer?.slice(1)} />
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>

        </section>
    )

}

export default HomeCallToServices