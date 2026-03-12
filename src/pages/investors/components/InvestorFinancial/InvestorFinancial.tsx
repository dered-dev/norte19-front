import React, { useEffect } from 'react'

// ** Components
import InvestorFinancialReports from './InvestorFinancialReports/InvestorFinancialReports'
import InvestorFinancialPresentation from './InvestorFinancialPresentation/InvestorFinancialPresentation'
import InvestorFinancialProspect from './InvestorFinancialProspect/InvestorFinancialProspect'
import InvestorFinancialFstay from './InvestorFinancialFstay/InvestorFinancialFstay'
import NotFoundData from '../../../shared/NotFoundData/NotFoundData'

// ** Hooks
import { useFetchData } from '../../../../hooks/useFetchData/useFetchData'

// ** Interfaces
import { InvestorsFinancialInterface } from '../../interfaces/InvestorsFinancial'

// ** Reactstrap
import { Spinner } from 'reactstrap'

const InvestorFinancial = ({ setTitle }: { setTitle: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element => {

    const { data, loading } = useFetchData<InvestorsFinancialInterface>('api/investors-financial');

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
                    <div className="about responsive-margin white-background title-history mt-5">
                        <InvestorFinancialReports data={data.data.attributes.report_section} dataReports={data.data.attributes.reports} />
                        <InvestorFinancialPresentation data={data.data.attributes.corporate_presentation} />
                        <InvestorFinancialProspect data={data.data.attributes.section_prospectuses} />
                        <InvestorFinancialFstay data={data.data.attributes.section_ftsay} />
                    </div>

                )
            }

            <NotFoundData data={data} loading={loading} />

        </>

    )
}

export default InvestorFinancial