import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Interfaces
import { Sustainablemodel, Sustainablemodelcard } from '../../../../interfaces/InvestorsESGSustainability';

// ** Components
import RenderParagraphs from '../../../../../../components/RenderParagraphs/RenderParagraphs';

/**
 * A component that renders the pillars of the sustainable model on the ESG Sustainability page.
 * 
 * The component displays a title and a subtitle for the section, along with a swiper to showcase
 * each pillar of the sustainable model. Each pillar includes a title and a description rendered 
 * using the RenderParagraphs component.
 * 
 * @param {Sustainablemodel} data - The data for the sustainable model section, including the title, 
 * subtitle, and an array of sustainable model cards.
 * @returns {React.JSX.Element} The JSX element representing the sustainable model pillars section.
 */
const InvestorESGSustainabilityPillars = ({ data }: { data: Sustainablemodel }): React.JSX.Element => {


    /**
     * A function that renders a single pillar of the sustainable model.
     * 
     * The function renders a div with a title and a description, using the RenderParagraphs component
     * to render the description.
     * 
     * @param {Sustainablemodelcard} pillar - The data for the pillar.
     * @returns {React.JSX.Element} The JSX element representing the pillar.
     */
    const renderPillars = (pillar: Sustainablemodelcard): React.JSX.Element => {
        return (
            <div className="testimonial-item">
                <div className="services">
                    <div className="service-item position-relative h-100" style={{ minHeight: "250px" }}>
                        <h4 className="title">
                            {pillar.title}
                        </h4>
                        <div className="description" style={{ color: "#888B8D" }}>
                            <RenderParagraphs data={pillar.description} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="services section dark-background">
            <div
                className="container section-title services-margin">
                <Fade direction="up" triggerOnce>
                    <p className="color-white">{data.title}</p>
                    <h2 className="color-white">{data.subtitle}</h2>
                </Fade>
            </div>

            <div className="testimonials mt-30">
                <div className="container">
                    <Fade direction="up" triggerOnce>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 3
                                },
                            }}
                            autoplay={{ delay: 5000 }}
                            className='goals-slider'
                        >
                            {data.sustainable_model_card.map((card) => (
                                <SwiperSlide key={card.title}>
                                    {renderPillars(card)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default InvestorESGSustainabilityPillars