import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Reactstrap Imports
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

// ** Interfaces
import { Quarter, Report, Reportsection } from '../../../interfaces/InvestorsFinancial'

const MAX_ACCORDION_ITEMS = 3

// ** Components
import ButtonViewMoreLess from '../../../../shared/ButtonViewMoreLess/ButtonViewMoreLess'

/**
 * A functional component that renders the financial reports section of the Investor Financial page.
 *
 * The component renders a section with a title, a banner image, and a list of accordion items.
 * Each accordion item has a title representing the year of the report, and a content with a list of links
 * representing the files associated with the report.
 *
 * The component uses the Fade component from react-awesome-reveal to animate the accordion items.
 *
 * @param {Reportsection} data - The data for the financial reports section.
 * @param {Report[]} dataReports - The array of Report objects to render.
 *
 * @returns {React.JSX.Element} The JSX element representing the financial reports section.
 */
const InvestorFinancialReports = ({ data, dataReports }: { data: Reportsection, dataReports: Report[] }): React.JSX.Element => {

    const [viewMore, setViewMore] = useState(false)
    const [activeTab, setActiveTab] = useState('')

    /**
     * Toggles the active tab state.
     *
     * If the activeTab state equals the tab argument, it will be set to an empty string.
     * Otherwise, the activeTab state is set to the tab argument.
     *
     * @param {string} tab - The tab id to toggle
     *
     * @return {void}
     */
    const toggleTab = (tab: string): void => {
        if (activeTab === tab) {
            setActiveTab('');
            return;
        }

        setActiveTab(tab);
    }

    /**
     * Function to render a list of JSX elements representing the body of the accordion.
     * It takes an array of Quarter objects as an argument and returns a list of JSX elements.
     * Each JSX element is a div with a class of "d-flex faq-files" and contains a paragraph
     * with a bold text representing the quarter, and a list of links representing the files
     * associated with the quarter.
     * 
     * @param {Quarter[]} quarters - The array of Quarter objects to render.
     * 
     * @returns {React.JSX.Element[]} - The list of JSX elements representing the body of the accordion.
     */
    const renderAccordionBody = (quarters: Quarter[]): React.JSX.Element[] => {
        return quarters.map((quarter: Quarter) => {
            return (
                <div key={quarter.id} className="d-flex faq-files">
                    <p className="color-gray-light">
                        <b>{quarter.quarter}</b>
                    </p>
                    {Object.entries(quarter).map(([key, value]) => {
                        if (['pdf', 'xls', 'audio', 'bwv', 'corpp'].includes(key) && value?.data?.attributes?.url) {
                            return (
                                <a
                                    key={key}
                                    href={value.data?.attributes?.url}
                                    target="_blank"
                                    className="color-gray-light cursor-pointer"
                                    rel="noreferrer"
                                >
                                    {key.toUpperCase()}
                                </a>
                            );
                        }
                        return null;
                    })}
                </div>
            )
        })
    }

    /**
     * Function to render a list of JSX elements representing the accordion items for the Financial Reports section.
     * It takes no arguments and returns a list of JSX elements.
     * Each JSX element is an AccordionItem component from reactstrap, with a class of "investor-accordion".
     * The AccordionItem component contains an AccordionHeader component with a title representing the year of the report,
     * and an AccordionBody component with a list of JSX elements representing the body of the accordion.
     * The body of the accordion is rendered by the renderAccordionBody function.
     * The function uses the dataReports array and the viewMore state to determine how many accordion items to render.
     * If viewMore is false, it renders up to MAX_ACCORDION_ITEMS items. Otherwise, it renders all items in the dataReports array.
     * @returns {React.JSX.Element[]} - The list of JSX elements representing the accordion items.
     */
    const renderAccordionReports = (): React.JSX.Element[] => {
        return dataReports.slice(0, viewMore ? dataReports.length : MAX_ACCORDION_ITEMS).map((report: Report, index: number) => {
            return (
                <AccordionItem key={report.id} className='investor-accordion'>
                    <AccordionHeader targetId={index.toString()}>
                        <div className='d-flex justify-content-between w-100'>
                            <div>
                                {report.year}
                            </div>

                        </div>
                    </AccordionHeader>
                    <AccordionBody accordionId={index.toString()}>
                        {
                            report.year_report ?
                                <div className='mb-4'>
                                    <a
                                        href={report.year_report?.document?.data?.attributes?.url}
                                        target="_blank"
                                        className="color-gray-light cursor-pointer"
                                        rel="noreferrer"
                                    >
                                        <b>{report.year_report?.name}</b>
                                    </a>
                                </div>
                                : []
                        }
                        {renderAccordionBody(report.quarters)}
                    </AccordionBody>
                </AccordionItem>

            )
        })
    }


    return (
        <>
            <div className="container margin-section">
                <Fade direction="up" triggerOnce>
                    <h2 className="title-border">
                        <b>{data.title}</b>
                    </h2>
                </Fade>
            </div>

            <div className="container pad-60">
                <div className="row">
                    <div className="col-lg-12 margin-section order-md-1">
                        <img
                            src={data.banner?.data?.attributes?.url}
                            className='img-fluid w-100'
                            alt="reportes"
                        />
                    </div>

                    <div className="col-lg-12 order-md-2 margin-section mt-30">
                        <Fade direction="up" triggerOnce>
                            <Accordion className='accordion-margin p-0' open={activeTab} toggle={toggleTab}>
                                {renderAccordionReports()}
                            </Accordion>

                            <div style={{ visibility: dataReports.length > MAX_ACCORDION_ITEMS ? 'visible' : 'hidden' }}>
                                <ButtonViewMoreLess
                                    viewMore={viewMore}
                                    setViewMore={setViewMore}
                                />
                            </div>

                        </Fade>

                    </div>


                </div>
            </div>

        </>
    )
}

export default InvestorFinancialReports