import React, { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Styles
import './InvestorBursatilActionGraphic.css'

// ** Services
import { getGraphicByPeriod, getGraphicOneWeek } from "../../services/Graphics";
import { Datum } from "../../services/interfaces/StockInformation";

// ** Third library imports
import Chart from 'react-apexcharts'
import { DataByYear } from "../../services/interfaces/StockInformationGraphic";

interface ChartData {
    categories: string[];
    series: { name: string; data: number[] }[];
}

const InvestorBursatilActionGraphic = (): React.JSX.Element => {

    const tabsGraphic = [
        '1S', '1M', '3M', '6M', '1A', '5A'
    ]

    const [active, setActive] = useState('1S')
    const [chartData, setChartData] = useState<ChartData>({
        categories: [],
        series: [{ name: 'Maximum Price', data: [] as number[] }],
    });

    const chartOptions: ApexCharts.ApexOptions = {
        chart: {
            type: "line",
            height: 350,
        },
        xaxis: {
            categories: chartData.categories,
            labels: {
                style: {
                    colors: "#ffffff",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#ffffff",
                },
            },
        },
        colors: ["#FFEC43"],
        tooltip: {
            theme: "dark",
        },
    };

    /**
    * Toggles the active tab state.
    *
    * @param {string} tab - The tab id to toggle
    *
    * @return {void}
    */
    const toggleTab = (tab: string): void => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    const prepareChartDataForYearlyData = (data: DataByYear) => {
        const categories = Object.keys(data).map(year => data[year].startOfPeriod.split('T')[0]); // Extract startOfPeriod as categories

        const seriesData = categories.map((_, index) => {
            const values = data[Object.keys(data)[index]].values.map(Number); // Convert values to numbers
            const average = values.reduce((sum, value) => sum + value, 0) / values.length;

            return Number(average.toFixed(2)); // Return the average formatted to 2 decimal places
        });

        return { categories, seriesData };
    };

    const prepareChartDataForDatumArray = (data: Datum[]) => {
        const categories = data.map(datum => datum.attributes.operation_date);
        const seriesData = data.map(datum => parseFloat(datum.attributes.maximum_price));
        return { categories, seriesData };
    };


    const fetchStockData = async () => {
        try {
            let data;
            setChartData({ categories: [], series: [] });
            switch (active) {
                case '1S':
                    data = await getGraphicOneWeek();
                    break;
                case '1M':
                    data = await getGraphicByPeriod('week', '1M');
                    break;
                case '3M':
                    data = await getGraphicByPeriod('week', '3M');
                    break;
                case '6M':
                    data = await getGraphicByPeriod('month', '6M');
                    break;
                case '1A':
                    data = await getGraphicByPeriod('month', '1A');
                    break;
                case '5A':
                    data = await getGraphicByPeriod('year', '5A');
                    break;
            }

            if (!data) {
                setChartData({ categories: [], series: [] });
                return
            }

            if (Array.isArray(data.data)) {
                const { categories, seriesData } = prepareChartDataForDatumArray(data.data);

                setChartData({
                    categories,
                    series: [{ name: 'Maximum Price', data: seriesData }],
                });
            } else {
                const { categories, seriesData } = prepareChartDataForYearlyData(data as DataByYear);
                setChartData({
                    categories,
                    series: [{ name: 'Maximum Price', data: seriesData }],
                });
            }
        } catch (error) {
            setChartData({ categories: [], series: [] });
            console.log("Error fetching stock data:", error);
        }
    };

    useEffect(() => {
        fetchStockData();
    }, [active]);

    return (
        <>
            <Nav pills className='mb-5 mt-5 gap-3 investor-bursatil-tab'>
                {
                    tabsGraphic.map((tab) => (
                        <NavItem key={tab}>
                            <NavLink
                                className="nav-link-graphic"
                                active={active === tab}
                                onClick={() => toggleTab(tab)}>
                                {tab}
                            </NavLink>
                        </NavItem>
                    ))
                }
            </Nav>
            <TabContent activeTab={active} className="container-tab-graphic">
                {tabsGraphic.map((tab) => (
                    <TabPane key={tab} tabId={tab}>
                        <div>
                            <Fade direction="up" triggerOnce>
                                {
                                    chartData.categories.length ? (
                                        <Chart
                                            options={chartOptions}
                                            series={chartData.series}
                                            type="line"
                                            height={350}
                                            className="action-graphic"
                                        />
                                    ) : null
                                }


                            </Fade>
                        </div>

                    </TabPane>
                ))}

            </TabContent>
        </>
    );
}

export default InvestorBursatilActionGraphic