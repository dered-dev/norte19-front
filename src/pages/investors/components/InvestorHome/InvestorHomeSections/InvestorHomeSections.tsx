import React from "react"

// ** Interfaces
import { Section } from "../../../interfaces/InvestorsHome"

// ** Components
import InvestorHomeLastReports from "../InvestorHomeLastReports/InvestorHomeLastReports"

const InvestorHomeSections = ({ data }: { data: Section[] }): React.JSX.Element => {

    return (
        <div>
            {
                data.map((section, index) => (
                    <div key={section.id} aria-label="section-investor-home">
                        <InvestorHomeLastReports data={section} index={index} />
                    </div>
                ))
            }
        </div>
    )
}

export default InvestorHomeSections