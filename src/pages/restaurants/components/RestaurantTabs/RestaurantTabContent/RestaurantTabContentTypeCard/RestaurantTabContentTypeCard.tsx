import React from "react"
import { Fade } from "react-awesome-reveal"
import classnames from "classnames"

// ** Interfaces
import { Page } from "../../../../interfaces/RestaurantsPages"

// ** Custom Components
import RenderParagraphs from "../../../../../../components/RenderParagraphs/RenderParagraphs"

import imageFake from '/assets/images/all/img__fake.png'

const RestaurantTabContentTypeCard = ({ page }: { page: Page }): React.JSX.Element => {

    return (
        <div className="about mt-5 item__tab__contentmiddle">

            <div className="container">

                <div className="row gy-4 d-flex align-items-center flex-column justify-content-between">

                    <div className="col-lg-12">
                        <Fade direction="up" triggerOnce>
                            <h5 className="mb-5 tab__contentmiddle__title"><b>{page.title}</b></h5>
                            {
                                page.description && (
                                    <RenderParagraphs data={page.description} />
                                )
                            }
                        </Fade>
                    </div>

                    <div className="col-lg-12 mt-5 container-img-menu-restaurant">
                        <Fade direction="up" triggerOnce>
                            <div className="bordered__image">
                                {/* TODO change src img page.image?.data?.attributes?.url */}
                                <img
                                src={imageFake}
                                className="img-fluid img-menu-restaurant"
                                alt={page.image?.data?.attributes?.name} />
                            </div>
                        </Fade>
                    </div>

                </div>

            </div>
        </div >

    )
}

export default RestaurantTabContentTypeCard