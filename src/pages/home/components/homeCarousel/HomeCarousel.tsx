import React from 'react'
import { Icon } from '../../../../components/Icon/Icon';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade';

// ** Styles
import './HomeCarousel.css'

// ** Interfaces
import { Homeslider } from '../../interfaces/Home';


/**
 * A functional component that renders the carousel of the Home page.
 * 
 * The component renders the Swiper component with navigation, pagination, autoplay, and effect fade.
 * The data prop is required, which is an object with the following properties: title, media.
 * The media property is an array of objects with the following properties: id, attributes.url.
 * The component renders each image in the media array as a SwiperSlide.
 * The component also renders the navigation arrows and pagination.
 * @param {Homeslider} data - The data for the carousel.
 * @returns {React.JSX.Element} The JSX element representing the Home carousel.
 */
const HomeCarousel = ({ data }: { data: Homeslider }): React.JSX.Element => {

    return (
        <section id="home-carousel">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation={{
                    nextEl: ".carousel-home-arrows-right",
                    prevEl: ".carousel-home-arrows-left"
                }}
                effect={'fade'}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className='carousel-home'
                loop={true}
            >
                {
                    data.media.data.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="carousel-image-wrapper">
                                <img className='carousel-home-img' src={image.attributes.url} alt="banner home" />
                                <div className='text-center text-carousel'><h2>{data.title}</h2></div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className="carousel-home-arrows carousel-home-arrows-left">
                <Icon iconName="ChevronLeft" />
            </button>

            <button className="carousel-home-arrows carousel-home-arrows-right">
                <Icon iconName="ChevronRight" />
            </button>
        </section>
    )
}

export default HomeCarousel