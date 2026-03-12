import React from 'react'

// ** Components
import InvestorESGSustainabilityGoals from './InvestorESGSustainabilityGoals/InvestorESGSustainabilityGoals'
import InvestorESGSustainabilityPillars from './InvestorESGSustainabilityPillars/InvestorESGSustainabilityPillars'
import InvestorESGSustainabilityConservation from './InvestorESGSustainabilityConservation/InvestorESGSustainabilityConservation'
import InvestorESGSustainabilityAchievements from './InvestorESGSustainabilityAchievements/InvestorESGSustainabilityAchievements'
import InvestorESGSustainabilityCertifications from './InvestorESGSustainabilityCertifications/InvestorESGSustainabilityCertifications'
import InvestorESGSustainabilityFaqs from './InvestorESGSustainabilityFaqs/InvestorESGSustainabilityFaqs'
import InvestorESGSustainabilitySections from './InvestorESGSustainabilitySections/InvestorESGSustainabilitySections'
import NotFoundData from '../../../../shared/NotFoundData/NotFoundData'

// ** Reactstrap
import { Spinner } from 'reactstrap'

// ** Hooks
import { useFetchData } from '../../../../../hooks/useFetchData/useFetchData'

// ** Interfaces
import { InvestorsESGSustainabilityInterface } from '../../../interfaces/InvestorsESGSustainability'

const InvestorESGSustainability = (): React.JSX.Element => {
    const { data, loading } = useFetchData<InvestorsESGSustainabilityInterface>('api/esg-sustainability');

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
                        <InvestorESGSustainabilitySections
                            data={data.data.attributes.sections}
                            dataReport={data.data.attributes.sustainability_report} />
                        <InvestorESGSustainabilityGoals section={data.data.attributes.goals} />
                        <InvestorESGSustainabilityPillars data={data.data.attributes.sustainable_model} />
                        <InvestorESGSustainabilityConservation data={data.data.attributes.sustainable_model} />
                        <InvestorESGSustainabilityAchievements section={data.data.attributes.achievements} />
                        <InvestorESGSustainabilityCertifications data={data.data.attributes.certification_catalog} />
                        <InvestorESGSustainabilityFaqs data={data.data.attributes.certification_catalog} />
                    </>
                )
            }

            <NotFoundData data={data} loading={loading} />

        </>


    )
}

export default InvestorESGSustainability