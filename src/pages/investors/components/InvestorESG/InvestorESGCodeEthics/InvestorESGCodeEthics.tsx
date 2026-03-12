import React from "react";
import { Fade } from "react-awesome-reveal";
import { Icon } from "../../../../../components/Icon/Icon";

// ** Interfaces
import { InvestorESGCodeEthicsInterface } from "../../../interfaces/InvestorsESGCodeEthics";

// ** Hooks
import { useFetchData } from '../../../../../hooks/useFetchData/useFetchData';

// ** Reactstrap
import { Spinner } from 'reactstrap'

// ** Components
import RenderParagraphs from "../../../../../components/RenderParagraphs/RenderParagraphs";
import NotFoundData from "../../../../shared/NotFoundData/NotFoundData";

// ** i18n
import { useTranslation } from 'react-i18next'

/**
 * A functional component that renders the Code of Ethics section of the ESG page.
 * The component renders a section with a title, a description, a button to download a document, and a list of documents.
 * The component uses the Fade component from react-awesome-reveal to animate the section.
 * @param {InvestorESGCodeEthicsInterface} data - The data for the component.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorESGCodeEthics = (): React.JSX.Element => {
    const { t } = useTranslation()

    const { data, loading } = useFetchData<InvestorESGCodeEthicsInterface>('api/esg-code-of-ethic');

    /**
     * Function to render a list of documents as links.
     * The function takes the data fetched from the API and renders a list of documents
     * with their respective links.
     * @returns {React.JSX.Element[]} The list of documents rendered as links.
     */
    const renderListDocuments = () => {
        return data?.data?.attributes?.documents_list?.map((document) => {
            return (
                <p key={document.id}>
                    <Icon iconName='Check2' size={20} className='color-gray me-1' />
                    <a
                        href={document.file?.data?.attributes?.url}
                        target="_blank"
                        className="color-gray"
                        rel="noreferrer"
                    >
                        <b>{document.title}</b>
                    </a>
                </p>
            )
        })
    }

    return (
        <>
            {
                loading && (
                    <div className='container-loading'>
                        <Spinner className='color-blue' />
                    </div>
                )
            }
            {
                data && (
                    <div className="about white-background pad-60">
                        <div className="container">
                            <div className="row gy-4">
                                <div className="col-lg-6 content gestion-margin">
                                    <Fade direction="up" triggerOnce>
                                        <h2 className="mt-30 title-border">
                                            <b>{data.data?.attributes?.title}</b>
                                        </h2>
                                        <RenderParagraphs data={data.data?.attributes?.description} />
                                        <a
                                            href={data.data?.attributes?.download_code_of_ethics?.file?.data?.attributes?.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="read-more mt-2">
                                            <span>{data.data?.attributes?.download_code_of_ethics?.button_text}</span>
                                        </a>
                                    </Fade>
                                </div>

                                <div className="col-lg-6 content gestion-margin">
                                    <Fade direction="up" triggerOnce>
                                        <p>
                                            <b>{t('documents')}</b>
                                        </p>
                                        {renderListDocuments()}

                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <NotFoundData data={data} loading={loading} />

        </>

    )
}

export default InvestorESGCodeEthics