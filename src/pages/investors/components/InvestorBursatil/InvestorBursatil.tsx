import React, { useEffect } from 'react'

// ** Styles
import './InvestorBursatil.css'

// ** Components
import InvestorBursatilCoverage from './InvestorBursatilCoverage/InvestorBursatilCoverage'
import InvestorBursatilAction from './InvestorBursatilAction/InvestorBursatilAction'
import InvestorBursatilConversion from './InvestorBursatilConversion/InvestorBursatilConversion'
import InvestorBursatilEvents from './InvestorBursatilEvents/InvestorBursatilEvents'
import InvestorBursatilNextEvents from './InvestorBursatilNextEvents/InvestorBursatilNextEvents'
import NotFoundData from '../../../shared/NotFoundData/NotFoundData'

// ** Hooks
import { useFetchData } from '../../../../hooks/useFetchData/useFetchData'

// ** Interfaces
import { InvestorBursatilInterface } from '../../interfaces/InvestorBursatil'

// ** Reactstrap
import { Spinner } from 'reactstrap'

const InvestorBursatil = ({ setTitle }: { setTitle: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element => {

    const { data, loading } = useFetchData<InvestorBursatilInterface>('api/investors-stock-market');

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
                    <div className="about responsive-margin mt-30 white-background title-history">
                        <InvestorBursatilCoverage
                            dataHeader={data.data.attributes.analyst_coverage}
                            dataTable={data.data.attributes.analyst_coverage_table} />

                        <InvestorBursatilAction data={data.data.attributes.stock_info} />

                        <InvestorBursatilConversion data={data.data.attributes.shareholding_donut_bar} />

                        <InvestorBursatilEvents data={data.data.attributes.press_releases} />

                        <InvestorBursatilNextEvents data={data.data.attributes.upcoming_events} />

                    </div>
                )
            }

            <NotFoundData data={data} loading={loading} />

        </>

    )
}

export default InvestorBursatil