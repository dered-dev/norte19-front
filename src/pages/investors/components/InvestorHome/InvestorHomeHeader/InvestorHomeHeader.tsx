import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Icon } from '../../../../../components/Icon/Icon'

// ** Interfaces
import { Header } from '../../../interfaces/InvestorsHeader'

// ** i18n
import { useTranslation } from 'react-i18next'

/**
 * A functional component that renders the header section of the Investor Home page.
 * The component renders a section with a subtitle, a heading, and a list of download links.
 * The component uses the Fade animation effect from react-awesome-reveal.
 * @param {Header} data - The data for the header section.
 * @returns {React.JSX.Element} The JSX element representing the header section.
 */
const InvestorHomeHeader = ({ data, title }: { data: Header, title: string }): React.JSX.Element => {

    const { t } = useTranslation()

    /**
     * Function to render download links
     * @returns {JSX.Element[]}
     */
    const renderDownload = (): React.JSX.Element[] => {
        return data.downloads.map((download) => {
            return (
                <p key={download.id}>
                    <Icon iconName='Check2' size={20} className='color-white' />
                    <a
                        href={download.document?.data?.attributes?.url}
                        target="_blank"
                        className="color-white mt-30 ms-1"
                        rel="noreferrer"
                    >
                        {download.name}
                    </a>
                </p>
            )
        })
    }

    return (

        <div className="container text-left">
            <div className="row gy-4">
                <div className="col-lg-6 content services-margin">
                    <Fade direction="up" triggerOnce>
                        <p className="color-white">{data.subtitle}</p>
                        <h2 className="mt-30 color-white title-header">
                            <b>{title}</b>
                        </h2>
                    </Fade>
                </div>

                <div className="col-lg-6 content services-margin">
                    <Fade direction="up" triggerOnce>
                        <h6 className="color-white">{t('downloads')}</h6>
                        {renderDownload()}
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default InvestorHomeHeader