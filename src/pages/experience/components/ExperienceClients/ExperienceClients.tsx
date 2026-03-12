import React from "react";
import { Fade } from "react-awesome-reveal";

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// **  Interfaces
import { Brandscarrousell } from "../../interfaces/Experience";


/**
 * A React functional component that renders a section of the Experience page.
 * The component renders a section with a title, a description and a slider of brands.
 * The component uses the Fade component from react-awesome-reveal to animate the title and the description.
 * The component uses the Swiper component to render the slider of brands.
 * @param {Brandscarrousell} brands - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const ExperienceClients = ({ brands }: { brands: Brandscarrousell }): React.JSX.Element => {
    return (
        <div className="mt-60 pb-100">

            <div className="container">
                <Fade direction="up" triggerOnce>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={4}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                        }}
                        autoplay={{ delay: 5000 }}
                        className="text-center"
                    >
                        {
                            brands?.data?.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <Fade direction="up" triggerOnce>
                                        <img src={brand?.attributes?.url} className="img-fluid" alt="Brand" />
                                    </Fade>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </Fade>
            </div>

        </div>
    );
};

export default ExperienceClients;