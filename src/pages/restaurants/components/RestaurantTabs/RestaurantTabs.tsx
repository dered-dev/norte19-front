// ** React Imports
import React, { useState } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, Spinner, TabContent, TabPane } from 'reactstrap'

// ** Styles
import './RestaurantTabs.css'

// ** Components
import RestaurantTabContent from './RestaurantTabContent/RestaurantTabContent'

// ** Hooks
import { useFetchData } from '../../../../hooks/useFetchData/useFetchData'

// ** Interfaces
import { RestaurantsPagesInterface } from '../../interfaces/RestaurantsPages'

const RestaurantTabs = (): React.JSX.Element => {

    const [active, setActive] = useState('1')
    const { data, loading } = useFetchData<RestaurantsPagesInterface>('api/restaurant-pages');

    /**
     * Toggles the active tab state.
     *
     * @param {string} tab - The tab id to toggle
     *
     * @return {void}
     */
    const toggleTab = (tab: string) => {
        if (active !== tab) {
            setActive(tab)
        }
    }


    return (
        <>
            {
                data && (
                    <>
                        <Nav pills className='mb-5 mt-5 justify-content-center gap-3'>
                            {
                                data.data.map((tab, index) => (
                                    <NavItem key={tab.id}>
                                        <NavLink active={active === `${index + 1}`} onClick={() => toggleTab(`${index + 1}`)}>
                                            {tab.attributes.title}
                                        </NavLink>
                                    </NavItem>
                                ))
                            }
                        </Nav>
                        <TabContent activeTab={active}>
                            {data.data.map((tab, index) => (
                                <TabPane key={tab.id} tabId={(index + 1).toString()}>
                                    <RestaurantTabContent tab={tab} background_url={tab.attributes.background_image.data[0].attributes.url} />
                                </TabPane>
                            ))}
                        </TabContent>
                    </>
                )
            }
            {
                loading && (
                    <div className='container-loading'>
                        <Spinner className='color-blue' />
                    </div>
                )
            }
        </>

    )
}

export default RestaurantTabs