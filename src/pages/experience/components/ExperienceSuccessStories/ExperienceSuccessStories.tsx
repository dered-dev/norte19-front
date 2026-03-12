import React from "react";
import { Fade } from "react-awesome-reveal";

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Styles
import './ExperienceSuccessStories.css'

// ** Interfaces
import { Experience, Successstories } from "../../interfaces/Experience";
import RenderParagraphs from "../../../../components/RenderParagraphs/RenderParagraphs";

/**
 * A functional component that renders the success stories section of the experience page.
 * The component renders a title and a subtitle, and a swiper to showcase each success story.
 * Each success story is rendered by the renderCards function, which renders a div with two columns, one containing the title and description of the story, and the other containing the image of the story.
 * The title and description are rendered using the Fade component from react-awesome-reveal, and the image is rendered with the img tag.
 * @param {{ success: Successstories, successTitle: string }} props - The props to render the component with. The success is an object containing the data of the success stories section, and the successTitle is the title of the section.
 * @returns {React.JSX.Element} - The JSX element representing the success stories section.
 */
const ExperienceSuccessStories = ({ success, successTitle }: { success: Successstories, successTitle: string }): React.JSX.Element => {

    /**
     * Function to render a card for each experience in the experiences array.
     * 
     * @param {{ id: number, name: string, brand: string, profile_photo: Image, storie: string }} experience - The experience that is being rendered.
     * @returns {React.JSX.Element} - The JSX element representing the card.
     */
    const renderCards = (experience: Experience): React.JSX.Element => {
        return (
            <div key={experience.id}>
                <Fade direction="up" triggerOnce>
                    <div className="service-item position-relative h-100 container-success-stories">
                        <div className="d-flex">
                            <img src={experience.profile_photo?.data?.attributes?.url} alt="testimonial" />
                            <div>
                                <h4 className="title">{experience.name}</h4>
                                <p className="description">{experience.brand}</p>
                            </div>
                        </div>
                        <div className="content-testimonial text-gray">
                            <RenderParagraphs data={experience.storie} />
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }

    return (
        <div className="services title-hr responsive-margin container-success-stories">

            <div className="container section-title">
                <Fade direction="up" triggerOnce>
                    <h2 className="color-white">{successTitle}</h2>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        autoplay={{ delay: 5000 }}
                    >
                        {success.experiences.map((experience) => (
                            <SwiperSlide key={experience.id}>
                                <Fade direction="up" triggerOnce>
                                    {renderCards(experience)}
                                </Fade>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Fade>

            </div>

        </div>
    )
}

export default ExperienceSuccessStories