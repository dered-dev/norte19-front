import React from "react"
import { Fade } from "react-awesome-reveal"
import classnames from "classnames"

// ** Custom Components
import RenderParagraphs from "../../../../../../components/RenderParagraphs/RenderParagraphs"

import imageRestaurant from '/assets/images/all/img__restaurant.png'

// ** Interfaces
import { Page } from "../../../../interfaces/RestaurantsPages"

const RestaurantTabContentTypeGray = ({ page }: { page: Page }): React.JSX.Element => {

    return (
        <div className="about light-background-tab about__restaurant">

            <div className="container">

                <div className="row gy-4 justify-content-between about__restaurant__content">
                    <div className="col-lg-6 content about__restaurant__info d-flex flex-column justify-content-center align-items-center">
                        <Fade direction="up" triggerOnce className=" ">
                            <h2 className="mb-4 text-uppercase">{page.title}</h2>
                            {
                                page.description && (
                                    <RenderParagraphs data={page.description} />
                                )
                            }
                        </Fade>
                    </div>

                    <div className={classnames("col-lg-5 text-center about__restaurant__image",
                        {
                            'order-md-2': page.image_position === 'right',
                        })}>
                        <Fade direction="up" triggerOnce>
                            {/* TODO  replace src {page.image?.data?.attributes.url} */}
                            <div className="restaurant__image__wrapper">
                                <img
                                src={imageRestaurant}
                                className="img-fluid"
                                alt={page.image?.data?.attributes.name} />
                            </div>
                        </Fade>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RestaurantTabContentTypeGray