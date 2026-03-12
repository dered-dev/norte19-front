import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// ** Reactstrap Imports
import { TabContent, TabPane } from 'reactstrap'

// ** Styles
import './Investors.css'

// ** Components
import InvestorHeader from './components/InvestorHeader/InvestorHeader'
import InvestorHome from './components/InvestorHome/InvestorHome'
import InvestorUs from './components/InvestorUs/InvestorUs'
import InvestorFinancial from './components/InvestorFinancial/InvestorFinancial'
import InvestorBursatil from './components/InvestorBursatil/InvestorBursatil'
import InvestorContact from './components/InvestorContact/InvestorContact'
import InvestorESG from './components/InvestorESG/InvestorESG'

// ** Interfaces
import { Tab } from './interfaces/InvestorsHeader'

/**
 * Renders the Investors component based on the active tab state.
 * Toggles the active tab state and updates the tab titles and loaded tabs.
 * Renders the component based on the API URL provided.
 *
 * @param {string} tab - The tab id to toggle
 * @return {void}
 */
const Investors = (): React.JSX.Element => {
    const [active, setActive] = useState('1')
    const [title, setTitle] = useState('')
    const [tabTitles, setTabTitles] = useState<{ [key: string]: string }>({})
    const [loadedTabs, setLoadedTabs] = useState<{ [key: string]: boolean }>({})
    const [tabs, setTabs] = useState<Tab[]>([])
    const { activeTab } = useParams()

    /**
     * Toggles the active tab state.
     *
     * @param {string} tab - The tab id to toggle
     *
     * @return {void}
     */
    const toggleTab = (tab: string): void => {
        if (active !== tab) {
            setTitle(tabTitles[tab] || '')
            setActive(tab)

            // Mark the tab as loaded if it's the first time opening
            if (!loadedTabs[tab]) {
                setLoadedTabs(prev => ({
                    ...prev,
                    [tab]: true
                }))
            }
        }
    }

    /**
     * Update tab titles state whenever the title is set
     */
    useEffect(() => {
        if (title) {
            setTabTitles(prev => ({
                ...prev,
                [active]: title // Save the title for the active tab
            }))
        }
    }, [title, active])


    /**
     * Renders the component based on the API URL
     *
     * @param {string} apiUrl - The API URL for the component
     *
     * @returns {React.JSX.Element | null} The rendered component
     */
    const renderComponentByApiUrl = (apiUrl: string): React.JSX.Element | null => {
        switch (true) {
            case apiUrl.includes('investors-home'):
                return <InvestorHome setTitle={setTitle} />;
            case apiUrl.includes('investors-about'):
                return <InvestorUs setTitle={setTitle} />;
            case apiUrl.includes('investors-financial'):
                return <InvestorFinancial setTitle={setTitle} />;
            case apiUrl.includes('investors-stock-market'):
                return <InvestorBursatil setTitle={setTitle} />;
            case apiUrl.includes('investors-esg'):
                return <InvestorESG setTitle={setTitle} />;
            case apiUrl.includes('investors-contact'):
                return <InvestorContact setTitle={setTitle} />;
            default:
                return null;
        }

    }

    useEffect(() => {
        if (tabs.length > 0) {

            if (activeTab) {
                const activeTabMatch = tabs.find((tab) => tab.api_url === activeTab);
                if (activeTabMatch) {
                    toggleTab(activeTabMatch.id.toString())
                }

                return
            }

            setActive(tabs[0].id.toString())
            setLoadedTabs(prev => ({
                ...prev,
                [tabs[0].id.toString()]: true
            }))
        }
    }, [tabs, activeTab])

    return (
        <>
            <InvestorHeader
                active={active}
                toggleTab={toggleTab}
                title={title}
                setTabs={setTabs} />

            <TabContent activeTab={active}>
                {tabs.map((tab) => (
                    <TabPane tabId={tab.id.toString()} key={tab.id}>
                        {loadedTabs[tab.id.toString()] && renderComponentByApiUrl(tab.api_url)}
                    </TabPane>
                ))}
            </TabContent>
        </>
    )
}

export default Investors
