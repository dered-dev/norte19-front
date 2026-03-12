import React from "react";

// ** Components
import ExperienceHeader from "./components/ExperienceHeader/ExperienceHeader";
import ExperienceProjects from "./components/ExperienceProjects/ExperienceProjects";
import ExperienceClients from "./components/ExperienceClients/ExperienceClients";
import NotFoundData from "../shared/NotFoundData/NotFoundData";

// ** Hooks
import { useFetchData } from "../../hooks/useFetchData/useFetchData";

// ** Interfaces
import { ExperienceInterface } from "./interfaces/Experience";

// ** Reactstrap
import { Spinner } from 'reactstrap'

/**
 * A functional component that renders the experience page.
 * It fetches data from the 'api/experience' endpoint and displays
 * the header, projects, and clients sections using the fetched data.
 * While the data is being fetched, a loading spinner is displayed.
 *
 * @returns {React.JSX.Element} The JSX element representing the experience page.
 */
const Experience = (): React.JSX.Element => {
    const { data, loading } = useFetchData<ExperienceInterface>('api/experience');

    return (
        <>
            {
                data && (
                    <div>
                        <ExperienceHeader
                            banner={data.data.attributes.banner}
                            success={data.data.attributes.success_stories}
                            successTitle={data.data.attributes.success_stories_title} />
                        <ExperienceProjects
                            projectsTitle={data.data.attributes.proyects_title}
                            projects={data.data.attributes.proyects} />
                        <ExperienceClients brands={data.data.attributes.brands_carrousell} />
                    </div>
                )
            }
            {
                loading && (
                    <div className='container-loading'>
                        <Spinner className='color-blue' />
                    </div>
                )
            }
            <NotFoundData data={data} loading={loading} />
        </>
    )
}

export default Experience