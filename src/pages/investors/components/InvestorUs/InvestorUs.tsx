import React, { useEffect } from 'react'

// ** Styles
import './../../Investors.css'

//** Components
import InvestorUsHistory from './InvestorUsHistory/InvestorUsHistory'
import InvestorUsKnowMore from './InvestorUsKnowMore/InvestorUsKnowMore'
import InvestorUsFaqs from './InvestorUsFaqs/InvestorUsFaqs'
import InvestorUsSections from './InvestorUsSections/InvestorUsSections'
import NotFoundData from '../../../shared/NotFoundData/NotFoundData'

//** Interfaces */
import { InvestorsUsInterface } from '../../interfaces/InvestorsUs'

// ** Hooks
import { useFetchData } from '../../../../hooks/useFetchData/useFetchData'

// ** Reactstrap
import { Spinner } from 'reactstrap'

const InvestorUs = ({ setTitle }: { setTitle: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element => {

    const { data, loading } = useFetchData<InvestorsUsInterface>('api/investors-about');

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
                        <InvestorUsHistory data={data.data.attributes.history} />
                        <InvestorUsSections data={data.data.attributes.history} />
                        <InvestorUsKnowMore data={data.data.attributes.factsheet} />
                        <InvestorUsFaqs data={data.data.attributes.mission_vision} />
                    </>
                )
            }

            <NotFoundData data={data} loading={loading} />

        </>
    )
}

export default InvestorUs