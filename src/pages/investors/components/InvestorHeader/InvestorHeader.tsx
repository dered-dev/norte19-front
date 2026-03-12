import React, { useEffect } from "react"
import { Fade, Zoom } from "react-awesome-reveal"

// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from 'reactstrap'

// ** Styles
import './InvestorHeader.css'


// ** Hooks
import { useFetchData } from "../../../../hooks/useFetchData/useFetchData"

// ** Interfaces
import { InvestorsHeaderInterface, Tab } from "../../interfaces/InvestorsHeader"

// ** Components
import InvestorHomeHeader from "../InvestorHome/InvestorHomeHeader/InvestorHomeHeader"
import InvestorUsHeader from "../InvestorUs/InvestorUsHeader/InvestorUsHeader"
import BreadCrumbHeader from "../../../shared/BreadCrumbHeader/BreadCrumbHeader"

interface InvestorHeaderProps {
    active: string;
    toggleTab: (tab: string) => void;
    title: string;
    setTabs: (tabs: Tab[]) => void;
}


/**
 * A functional component that renders the header section of the Investor page.
 * The component renders a section with a title, a subtitle, and a list of tabs.
 * The component uses the Fade animation effect from react-awesome-reveal.
 * @param {{ active: string; toggleTab: (tab: string) => void; title: string; }} props - The props for the component.
 * @returns {React.JSX.Element} The JSX element representing the header section.
 */
const InvestorHeader = ({ active, toggleTab, title, setTabs }: InvestorHeaderProps): React.JSX.Element => {
    const { data } = useFetchData<InvestorsHeaderInterface>('api/investors-header');

    /**
     * Checks if the active tab is the Home tab and renders the corresponding header
     * component with the data and title provided as props.
     * @returns {React.JSX.Element} The rendered header component.
     */
    const checkTitleHeader = (): React.JSX.Element => {
        const findIndex = data?.data.attributes.header.tabs.findIndex((tab) => tab.id === parseInt(active));
        if (findIndex !== undefined && findIndex !== -1 && data?.data.attributes.header.tabs[findIndex].api_url === "investors-home") {
            return (
                <InvestorHomeHeader
                    data={data?.data.attributes.header}
                    title={title} />
            )
        }

        return (
            <InvestorUsHeader
                data={data?.data?.attributes?.header}
                title={title} />
        )

    }

    useEffect(() => {
        if (data) {
            setTabs(data.data.attributes.header.tabs)
        }
    }, [data])

    return (
        <div>
            {
                data && (
                    <Fade direction="up" triggerOnce>
                        <div
                            className="dark-background inversionistas-banner img-header"
                            style={{ backgroundImage: `url(${data.data?.attributes?.header?.banner?.data?.attributes?.url})` }}>
                            <BreadCrumbHeader url="investors" />


                            <div className="call-to-action banner-page">
                                <div className="container">
                                    <div className="row">
                                        <Zoom triggerOnce>
                                            <div className="col-xl-12">
                                                <div className="text-left">
                                                    <Nav pills className='mb-5 mt-2 gap-3 investor-tab'>
                                                        {
                                                            data.data?.attributes?.header?.tabs.map((tab) => (
                                                                <NavItem key={tab.id}>
                                                                    <NavLink
                                                                        aria-label="investor-tab"
                                                                        active={active === tab.id.toString()}
                                                                        onClick={() => toggleTab(tab.id.toString())}>
                                                                        {tab.name}
                                                                    </NavLink>
                                                                </NavItem>
                                                            ))
                                                        }
                                                    </Nav>
                                                </div>
                                            </div>
                                        </Zoom>

                                    </div>
                                </div>
                            </div>

                            {checkTitleHeader()}
                        </div>
                    </Fade>
                )
            }
        </div>
    )
}

export default InvestorHeader