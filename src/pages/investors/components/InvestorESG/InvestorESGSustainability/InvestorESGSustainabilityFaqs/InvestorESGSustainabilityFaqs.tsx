import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Reactstrap Imports
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

// ** Interfaces
import { Certificationcatalog } from '../../../../interfaces/InvestorsESGSustainability'


/**
 * A functional component that renders the faqs section of the Investor ESG Sustainability page.
 * The component renders a section with an accordion item for each faq item.
 * Each accordion item has a title and a content. The content is rendered as a list of links.
 * The component uses the Fade component from react-awesome-reveal to animate the accordion items.
 * @param {Certificationcatalog} data - The data for the faqs section, including title and an array of faq items.
 * @returns {React.JSX.Element} The JSX element representing the faqs section.
 */
const InvestorESGSustainabilityFaqs = ({ data }: { data: Certificationcatalog }): React.JSX.Element => {

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
     * Renders the accordion items based on the data provided.
     * It maps through the dropdown items and creates an AccordionItem for each item.
     * Each AccordionItem consists of an AccordionHeader and AccordionBody with the respective content.
     * The AccordionHeader contains the title of the item, and the AccordionBody lists the documents associated with the item.
     * Each document is rendered as a link.
     */
    const renderAccordion = () => {
        return data.dropdowns.map((item, index) => {
            return (
                <AccordionItem key={index} className='investor-accordion'>
                    <AccordionHeader targetId={index.toString()} aria-label='mision-section'>
                        <div className='d-flex justify-content-between w-100'>
                            <div>
                                {item.title}
                            </div>

                        </div>

                    </AccordionHeader>
                    <AccordionBody accordionId={index.toString()}>
                        {
                            item.dropdown_document.map((document, indexDocument) => {
                                return (
                                    <p key={indexDocument}>
                                        <a
                                            href={document.document?.data?.attributes?.url}
                                            target="_blank"
                                            className="color-gray-light" rel="noreferrer"
                                        >
                                            {document.name}
                                        </a>
                                    </p>
                                )
                            })
                        }

                    </AccordionBody>
                </AccordionItem>
            )
        })
    }

    return (
        <div className="faq inversion-faq mb-30">

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Fade direction="up" triggerOnce>
                            <Accordion className='accordion-margin p-0' open={activeTab} toggle={toggleTab}>
                                {renderAccordion()}
                            </Accordion>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorESGSustainabilityFaqs