import React from "react"
import { Fade } from "react-awesome-reveal"

// ** Interfaces
import { Analystcoverage, Analystcoveragetable } from "../../../interfaces/InvestorBursatil"


const InvestorBursatilCoverage = ({ dataHeader, dataTable }: { dataHeader: Analystcoverage, dataTable: Analystcoveragetable }): React.JSX.Element => {


    const renderHeaderTable = (): React.JSX.Element[] => {
        const headers = Object.keys(dataTable.analyst_coverage_table_header).filter(key => key !== 'id');

        return headers.map((header) => {
            return (
                <th key={header} scope="col">{header.replace(/_/g, ' ').toUpperCase()}</th> // Replace underscores and capitalize
            );
        });
    };

    const renderTableBody = (): React.JSX.Element[] => {
        return dataTable.analyst_coverage_table_body.map((row) => (
            <tr key={row.id}>
                <th scope="row">{row.financial_institution}</th>
                <td>{row.analyst}</td>
                <td>{row.email}</td>
                <td>{row.recommendation}</td>
                <td>{row.target_price}</td>
            </tr>
        ));
    };

    return (
        <>
            <div className="container margin-section">
                <Fade direction="up" triggerOnce>
                    <h2 className="title-border">
                        <b>{dataHeader.title}</b>
                    </h2>
                </Fade>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 margin-section order-md-1">
                        <Fade direction="up" triggerOnce>
                            <img
                                src={dataHeader.banner?.data?.attributes?.url}
                                className='img-fluid w-100'
                                alt="historia"
                            />
                        </Fade>
                    </div>
                    <div className="col-lg-12 order-md-2 margin-section mt-30">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        {renderHeaderTable()}
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableBody()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvestorBursatilCoverage