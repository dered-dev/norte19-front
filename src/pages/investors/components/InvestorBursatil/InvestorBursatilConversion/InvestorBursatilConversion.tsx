import React from "react";
import { Zoom } from "react-awesome-reveal";

// ** Interfaces
import { Shareholdingdonutbar } from "../../../interfaces/InvestorBursatil";

// ** Styles
import './InvestorBursatilConversion.css'

// ** Third library imports
import Chart from 'react-apexcharts'

/**
 * A functional component that renders a section of the Investor Bursatil page.
 * The component renders a section with a heading, a donut chart, and a legend.
 * The component uses the Zoom component from react-awesome-reveal to animate the section.
 * @param {{ data: Shareholdingdonutbar }} props - The data for the component.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const InvestorBursatilConversion = ({ data }: { data: Shareholdingdonutbar }): React.JSX.Element => {

    const colors = ['#272B67', '#9497A1'];

    const series = data.fields.map((field) => parseFloat(field.value));

    const options = {
        chart: {
            toolbar: { show: false },
        },
        labels: data.fields.map(field => field.label),
        dataLabels: {
            enabled: true,
            formatter: (val: number) => `${val.toFixed(0)}%`,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                colors: ['#fff']

            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                opacity: 0.7
            }
        },
        legend: {
            show: false
        },
        colors: colors,

    };

    return (
        <div className="section light-blue">
            <div className="container">
                <Zoom triggerOnce>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 align-content-center">
                            <div className="text-center">
                                <h3>
                                    <b>{data.title}</b>
                                </h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    {data.fields.map((field, index) => (
                                        <div
                                            className="d-flex align-items-center justify-content-center mx-2 mt-4"
                                            key={field.id}>
                                            <div className="circle-donut" style={{ backgroundColor: colors[index % colors.length] }}></div>
                                            <span className="ml-2">{field.label} = <span className="text-value-donut">{field.value}</span></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 img-accionaria">
                            <div className="text-center">
                                <Chart
                                    options={options}
                                    series={series}
                                    type="donut"
                                    width="350"
                                    height="350"
                                />
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default InvestorBursatilConversion;
