import React from 'react'
import { Fade } from 'react-awesome-reveal'
import classnames from 'classnames'

// ** Interfaces
import { Section } from '../../../../interfaces/InvestorsESGSustainability'

// ** Components
import RenderParagraphs from '../../../../../../components/RenderParagraphs/RenderParagraphs'

const InvestorESGSustainabilityGuessWorld = ({ data }: { data: Section }): React.JSX.Element => {
    return (
        <div className="about white-background title-history mt-60 mb-60">
            <div className="container">
                <div className="row">
                    <div
                        className={classnames("col-lg-6 nomargin order-md-1 background-images", {
                            'order-md-2': data.image_position === 'right',
                        })}
                        style={{ backgroundImage: `url(${data.image.data?.attributes?.url})` }}
                    ></div>

                    <div className="col-lg-6 order-md-1 margin-section">
                        <Fade direction="up" triggerOnce>
                            <h2 className="title-border">
                                <b>{data.title}</b>
                            </h2>
                            <div className="mt-30">
                                <RenderParagraphs data={data.description} />
                            </div>

                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorESGSustainabilityGuessWorld