import React from 'react'

// ** Interfaces
import { Section, Sustainabilityreport } from '../../../../interfaces/InvestorsESGSustainability'

// ** Components
import InvestorESGSustainabilityReport from '../InvestorESGSustainabilityReport/InvestorESGSustainabilityReport'
import InvestorESGSustainabilityGuessWorld from '../InvestorESGSustainabilityGuessWorld/InvestorESGSustainabilityGuessWorld'

/**
 * A functional component that renders a section of the Investor ESG Sustainability page.
 * The component renders a section with a title, a description, and a list of
 * sections. Each section is rendered by the InvestorESGSustainabilityGuessWorld
 * component. The first section is also rendered with a sustainability report
 * section, which is rendered by the InvestorESGSustainabilityReport component.
 * @param {{ data: Section[], dataReport: Sustainabilityreport }} props - The props
 * to render the component with. The data is an array of sections, and dataReport
 * is the sustainability report data.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorESGSustainabilitySections = ({ data, dataReport }: { data: Section[], dataReport: Sustainabilityreport }): React.JSX.Element => {

    return (
        <div aria-label='sections-investor-esg-sustainability'>
            {
                data.map((section: Section, index: number) => (
                    <div key={index} className="col-12">
                        <InvestorESGSustainabilityGuessWorld data={section} />
                        {
                            index === 0 && (
                                <InvestorESGSustainabilityReport
                                    data={dataReport} />

                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default InvestorESGSustainabilitySections