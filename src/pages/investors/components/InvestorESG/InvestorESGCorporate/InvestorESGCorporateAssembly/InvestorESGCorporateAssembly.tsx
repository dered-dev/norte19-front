import React, { useState } from 'react';

// ** Components
import ButtonViewMoreLess from '../../../../../shared/ButtonViewMoreLess/ButtonViewMoreLess';

// ** Interfaces
import { Assemblytable } from '../../../../interfaces/InvestorsESGCorporate';

// ** i18n
import { useTranslation } from 'react-i18next';

const MAX_ROWS = 5;

/**
 * A functional component that renders the assembly table of the ESG page.
 * The component iterates over the data array and renders tables for each item.
 * @param {{ data: Assemblytable[] }} props - The data for the component.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorESGCorporateAssembly = ({ data }: { data: Assemblytable[] }): React.JSX.Element => {
    const { t } = useTranslation();
    const [viewMore, setViewMore] = useState(false);

    /**
     * Renders the title table for a given `Assemblytable`.
     * @param {Assemblytable} tableData - The table data to render headers.
     * @returns {React.JSX.Element} The table headers of the assembly table.
     */
    const renderTitleTable = (tableData: Assemblytable): React.JSX.Element => (
        <>
            <th key="assembly" scope="col">{tableData.Head?.assembly}</th>
            <th key="convocation" scope="col">{tableData.Head?.convocation}</th>
            <th key="resolutions" scope="col">{tableData.Head?.resolutions}</th>
            <th key="annexes" scope="col">{tableData.Head?.annexes}</th>
        </>
    );

    /**
     * Renders the body table for a given `Assemblytable`.
     * @param {Assemblytable} tableData - The table data to render rows.
     * @returns {React.JSX.Element[]} The table body of the assembly table.
     */
    const renderBodyTable = (tableData: Assemblytable): React.JSX.Element[] => {
        const rowsToRender = viewMore ? tableData.Head?.Body : tableData.Head?.Body.slice(0, MAX_ROWS);
        return rowsToRender?.map((row) => (
            <tr key={row.id}>
                <th scope="row">{row.assembly}</th>
                <td>
                    {row.convocation?.data && (
                        <a
                            href={row.convocation.data.attributes.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('download')}
                        </a>
                    )}
                </td>
                <td>
                    {row.resolutions?.data && (
                        <a
                            href={row.resolutions.data.attributes.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('download')}
                        </a>
                    )}
                </td>
                <td>
                    {row.annexes?.data && (
                        <a
                            href={row.annexes.data.attributes.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('download')}
                        </a>
                    )}
                </td>
            </tr>
        ));
    };

    return (
        <div className="about responsive-margin white-background title-history">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 order-md-2 margin-section">
                        {data.map((tableData, index) => (
                            <div key={index} className="mb-60">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead className="thead-dark">
                                            <tr>{renderTitleTable(tableData)}</tr>
                                        </thead>
                                        <tbody>{renderBodyTable(tableData)}</tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                        <div className="text-center mb-30 mt-60" style={{ visibility: data.length > MAX_ROWS ? 'visible' : 'hidden' }}>
                            <ButtonViewMoreLess viewMore={viewMore} setViewMore={setViewMore} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorESGCorporateAssembly;
