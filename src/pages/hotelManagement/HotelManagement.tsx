import React from 'react';

// ** Hooks
import { useFetchData } from '../../hooks/useFetchData/useFetchData';

// ** Interfaces
import { HomeManagementInterface } from './interfaces/HomeManagement';

// ** Reactstrap
import { Spinner } from 'reactstrap'

// ** Components
import HotelManagementTitle from './components/hotelManagementTitle/HotelManagementTitle';
import HotelManagementClients from './components/hotelManagementClients/HotelManagementClients';
import HotelManagementOperation from './components/hotelManagementOperation/HotelManagementOperation';
import HotelManagementAbout from './components/hotelManagementAbout/HotelManagementAbout';
import HotelManagementDevelopment from './components/hotelManagementDevelopment/HotelManagementDevelopment';
import HotelManagementTechnology from './components/hotelManagementTechnology/HotelManagementTechnology';
import NotFoundData from '../shared/NotFoundData/NotFoundData';

/**
 * A React functional component that renders a section of the webpage showcasing the hotel management services provided by Norte 19.
 * 
 * @return {React.JSX.Element} A JSX element representing the hotel management services section.
 */
const HotelManagement = () => {

  const { data, loading } = useFetchData<HomeManagementInterface>('api/hotel-management');

  return (
    <>
      {
        data && (
          <>
            <HotelManagementTitle data={{
              page_description: data.data.attributes.page_description,
              slider_background: data.data.attributes.slider_background,
              title: data.data.attributes.title
            }} />
            <HotelManagementClients data={data.data.attributes.section_with_slider} />
            <HotelManagementOperation data={data.data.attributes.sections[0]} />
            <HotelManagementAbout data={data.data.attributes.sections[1]} />
            <HotelManagementDevelopment data={data.data.attributes.sections[2]} />
            <HotelManagementTechnology data={data.data.attributes.sections[3]} />
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
  );
};

export default HotelManagement;
