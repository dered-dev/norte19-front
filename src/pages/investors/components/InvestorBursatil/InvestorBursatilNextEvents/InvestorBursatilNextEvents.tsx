import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

// ** Interfaces
import { Upcomingevents } from '../../../interfaces/InvestorBursatil'

// ** Components
import RenderParagraphs from '../../../../../components/RenderParagraphs/RenderParagraphs'


/**
 * A functional component that renders the next events section of the Investor Bursatil page.
 * The component renders a section with a title, a list of upcoming events, and a description.
 * The component uses the Fade component from react-awesome-reveal to animate the section.
 * @param {{ data: Upcomingevents }} props - The data for the component.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorBursatilNextEvents = ({ data }: { data: Upcomingevents }): React.JSX.Element => {

    return (
        <div className="services section light-background">
            <div
                className="container section-title services-margin"
                data-aos="fade-up"
            >
                <h2>{data?.title}</h2>
            </div>

            <div className="testimonials mt-30">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <Fade direction="up" triggerOnce>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={3}
                            spaceBetween={0}
                            autoplay={{ delay: 5000 }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >

                            {data.events.map((event) => (
                                <SwiperSlide key={event.id}>
                                    <div className="testimonial-item">
                                        <div className="services">
                                            <div className="service-item position-relative h-100">
                                                <div className="eventos-content">
                                                    <span>{event.date}</span>
                                                    <h4 className="title">{event.title}</h4>
                                                    <div className="description">
                                                        <RenderParagraphs data={event.description} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}


                        </Swiper>

                    </Fade>

                </div>
            </div>
        </div>
    )
}

export default InvestorBursatilNextEvents