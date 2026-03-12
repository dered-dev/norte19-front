import React from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import { Fade } from 'react-awesome-reveal'
import classnames from 'classnames';

// ** Interfaces
import { Section } from '../../../interfaces/InvestorsHome'

/**
 * A functional component that renders the last reports section of the Investor Home page.
 * The component renders a section with a heading, a list of documents, and a list of links.
 * The component uses the Fade animation effect from react-awesome-reveal.
 * @param {Section} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorHomeLastReports = ({ data, index }: { data: Section, index: number }): React.JSX.Element => {

    /**
     * Function to render a list of documents as links.
     * @returns {React.JSX.Element[]} The list of documents rendered as links.
     */
    const renderDocuments = () => {
        return data.documents?.map((document) => (
            <p key={document.id} className=' d-flex align-items-center document__button__rendered'>
                
                <a
                    href={document.document?.data?.attributes?.url}
                    target="_blank"
                    className="color-gray me-2"
                    rel="noreferrer"
                >
                    <b>{document.name}</b>
                </a>
                <Icon iconName='Download' size={20} className='color-gray' />
            </p>
        ))
    }

    /**
     * Function to render a list of links.
     * @returns {React.JSX.Element[]} The list of links rendered as HTML links.
     */
    const renderLinks = () => {
        return data.links?.map((document) => (
            <p key={document.id} className='render__link'>
                <Icon iconName='Check2' size={20} className='color-gray' />
                <a
                    href={document.url}
                    target="_blank"
                    className="color-gray ms-1"
                    rel="noreferrer"
                >
                    <b>{document.title}</b>
                </a>
            </p>
        ))
    }


    return (

        <div className={
                classnames("about light-background-tab pad-60", { 
                    'documents__card': data.documents?.length , 
                    'links__card': data.links?.length 
                })
            }>
            <div className="container">
                <div className="row gy-4">
                    <div className={classnames("col-lg-6 content", {
                        'gestion-margin order-md-2': index % 2 !== 0,
                        'services-margin': index % 2 === 0
                    })}>
                        <Fade direction="up" triggerOnce>
                            <h2 className={ classnames("mt-30", {
                                'mb-5 documents__card__title': data.documents?.length , 
                                'links__card__title': data.links?.length
                            }) }>
                                <b>{data.title}</b>
                            </h2>
                            {
                                data.documents?.length && (
                                    renderDocuments()
                                )
                            }
                            {
                                data.links?.length && (
                                    renderLinks()
                                )
                            }
                        </Fade>
                    </div>

                    <div
                        className={classnames("col-lg-6", {
                            'order-md-1': index % 2 !== 0
                        })}
                        style={{
                            backgroundImage: `url(${data.banner?.data?.attributes?.url})`,
                            backgroundSize: "cover",
                            minHeight: "240px"
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorHomeLastReports