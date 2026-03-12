import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Icon } from '../../../../../components/Icon/Icon'

// ** Interfaces
import { Prospectusesdocument, Sectionprospectuses } from '../../../interfaces/InvestorsFinancial'

/**
 * A functional component that renders the prospectus section of the Investor Financial page.
 *
 * The component renders a section with a title, a subtitle, a list of prospectus documents, and an image.
 * The component uses the Fade component from react-awesome-reveal to animate the title, subtitle, and list of documents.
 *
 * @param {Sectionprospectuses} data - The data for the prospectus section.
 *
 * @returns {React.JSX.Element} The JSX element representing the prospectus section.
 */
const InvestorFinancialProspect = ({ data }: { data: Sectionprospectuses }): React.JSX.Element => {

    /**
     * Function to render a list of prospectuses documents as links.
     * @returns {React.JSX.Element[]} The list of documents rendered as links.
     */
    const renderDocuments = (): React.JSX.Element[] => {
        return data.prospectuses_documents.map((document: Prospectusesdocument) => {
            return (
                <p key={document.id}>
                    <Icon iconName='Check2' size={20} className='color-gray' />
                    <a
                        href={document.file?.data?.attributes?.url}
                        target="_blank"
                        className="color-gray ms-1"
                        rel="noreferrer"
                    >
                        <b>{document.title}</b>
                    </a>
                </p>
            )
        })
    }

    return (
        <div className="about light-background-tab pad-60">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 content services-margin">
                        <Fade direction="up" triggerOnce>
                            <h2 className="mt-30 title-border">
                                <b>{data.title}</b>
                            </h2>
                            <p className="color-gray">
                                <b>{data.subtitle}</b>
                            </p>
                            {renderDocuments()}
                        </Fade>
                    </div>

                    <div className="col-lg-6">
                        <Fade direction="up" triggerOnce>
                            <img src={data.image?.data?.attributes?.url} className='w-100 img-fluid' alt="prospect" />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorFinancialProspect