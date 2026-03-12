import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Interfaces
import { Page } from '../../../../interfaces/RestaurantsPages'

// ** Custom Components
import RenderParagraphs from '../../../../../../components/RenderParagraphs/RenderParagraphs'

const RestaurantTabContentTypeText = ({ page }: { page: Page }): React.JSX.Element => {
    return (
        <div className="about responsive-margin restaurant__tab__contenttext">

            <div className="container">

                <div className="row">

                    <div className="col-lg-12 text-center restaurant__tab__contentinfo">
                        <Fade direction="up" triggerOnce className=''>
                            {
                                page.text && (
                                    <RenderParagraphs data={page.text} />
                                )
                            }
                        </Fade>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default RestaurantTabContentTypeText