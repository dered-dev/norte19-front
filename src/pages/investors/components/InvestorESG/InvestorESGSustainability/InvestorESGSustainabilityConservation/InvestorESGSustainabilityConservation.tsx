import React from 'react'
import { Fade } from 'react-awesome-reveal'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Interfaces
import { Sustainablemodel, Modelsslide } from '../../../../interfaces/InvestorsESGSustainability'

// ** Components
import RenderParagraphs from '../../../../../../components/RenderParagraphs/RenderParagraphs'

/**
 * A functional component that renders the conservation model section of the ESG Sustainability page.
 * The component renders a section with a title and a subtitle, and a swiper to showcase each model in the conservation model.
 * Each model is rendered by the renderCards function, which renders a div with two columns, one containing the title and description of the model, and the other containing the image.
 * The title and description are rendered using the Fade component from react-awesome-reveal, and the image is rendered with the img tag.
 * @param {Sustainablemodel} data - The data for the conservation model section, including the title, subtitle, and an array of models.
 * @returns {React.JSX.Element} The JSX element representing the conservation model section.
 */
const InvestorESGSustainabilityConservation = ({ data }: { data: Sustainablemodel }): React.JSX.Element => {

    /**
     * Function to render a single card for the conservation model.
     * 
     * The function renders a div with two columns, one containing the title and description of the model, and the other containing the image.
     * The title and description are rendered using the Fade component from react-awesome-reveal, and the image is rendered with the img tag.
     * 
     * @param {Modelsslide} card - The data for the card to be rendered.
     * @returns {React.JSX.Element} - The JSX element representing the card.
     */
    const renderCards = (card: Modelsslide): React.JSX.Element => {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 content align-content-center mb-30">
                            <Fade direction="up" triggerOnce>
                                <h2 className="mt-30 title-border">
                                    <b>{card.title}</b>
                                </h2>
                                <RenderParagraphs data={card.description} />
                            </Fade>
                        </div>

                        <div className="col-lg-6">

                            <Fade direction="up" triggerOnce>
                                <img
                                    src={card.image?.data?.attributes?.url}
                                    className="img-fluid"
                                    alt={card.title}
                                />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="services title-hr responsive-margin section">
            <div className="container">
                <Fade direction="up" triggerOnce>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            }
                        }}
                        autoplay={{ delay: 5000 }}
                        className='goals-slider'
                    >
                        {data.models_slide.map((card) => (
                            <SwiperSlide key={card.title}>
                                {renderCards(card)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Fade>
            </div>
        </div>

    )
}

export default InvestorESGSustainabilityConservation