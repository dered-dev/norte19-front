import React from "react";

// ** Reactstrap Imports
import { Button } from "reactstrap";

// ** Interfaces
import { Datum, StockInformationInterface } from "../../services/interfaces/StockInformation";
import { Stockinfo } from "../../../../../interfaces/InvestorBursatil";

// ** Services
import { getStockForDownload } from "../../services/Graphics";

const InvestorBursatilActionDownload = ({ data }: { data: Stockinfo }) => {


    const convertToCSV = (objArray: Datum[]) => {

        // Create CSV header from the keys of the first item's attributes
        const firstItemAttributes = objArray[0].attributes;
        const headers = ['ID', ...Object.keys(firstItemAttributes)];
        const csvRows = [headers.join(',')]; // Initialize with headers

        // Process each data object
        for (const item of objArray) {
            const values = [
                item.id,
                ...Object.values(item.attributes) // Extract values based on attributes
            ];
            csvRows.push(values.join(',')); // Join values with commas
        }

        // Join all rows with newline characters
        return csvRows.join('\r\n');
    };
    const downloadCSV = (response: StockInformationInterface) => {
        const csvData = new Blob([convertToCSV(response.data)], { type: 'text/csv' });
        const csvURL = URL.createObjectURL(csvData);
        const link = document.createElement('a');
        link.href = csvURL;
        link.download = `historico.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const dataForCSV = async () => {
        const response: StockInformationInterface | undefined = await getStockForDownload();
        if (response) {
            downloadCSV(response)
        }
    }
    return (
        <div>
            <Button
                className="download-btn"
                outline
                aria-label="download-btn"
                onClick={dataForCSV}
            >
                <span>{data.graph_button_title}</span>
            </Button>
        </div>
    );
};

export default InvestorBursatilActionDownload