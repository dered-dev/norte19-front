import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

// ** Third library imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Styles
import './HomeSustainability.css'

// ** Interfaces
import { Sustainability } from '../../interfaces/Home'

// ** Custom components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs'


/**
 * A React functional component that renders the Sustainability section of the Home page.
 * The component renders a section with a title, a description, a call-to-action button and a slider of logos.
 * The component uses the Fade component from react-awesome-reveal to animate the title and the button.
 * The component uses the Swiper component to render the slider of logos.
 * @param {Sustainability} data - The data for the Sustainability section.
 * @returns {React.JSX.Element} The JSX element representing the Sustainability section.
 */
const HomeSustainability = ({ data }: { data: Sustainability }): React.JSX.Element => {

    return (
        <section className="about section">

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-12 text-center content services-margin">
                        <Fade direction="up" triggerOnce>
                            <h3>{data.title}</h3>
                            <div className='mt-30'>
                                <RenderParagraphs data={data.description} />
                            </div>
                            <div className='mt-30'>
                                <Link to="/investors/investors-esg" className="read-more"><span>{data.button_title}</span></Link>
                            </div>
                        </Fade>
                    </div>

                </div>

                <div id="clients" className="mt-30">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={6}
                            spaceBetween={0}
                            autoplay={{ delay: 5000 }}
                            className='swiper-clients'
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 4,
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
                                data.slider.data.map((image) => (
                                    <SwiperSlide key={image.id}>
                                        <div>
                                            <img className="imgs-clients" src={image.attributes.url} alt="banner sustainability" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HomeSustainability