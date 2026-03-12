import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal';

// ** Interfaces
import { Header } from '../../interfaces/Restaurants';

// ** Components
import BreadCrumbHeader from '../../../shared/BreadCrumbHeader/BreadCrumbHeader';

import imageHeader from '/assets/images/all/back_leaders.png'


/**
 * A functional component that renders the header section of the Restaurants page.
 * The component renders a section with a background image, a breadcrumb, and a heading.
 * The component uses the Fade and Zoom animation effects from react-awesome-reveal.
 * @param {Header} data - The data for the header section.
 * @returns {React.JSX.Element} The JSX element representing the header section.
 */
const RestaurantHeader = ({ data }: { data: Header }): React.JSX.Element => {
    // TODO Replace image imageHeader for admin `url(${data.background?.data?.attributes?.url})`

    return (
        <div className="page-title dark-background" 
            style={{ backgroundImage: `url(${imageHeader})` }}
        >
            {/* <Fade direction="up" triggerOnce>
                <BreadCrumbHeader url="restaurants" />
            </Fade> */}

            <div className="call-to-action banner-page">

                <div className="container">
                    <div className="row justify-content-center">
                        <Zoom triggerOnce>
                            <div className="col-xl-12">
                                <div className="text-center">
                                    <h2>{data.title}</h2>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RestaurantHeader