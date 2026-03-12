import React from 'react';

// ** Reactstrap
import { Spinner } from 'reactstrap'

// ** Components
import TechnologyTitle from './components/TechnologyTitle/TechnologyTitle';
import TechnologyCards from './components/TechnologyCards/TechnologyCards';
import NotFoundData from '../shared/NotFoundData/NotFoundData';

// ** Hooks
import { useFetchData } from '../../hooks/useFetchData/useFetchData';

// ** Interfaces
import { TechnologyInterface } from './interfaces/Technology';

const Technology = (): React.JSX.Element => {

  const { data, loading } = useFetchData<TechnologyInterface>('api/technology');

  return (
    <>
      {
        data && (
          <>
            <TechnologyTitle data={data.data.attributes.header} />
            <TechnologyCards section={data.data.attributes.section} />
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

export default Technology;
