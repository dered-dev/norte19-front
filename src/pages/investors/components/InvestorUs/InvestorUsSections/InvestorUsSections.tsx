import React from "react"

// ** Interfaces
import { History } from "../../../interfaces/InvestorsUs"
import InvestorUsSolutions from "../InvestorUsSolutions/InvestorUsSolutions"

/**
 * A functional component that renders a section of the Investor Us page.
 * The component renders a section with a title, a description, and a list of
 * sections. Each section is rendered by the InvestorUsSolutions component.
 * The component is used to render the sections of the Investor Us page.
 * @param {History} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorUsSections = ({ data }: { data: History }): React.JSX.Element => {

    return (
        <div>
            {
                data.section.map((section) => (
                    <div key={section.id} aria-label="section-investor-us">
                        <InvestorUsSolutions data={section} />
                    </div>
                ))
            }
        </div>
    )
}

export default InvestorUsSections