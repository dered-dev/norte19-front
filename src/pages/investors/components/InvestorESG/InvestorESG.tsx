import React, { useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Styles
import './InvestorESG.css'

// ** Components
import InvestorESGTipLine from './InvestorESGTipLine/InvestorESGTipLine'
import InvestorESGCodeEthics from './InvestorESGCodeEthics/InvestorESGCodeEthics'
import InvestorESGCorporate from './InvestorESGCorporate/InvestorESGCorporate'
import InvestorESGSustainability from './InvestorESGSustainability/InvestorESGSustainability'

// ** Hooks
import { useFetchData } from '../../../../hooks/useFetchData/useFetchData'

// ** Interfaces
import { InvestorsESGInterface, Tab } from '../../interfaces/InvestorsESG'

/**
 * InvestorESG component
 *
 * This component renders the ESG section of the Investors page.
 * It fetches the data from the API and renders the content based on the
 * API endpoint URL.
 *
 * @param {React.Dispatch<React.SetStateAction<string>>} setTitle - The function to set the title of the page
 *
 * @returns {React.JSX.Element} The rendered content
 */
const InvestorESG = ({ setTitle }: { setTitle: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element => {

    const { data } = useFetchData<InvestorsESGInterface>('api/investors-esg');
    const [active, setActive] = useState<string>('1')
    const [tabs, setTabs] = useState<Tab[]>([]);

    useEffect(() => {
        if (data) {
            setTitle(data?.data?.attributes?.title)
            setTabs(data?.data?.attributes?.tabs)
        }
    }, [data])

    /**
     * Renders the content for a given tab based on the API endpoint URL
     * @param {string} apiUrl - The API endpoint URL
     * @returns {ReactElement} The rendered content
     */
    const renderContent = (apiUrl: string): React.ReactNode => {
        switch (apiUrl) {
            case 'esg-sustainability':
                return <InvestorESGSustainability />;
            case 'esg-corporate-governance':
                return <InvestorESGCorporate />;
            case 'esg-code-of-ethic':
                return <InvestorESGCodeEthics />;
            case 'esg-report':
                return <InvestorESGTipLine />;
        }
    };

    /**
     * Toggles the active tab state.
     *
     * @param {string} tab - The tab id to toggle
     *
     * @return {void}
     */
    const toggleTab = (tab: string): void => {
        if (active !== tab) {
            setActive(tab)
        }
    }


    return (
        <>
            <Nav pills className='mb-5 mt-5 justify-content-center gap-3'>
                {
                    tabs.map((tab, index) => (
                        <NavItem key={tab.title}>
                            <NavLink active={active === `${index + 1}`} onClick={() => toggleTab(`${index + 1}`)}>
                                {tab.title}
                            </NavLink>
                        </NavItem>
                    ))
                }
            </Nav>
            <TabContent activeTab={active}>
                {tabs.map((tab, index) => (
                    <TabPane key={tab.title} tabId={(index + 1).toString()}>
                        {renderContent(tabs[parseInt(active) - 1].api_url)}
                    </TabPane>
                ))}
            </TabContent>
        </>
    )
}

export default InvestorESG