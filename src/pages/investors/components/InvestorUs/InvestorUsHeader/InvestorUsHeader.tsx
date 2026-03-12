import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Interfaces
import { Header } from '../../../interfaces/InvestorsHeader'
import { formatDate } from '../../../../utils/formatDate'
import { processActionPrice } from '../../../../utils/processActionPrice'

/**
 * A functional component that renders the header section of the Investor Us page.
 * The component renders a section with a title, stock information title, stock price, and date.
 * The component uses the Fade animation effect from react-awesome-reveal.
 * 
 * @param {Header} data - The data for the header section, including stock information.
 * @param {string} title - The title for the header section.
 * 
 * @returns {React.JSX.Element} The JSX element representing the header section.
 */
const InvestorUsHeader = ({ data, title }: { data?: Header, title: string }): React.JSX.Element => {

    return (
        <div className="container text-left">
            <div className="row gy-4">
                <div className="col-lg-6 content services-margin">
                    <Fade direction="up" triggerOnce>
                        <h2 className="mt-30 color-white title-header">
                            <b>{title}</b>
                        </h2>
                    </Fade>
                </div>

                <div
                    className="col-lg-6 content services-margin">
                    <Fade direction="up" triggerOnce>
                        <h6 className="color-white">{data?.Stock_information?.title}</h6>
                        <h2 className="color-white mt-30 title-header">
                            <b>{data?.Stock_information?.stock_information.data.attributes.closing_price} MXN</b>
                        </h2>
                        <p className="color-white">
                            {processActionPrice({
                                closing_price: data?.Stock_information?.stock_information?.data?.attributes?.closing_price,
                                opening_price: data?.Stock_information?.stock_information?.data?.attributes?.opening_price,
                            })}
                            <span className="pad-span">{formatDate(data?.Stock_information?.stock_information?.data?.attributes?.operation_date)}</span>
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default InvestorUsHeader