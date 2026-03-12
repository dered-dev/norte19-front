import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Interfaces
import { InvestorESGTipLineInterface } from '../../../interfaces/InvestorsESGTipLine';

// ** Hooks
import { useFetchData } from '../../../../../hooks/useFetchData/useFetchData';

// ** Reactstrap
import { Spinner } from 'reactstrap'

// ** Components
import RenderParagraphs from '../../../../../components/RenderParagraphs/RenderParagraphs';
import RenderParagraphsPolicy from '../../../../../components/RenderParagraphsPolicy/RenderParagraphsPolicy';
import NotFoundData from '../../../../shared/NotFoundData/NotFoundData';

const InvestorESGTipLine = (): React.JSX.Element => {

    const { data, loading } = useFetchData<InvestorESGTipLineInterface>('api/esg-report');

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
                    <div className="about light-background-tab pad-60">
                        <div className="container">
                            <div className="row gy-4">
                                <div className="col-lg-6 content services-margin">
                                    <Fade direction="up" triggerOnce>
                                        <h2 className="mt-30 title-border">
                                            <b>{data.data.attributes.title}</b>
                                        </h2>
                                        <RenderParagraphs data={data.data.attributes.description} />
                                    </Fade>
                                </div>

                                <div className="col-lg-6 content back-denuncias text-black">
                                    <Fade direction="up" triggerOnce>
                                        <RenderParagraphsPolicy data={data.data.attributes.complaints_procedure} />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }

            <NotFoundData data={data} loading={loading} />

        </>

    )
}

export default InvestorESGTipLine