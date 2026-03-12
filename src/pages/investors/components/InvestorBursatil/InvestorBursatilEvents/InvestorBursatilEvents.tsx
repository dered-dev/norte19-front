import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Reactstrap Imports
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

// ** Components
import ButtonViewMoreLess from '../../../../shared/ButtonViewMoreLess/ButtonViewMoreLess'

// ** Interfaces
import { Pressreleases } from '../../../interfaces/InvestorBursatil'

const MAX_ACCORDION_ITEMS_PRESS = 2

const InvestorBursatilEvents = ({ data }: { data: Pressreleases }): React.JSX.Element => {

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

    const renderAccordionEvents = () => {
        return data.press_releases.slice(0, viewMore ? data.press_releases.length : MAX_ACCORDION_ITEMS_PRESS).map((item, index) => {
            return (
                <AccordionItem key={item.id} className='investor-accordion'>
                    <AccordionHeader targetId={index.toString()} aria-label='mision-section'>
                        <div className='d-flex justify-content-between w-100'>
                            <div>
                                {item.year}
                            </div>

                        </div>

                    </AccordionHeader>
                    <AccordionBody accordionId={index.toString()}>
                        {
                            item.press_release_field.map((press, indexPress) => {
                                return (
                                    <p key={indexPress}>
                                        <a
                                            href={press.file?.data?.attributes?.url}
                                            target="_blank"
                                            className="color-gray-light" rel="noreferrer"
                                        >
                                            {press.title}
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

        <div className="faq section inversion-faq responsive-margin">
            <div className="container section-title">
                <Fade direction="up" triggerOnce>
                    <h2>{data.title}</h2>
                </Fade>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Fade direction="up" triggerOnce>
                            <Accordion className='accordion-margin p-0' open={activeTab} toggle={toggleTab}>
                                {renderAccordionEvents()}
                            </Accordion>

                            <div style={{ visibility: data.press_releases.length > MAX_ACCORDION_ITEMS_PRESS ? 'visible' : 'hidden' }}>
                                <ButtonViewMoreLess
                                    viewMore={viewMore}
                                    setViewMore={setViewMore}
                                />
                            </div>

                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorBursatilEvents