import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'

// ** Interfaces
import { Stockinfo } from '../../../interfaces/InvestorBursatil'

// ** Utils
import { formatDate } from '../../../../utils/formatDate'

// ** Components
import InvestorBursatilActionDownload from './components/InvestorBursatilActionDownload/InvestorBursatilActionDownload'
import InvestorBursatilActionGraphic from './components/InvestorBursatilActionGraphic/InvestorBursatilActionGraphic'

// ** Styles
import './InvestorBursatilAction.css'
import { processActionPrice } from '../../../../utils/processActionPrice'

const InvestorBursatilAction = ({ data }: { data: Stockinfo }): React.JSX.Element => {

    return (
        <div className="section dark-background img-price responsive-margin">
            <div className="container">
                <div className="row justify-content-center">
                    <Zoom triggerOnce>
                        <div className="col-xl-12">
                            <div className="text-center">
                                <p className="color-white">{data.title}</p>
                                <h3 className="color-white">{data.subtitle}</h3>
                            </div>

                            <div className='d-flex flex-wrap'>
                                <div className='col-lg-8 col-12'>
                                    <InvestorBursatilActionGraphic />
                                </div>
                                <div className="col-lg-4 col-12 align-content-center mt-30 container-infoAction">
                                    <Fade direction="up" triggerOnce>
                                        <h6 className="color-white">
                                            {data.graph_title}
                                        </h6>
                                        <h2 className="color-white mt-30">
                                            <b>{data.stock_information?.data?.attributes?.closing_price}MXN</b>
                                        </h2>
                                        <p className="color-gray-light">
                                            {processActionPrice({
                                                closing_price: data?.stock_information?.data?.attributes?.closing_price,
                                                opening_price: data?.stock_information?.data?.attributes?.opening_price,
                                            })}
                                            <span className="pad-span">{formatDate(data?.stock_information?.data?.attributes?.operation_date)}</span>
                                        </p>
                                        <InvestorBursatilActionDownload data={data} />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default InvestorBursatilAction