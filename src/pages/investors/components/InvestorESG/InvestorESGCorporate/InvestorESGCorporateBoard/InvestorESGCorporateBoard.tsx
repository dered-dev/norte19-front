import React from 'react'
import { Fade } from 'react-awesome-reveal'

// ** Components
import CorporateBoard from '../../../../../shared/CorporateBoard/CorporateBoard'

// ** Interfaces
import { Boardmembers } from '../../../../interfaces/InvestorsESGCorporate'

// ** Components
import RenderParagraphs from '../../../../../../components/RenderParagraphs/RenderParagraphs'

/**
 * A functional component that renders the corporate board section of the ESG page.
 * The component displays a title, a description, and a list of board members.
 * The section is animated using the Fade component from react-awesome-reveal.
 * @param {Boardmembers} data - The data for the corporate board section, including title, description, and board members list.
 * @returns {React.JSX.Element} The JSX element representing the corporate board section.
 */
const InvestorESGCorporateBoard = ({ data }: { data: Boardmembers }): React.JSX.Element => {

    return (
        <div className="about section responsive-margin">
            <div className="container section-title">
                <Fade direction="up" triggerOnce>
                    <h2>{data.title}</h2>
                </Fade>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 content text-center">
                        <Fade direction="up" triggerOnce>
                            <RenderParagraphs data={data.description} />
                        </Fade>
                    </div>
                    <CorporateBoard leaders={data.Board_members_list} />

                </div>
            </div>
        </div>
    )
}

export default InvestorESGCorporateBoard