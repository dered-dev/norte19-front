import React, { useEffect } from 'react'

//** Components */
import InvestorHomeNumbers from './InvestorHomeNumbers/InvestorHomeNumbers';
import InvestorHomeMoreInfo from './InvestorHomeMoreInfo/InvestorHomeMoreInfo';
import InvestorHomeSections from './InvestorHomeSections/InvestorHomeSections';
import NotFoundData from '../../../shared/NotFoundData/NotFoundData';

//** Hooks */
import { useFetchData } from '../../../../hooks/useFetchData/useFetchData';

//** Interfaces */
import { InvestorsHomeInterface } from '../../interfaces/InvestorsHome';

// ** Reactstrap
import { Spinner } from 'reactstrap'

const InvestorHome = ({ setTitle }: { setTitle: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element => {

    const { data, loading } = useFetchData<InvestorsHomeInterface>('api/investors-home');

    useEffect(() => {
        if (data) {
            setTitle(data?.data?.attributes?.title)
        }
    }, [data])

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
                    <>
                        <InvestorHomeSections data={data.data.attributes.sections} />

                        <InvestorHomeNumbers data={data.data.attributes.in_numbers} />

                        <InvestorHomeMoreInfo data={data.data.attributes.in_numbers} />
                    </>
                )
            }

            <NotFoundData data={data} loading={loading} />

        </>
    )
}

export default InvestorHome