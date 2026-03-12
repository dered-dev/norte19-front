import React from 'react'

// ** Interfaces
import { Ourservices } from '../../interfaces/Home'

// ** Components
import HomeProjects from '../homeProjects/HomeProjects'
import HomeTechnology from '../homeTechnology/HomeTechnology'
import HomeCallTo from '../homeCallTo/HomeCallTo'

/**
 * A functional component that renders a list of sections based on the provided data.
 * The component renders a HomeProjects component if the section does not have an image.
 * The component renders a HomeTechnology component if the section has an image.
 * The component also renders a HomeCallTo component if it is the first section.
 * @param {Ourservices} data - The data for the sections.
 * @returns {React.JSX.Element} The JSX element representing the sections.
 */
const HomeSections = ({ data }: { data: Ourservices }): React.JSX.Element => {

    return (
        <div aria-label='sections-home'>
            {
                data?.sections?.map((section, index) => (
                    <div key={index} className="col-12">
                        {
                            section.image.data === null && (
                                <HomeProjects data={section} />
                            )
                        }
                        {
                            section.image.data !== null && (
                                <HomeTechnology data={section} />
                            )
                        }
                        {
                            index === 0 && (
                                <HomeCallTo data={data.background_image?.data?.attributes?.url} />
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default HomeSections