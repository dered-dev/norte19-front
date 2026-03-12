import React from "react"

// ** Components
import InvestorESGCorporateAssembly from "./InvestorESGCorporateAssembly/InvestorESGCorporateAssembly"
import InvestorESGCorporateBoard from "./InvestorESGCorporateBoard/InvestorESGCorporateBoard"
import InvestorESGStatus from "./InvestorESGStatus/InvestorESGStatus"
import InvestorESGPolitics from "./InvestorESGPolitics/InvestorESGPolitics"
import NotFoundData from "../../../../shared/NotFoundData/NotFoundData"

// ** Reactstrap
import { Spinner } from 'reactstrap'

// ** Hooks
import { useFetchData } from "../../../../../hooks/useFetchData/useFetchData"

// ** Interfaces
import { InvestorESGCorporateInterface } from "../../../interfaces/InvestorsESGCorporate"

const InvestorESGCorporate = (): React.JSX.Element => {

    const { data, loading } = useFetchData<InvestorESGCorporateInterface>('api/esg-corporate-governance');

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
                        <InvestorESGCorporateAssembly data={data.data.attributes.assembly_table} />
                        <InvestorESGCorporateBoard data={data.data.attributes.board_members} />
                        <InvestorESGStatus data={data.data.attributes.social_statues} />
                        <InvestorESGPolitics data={data.data.attributes.governance_policies} />
                    </>
                )
            }

            <NotFoundData data={data} loading={loading} />

        </>

    )
}

export default InvestorESGCorporate