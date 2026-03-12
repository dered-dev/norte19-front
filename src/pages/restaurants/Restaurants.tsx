import React from 'react'

// ** Components
import RestaurantHeader from './components/RestaurantHeader/RestaurantHeader'
import RestaurantTabs from './components/RestaurantTabs/RestaurantTabs'
import RestaurantFooter from './components/RestaurantFooter/RestaurantFooter';
import NotFoundData from '../shared/NotFoundData/NotFoundData';

// ** Interfaces
import { RestaurantsInterface } from './interfaces/Restaurants';

// ** Hooks
import { useFetchData } from '../../hooks/useFetchData/useFetchData';

// ** Reactstrap
import { Spinner } from 'reactstrap'

const Restaurants = (): React.JSX.Element => {
    const { data, loading } = useFetchData<RestaurantsInterface>('api/restaurant');

    return (
        <>
            {
                data && (
                    <>
                        <RestaurantHeader data={data.data.attributes.header} />
                        <RestaurantTabs />
                        <RestaurantFooter data={data.data.attributes.footer} />
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
            <NotFoundData data={data} loading={loading} />

        </>
    )
}

export default Restaurants