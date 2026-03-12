import React from 'react'

// ** Components
import HomeCarousel from './components/homeCarousel/HomeCarousel'
import HomeAbout from './components/homeAbout/HomeAbout'
import HomeServices from './components/homeServices/HomeServices'
import HomeMoreServices from './components/homeMoreServices/HomeMoreServices'
import HomeCallToServices from './components/homeCallToServices/HomeCallToServices'
import HomeSustainability from './components/homeSustainability/HomeSustainability'
import HomeSections from './components/homeSections/HomeSections'

// ** Hooks
import { useFetchData } from '../../hooks/useFetchData/useFetchData'

// ** Interfaces
import { HomeInterface } from './interfaces/Home'

// ** Reactstrap
import { Spinner } from 'reactstrap'
import NotFoundData from '../shared/NotFoundData/NotFoundData'

/**
 * A functional component that renders the Home page of the website.
 * 
 * The component renders all the sections of the Home page, including the
 * carousel, about us, services, more services, projects, call to action, project
 * description, technology, call to services, and sustainability sections.
 * 
 * @return {React.JSX.Element} The JSX element representing the Home page.
 */
const Home = (): React.JSX.Element => {
  const { data, loading } = useFetchData<HomeInterface>('api/home');

  return (
    <>
      {
        data && (
          <>
            <HomeCarousel data={data.data.attributes.home_slider} />
            <HomeAbout data={data.data.attributes.About_us} />
            <HomeServices data={data.data.attributes.About_us} />
            <HomeMoreServices data={data.data.attributes.Our_services} />
            <HomeSections data={data.data.attributes.Our_services} />
            <HomeCallToServices data={data.data.attributes.Our_services} />
            <HomeSustainability data={data.data.attributes.sustainability} />
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

export default Home