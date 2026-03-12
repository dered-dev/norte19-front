import React from "react";

// ** Components
import CorporateBoard from "../../../shared/CorporateBoard/CorporateBoard";

// ** Interfaces
import { Leader } from "../../interfaces/Leaders";

const LeadersBoard = ({ data }: { data: Leader[] }): React.JSX.Element => {
    return (
        <div>
            <CorporateBoard leaders={data} />
        </div>
    );
};

export default LeadersBoard;