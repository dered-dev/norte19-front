import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Icon } from '../../../../../components/Icon/Icon'

// ** Interfaces
import { Ftsaydocument, Sectionftsay } from '../../../interfaces/InvestorsFinancial'

/**
 * A functional component that renders the ftsay section of the Investor Financial page.
 *
 * The component renders a section with a title, a subtitle, a list of ftsay documents, and an image.
 * The component uses the Fade animation effect from react-awesome-reveal.
 * @param {Sectionftsay} data - The data for the ftsay section.
 *
 * @returns {React.JSX.Element} The JSX element representing the ftsay section.
 */
const InvestorFinancialFstay = ({ data }: { data: Sectionftsay }): React.JSX.Element => {


    /**
     * Function to render a list of ftsay documents as links.
     * @returns {React.JSX.Element[]} The list of documents rendered as links.
     */
    const renderDocumentsFstay = (): React.JSX.Element[] => {
        return data.ftsay_documents.map((document: Ftsaydocument) => {
            return (
                <div key={document.id}>
                    <p className="color-gray">
                        <Icon iconName='Check2' size={20} className='color-gray me-1' />
                        <b>
                            {document.title}
                        </b>
                    </p>
                    <div className="d-flex a-files">
                        {Object.entries(document).map(([key, value]) => {
                            if (['pdf', 'bmv', 'corpp'].includes(key) && value.data?.attributes?.url) {
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

                </div>
            )
        })
    }

    return (

        <div className="about light-background-tab pad-60">
            <div className="container">
                <div className="row gy-4">
                    <div
                        className="col-lg-6 content gestion-margin order-md-2"
                    >
                        <Fade direction="up" triggerOnce>
                            <h2 className="mt-30 title-border">
                                <b>{data.title}</b>
                            </h2>
                            <p className="color-gray">
                                <b>{data.subtitle}</b>
                            </p>
                            {renderDocumentsFstay()}
                        </Fade>
                    </div>

                    <div className="col-lg-6 order-md-1">
                        <Fade direction="up" triggerOnce>
                            <img src={data.image?.data?.attributes?.url} alt="fstay" className='w-100 img-fluid' />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorFinancialFstay