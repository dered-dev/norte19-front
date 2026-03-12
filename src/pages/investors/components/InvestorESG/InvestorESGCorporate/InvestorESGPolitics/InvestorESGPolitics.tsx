import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Icon } from '../../../../../../components/Icon/Icon'

// ** Interfaces
import { Governancepolicies } from '../../../../interfaces/InvestorsESGCorporate'

// ** Components
import RenderParagraphs from '../../../../../../components/RenderParagraphs/RenderParagraphs'

/**
 * Renders the politics section of the ESG page.
 * The component displays a title, a description, and a list of policy documents.
 * The section is animated using the Fade component from react-awesome-reveal.
 * 
 * @param {Governancepolicies} data - The data for the politics section, including title, description, and policy documents list.
 * @returns {React.JSX.Element} The JSX element representing the politics section.
 */
const InvestorESGPolitics = ({ data }: { data: Governancepolicies }): React.JSX.Element => {

    /**
     * Function to render a list of documents as links.
     * The function takes the policies_list data and renders a list of documents
     * with their respective links. If the item has a file, it will render the file's
     * url as a link, otherwise it will render the item's title as a plain text.
     * @returns {React.JSX.Element[]} The list of documents rendered as links.
     */
    const renderDocuments = () => {
        return data.policies_list.map((item) => {
            return (
                <p key={item.id}>
                    {
                        item.file.data && item.file?.data?.length > 0 && (
                            <>
                                <Icon iconName='Check2' size={20} className='color-gray me-1' />

                                <a
                                    href={item.file?.data[0]?.attributes?.url}
                                    target="_blank"
                                    className="color-gray"
                                    rel="noreferrer"
                                >
                                    <b>{item.title}</b>
                                </a>
                            </>
                        )
                    }

                </p>
            )
        })
    }
    return (
        <div className="about light-background-tab pad-60">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 content gestion-margin order-md-2">
                        <Fade direction="up" triggerOnce>
                            <h2 className="mt-30 title-border">
                                <b>{data.title}</b>
                            </h2>
                            <RenderParagraphs data={data.description} />
                            {renderDocuments()}
                        </Fade>
                    </div>

                    <div
                        className="col-lg-6 back-politica order-md-1"
                        style={{ backgroundImage: `url(${data.image?.data?.attributes?.url})` }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorESGPolitics