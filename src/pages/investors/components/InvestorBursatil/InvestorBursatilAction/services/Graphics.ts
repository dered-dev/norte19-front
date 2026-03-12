import axios from "axios";

// ** Interface
import { StockInformationInterface } from "./interfaces/StockInformation";
import { DataByYear } from "./interfaces/StockInformationGraphic";

export const getStockForDownload = async (pageSize: number = 365): Promise<StockInformationInterface | undefined> => {
    try {
        const language = localStorage.getItem('language') || 'es-mx';
        
        // Calculate date for one year ago
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const formattedDate = oneYearAgo.toISOString().split('T')[0]; // Format as YYYY-MM-DD

        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/stock-informations`, {
            params: { 
                populate: 'deep', 
                locale: language, 
                pagination: { pageSize },
                filters: {
                    operation_date: { $gte: formattedDate } 
                }
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getGraphicOneWeek = async (): Promise<StockInformationInterface | undefined> => {
    try {
        const language = localStorage.getItem('language') || 'es-mx';

        // Calculate date for one week ago
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const formattedDate = oneWeekAgo.toISOString().split('T')[0]; 

        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/stock-informations`, {
            params: { 
                populate: 'deep', 
                locale: language,
                filters: {
                    operation_date: { $gte: formattedDate }
                }
            },
        });
        return response.data as StockInformationInterface;
    } catch (error) {
        console.log("error getGraphicOneWeek",error);
    }
};

const getDatesByTab = (tab: string): { startDate: string; endDate: string } | undefined => {
    const endDate = new Date(); // Current date
    let startDate: Date;

    switch (tab) {
        case '1M':
            startDate = new Date(endDate);
            startDate.setMonth(endDate.getMonth() - 1);
            break;
        case '3M':
            startDate = new Date(endDate);
            startDate.setMonth(endDate.getMonth() - 3);
            break;
        case '6M':
            startDate = new Date(endDate);
            startDate.setMonth(endDate.getMonth() - 6);
            break;
        case '1A':
            startDate = new Date(endDate);
            startDate.setFullYear(endDate.getFullYear() - 1);
            break;
        case '5A':
            startDate = new Date(endDate);
            startDate.setFullYear(endDate.getFullYear() - 5);
            break;
        default:
            return undefined; // Handle invalid tab
    }

    return {
        startDate: startDate.toISOString().split('T')[0], // Format to 'YYYY-MM-DD'
        endDate: endDate.toISOString().split('T')[0],     // Format to 'YYYY-MM-DD'
    };
};


export const getGraphicByPeriod = async (period: string, tab: string): Promise<DataByYear | undefined> => {
    try {
        const dateRange = getDatesByTab(tab);
        if (!dateRange) {
            return undefined;
        }

        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/stock-information/graphic`, {
            params: { 
                period,
                startDate: dateRange.startDate,
                endDate: dateRange.endDate,
            },
        });
        return response.data as DataByYear;
    } catch (error) {
        console.log("error getGraphicByPeriod",error);
    }
};
