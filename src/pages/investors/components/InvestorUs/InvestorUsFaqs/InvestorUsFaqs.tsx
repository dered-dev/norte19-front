import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Reactstrap Imports
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

// ** Interfaces
import { Missionvision } from '../../../interfaces/InvestorsUs'

// ** Components
import RenderParagraphs from '../../../../../components/RenderParagraphs/RenderParagraphs'

/**
 * A functional component that renders the faqs section of the Investor Us page.
 *
 * The component renders a section with a title and a list of accordion items.
 * Each accordion item has a title and a content. The content is rendered by the
 * RenderParagraphs component.
 *
 * The component uses the Fade component from react-awesome-reveal to animate
 * the accordion items.
 *
 * @param {Missionvision} data - The data for the faqs section.
 *
 * @returns {React.JSX.Element} The JSX element representing the faqs section.
 */
const InvestorUsFaqs = ({ data }: { data: Missionvision }): React.JSX.Element => {

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
     * Renders the accordion items for the faqs section of the Investor Us page.
     *
     * @returns {React.JSX.Element[]} The JSX elements representing the accordion items.
     */
    const renderAccordion = () => {
        return data.about_us_drop_down_cards.map((card, index) => {
            return (
                <AccordionItem className='investor-accordion' key={index}>
                    <AccordionHeader targetId={index.toString()} aria-label='mision-section'>
                        <div className='d-flex justify-content-between w-100'>
                            <div>
                                {card.title}
                            </div>

                        </div>

                    </AccordionHeader>
                    <AccordionBody accordionId={index.toString()}>
                        <RenderParagraphs data={card.description} />
                    </AccordionBody>
                </AccordionItem>
            )
        })
    }

    return (
        <div className="faq section inversion-faq">
            <div className="container section-title" data-aos="fade-up">
                <h2>{data.title}</h2>
            </div>

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

export default InvestorUsFaqs