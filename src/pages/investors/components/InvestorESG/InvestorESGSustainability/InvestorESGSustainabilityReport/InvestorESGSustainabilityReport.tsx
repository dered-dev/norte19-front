import React from 'react'
import { Zoom } from 'react-awesome-reveal'

// ** Interfaces
import { Sustainabilityreport } from '../../../../interfaces/InvestorsESGSustainability'

const InvestorESGSustainabilityReport = ({ data }: { data: Sustainabilityreport }): React.JSX.Element => {
    return (
        <div className="section dark-background section-inversionista mt-30 mb-30">
            <div className="container">
                <div className="row">
                    <Zoom triggerOnce>
                        <div className="col-lg-12 text-center">
                            <div>
                                <p className="color-white">
                                    {data.title}
                                </p>
                                <h3 className="color-white">
                                    <b>{data.subtitle}</b>
                                </h3>
                            </div>
                            <div className="mt-30">
                                {
                                    data.file.data && (
                                        <a
                                            href={data.file.data?.attributes?.url}
                                            target="_blank"
                                            className="download-btn"
                                            rel="noreferrer"
                                        >
                                            <span>{data.button_text}</span>
                                        </a>
                                    )
                                }

                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default InvestorESGSustainabilityReport