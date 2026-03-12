import React from "react"
import { Fade } from 'react-awesome-reveal'
import classnames from 'classnames'


// ** Interfaces
import { Section } from "../../../interfaces/InvestorsUs"

// ** Components
import RenderParagraphsPolicy from "../../../../../components/RenderParagraphsPolicy/RenderParagraphsPolicy"


const InvestorUsSolutions = ({ data }: { data: Section }): React.JSX.Element => {

    return (
        <div
            className={classnames("about ", {
                'light-background-tab': data.background_color === 'gray',
            })}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 content margin-section mb-30 order-md-2">
                        <Fade direction="up" triggerOnce>
                            <div className="mt-30">
                                <RenderParagraphsPolicy data={data.text} />
                            </div>

                        </Fade>
                    </div>

                    <div
                        style={{
                            backgroundImage: `url(${data.image.data?.attributes?.url})`
                        }}
                        className={classnames("col-lg-6 nomargin back-soluciones order-md-1 background-images", {
                            'order-md-2': data.image_position === 'right',
                        })}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorUsSolutions