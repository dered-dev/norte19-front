import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Third library imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// ** Interfaces
import { Certificationcatalog } from '../../../../interfaces/InvestorsESGSustainability'


/**
 * A functional component that renders the certifications section of the ESG Sustainability page.
 * The component renders a title, and a swiper to showcase each certification image.
 * The section is animated using the Fade component from react-awesome-reveal.
 * @param {Certificationcatalog} data - The data for the certifications section, including title, and an array of certification images.
 * @returns {React.JSX.Element} The JSX element representing the certifications section.
 */
const InvestorESGSustainabilityCertifications = ({ data }: { data: Certificationcatalog }): React.JSX.Element => {

    return (

        <div className="about section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-12 content services-margin">
                        <Fade direction='up' triggerOnce>
                            <h3>{data.title}</h3>
                        </Fade>
                    </div>
                </div>

                <div id="clients" className="clients mt-30">

                    <div className="container">
                        <Fade direction="up" triggerOnce>
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={0}
                                pagination={{ clickable: true }}
                                className='swiper-clients'
                                breakpoints={{
                                    0: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 5,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                    },
                                }}

                            >

                                {
                                    data.slider?.data?.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <div>
                                                <img
                                                    className="imgs-clients"
                                                    src={image?.attributes?.url}
                                                    alt="banner sustainability" />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </Fade>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default InvestorESGSustainabilityCertifications