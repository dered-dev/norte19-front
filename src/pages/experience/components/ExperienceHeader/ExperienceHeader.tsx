import React from "react";

// ** Components
import BreadCrumbHeader from "../../../shared/BreadCrumbHeader/BreadCrumbHeader";
import ExperienceSuccessStories from "../ExperienceSuccessStories/ExperienceSuccessStories";


import { Banner, Successstories } from "../../interfaces/Experience";

/**
 * A functional component that renders the header section of the experience page.
 * The component displays a background image, a breadcrumb header, and success stories.
 * 
 * @param {{ banner: Banner, success: Successstories, successTitle: string }} props - The props to render the component with. The banner is an object containing the image data for the background, success is an object containing success stories data, and successTitle is the title for the success stories section.
 * @returns {React.JSX.Element} The JSX element representing the header section.
 */
const ExperienceHeader = ({ banner, success, successTitle }: { banner: Banner, success: Successstories, successTitle: string }): React.JSX.Element => {

    return (
        <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: `url(${banner.data?.attributes?.url})` }}>
            <div className="container position-relative">
                <BreadCrumbHeader url="experience" />
            </div>

            <ExperienceSuccessStories success={success} successTitle={successTitle} />
        </div>
    );
};

export default ExperienceHeader;