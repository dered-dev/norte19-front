import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Interfaces
import { Proyect } from "../../interfaces/Experience";

// ** Components
import RenderParagraphs from "../../../../components/RenderParagraphs/RenderParagraphs";
import { Icon } from "../../../../components/Icon/Icon";
import ExperienceProjectModal from "./ExperienceProjectModal/ExperienceProjectModal";

const LIMIT_CHARACTERS = 250;

/**
 * Truncates text to a specified character limit.
 * @param {string} text - The text to truncate.
 * @param {number} limit - The maximum number of characters.
 * @returns {string} - The truncated text with ellipsis if truncated.
 */
const truncateText = (text: string, limit: number): string => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

/**
 * A functional component that renders the projects section of the experience page.
 * The component displays a title and a swiper containing project cards.
 * Each project card is rendered by the renderCards function and includes an image, metadata, title, description, and a "read more" link with an icon.
 * 
 * @param {string} projectsTitle - The title of the projects section.
 * @param {Proyect[]} projects - An array of project objects to be displayed, each containing id, image, date, project name, and description.
 * @returns {React.JSX.Element} - The JSX element representing the projects section.
 */
const ExperienceProjects = ({ projectsTitle, projects }: { projectsTitle: string, projects: Proyect[] }): React.JSX.Element => {
    const [modal, setModal] = useState(false);
    const [selectProject, setSelectProject] = useState({} as Proyect);
    const toggle = () => setModal(!modal);

    /**
     * Handles the selection of a project and toggles the modal state.
     * 
     * @param {Proyect} project - The project data to be rendered in the modal.
     */
    const handleSelectProject = (project: Proyect) => {
        setSelectProject(project);
        toggle();
    };

    /**
     * Function to render a card for a given project.
     * 
     * @param {Proyect} project - The project data to render, including id, image, date, project name, and description.
     * @returns {React.JSX.Element} - The JSX element representing the project card, which includes an image, metadata, title, description, and a "read more" link with an icon.
     */
    const renderCards = (project: Proyect): React.JSX.Element => {
        // Truncate the description content before passing to RenderParagraphs
        const truncatedDescription = project.description.map(paragraph => ({
            ...paragraph,
            children: paragraph.children.map(child => ({
                ...child,
                text: truncateText(child.text, LIMIT_CHARACTERS)
            }))
        }));

        return (
            <div key={project.id}>
                <Fade direction="up" triggerOnce>
                    <article
                        aria-label="project-card"
                        className="cursor-pointer"
                        onClick={() => handleSelectProject(project)}>
                        <div className="post-img">
                            <img src={project.image?.data?.attributes.url} alt="proyecto" className="img-fluid" />
                        </div>

                        <div className="meta-top">
                            <ul>
                                <li className=""><a>{project.date}</a></li>
                            </ul>
                        </div>

                        <h2 className="title">
                            <span>{project.proyect}</span>
                        </h2>

                        <div className="content">
                            <RenderParagraphs data={truncatedDescription} />
                        </div>

                        <div className="read-more mt-auto">
                            <div className="read-more">
                                <span className="me-2 cursor-pointer">
                                    Leer más
                                </span>
                                <Icon iconName="ArrowRight" />
                            </div>
                        </div>
                    </article>
                </Fade>
            </div>
        );
    };

    return (
        <section id="blog-posts" className="blog-posts projects section responsive-margin">
            <div className="container section-title">
                <Fade direction="up" triggerOnce>
                    <h2>{projectsTitle}</h2>
                </Fade>
            </div>

            <div className="">
                <div className="container">
                    <Fade direction="up" triggerOnce>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 3 },
                            }}
                            autoplay={{ delay: 5000 }}
                        >
                            {projects.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <Fade direction="up" triggerOnce>
                                        {renderCards(project)}
                                    </Fade>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Fade>
                </div>
                {modal && (
                    <ExperienceProjectModal
                        modal={modal}
                        toggle={toggle}
                        selectProject={selectProject}
                    />
                )}
            </div>
        </section>
    );
};

export default ExperienceProjects;
