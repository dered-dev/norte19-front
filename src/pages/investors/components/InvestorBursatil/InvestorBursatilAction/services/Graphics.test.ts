import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import axios from 'axios';
import { getStockForDownload, getGraphicOneWeek, getGraphicByPeriod } from './Graphics';
import { StockInformationInterface } from './interfaces/StockInformation';
import { DataByYear } from './interfaces/StockInformationGraphic'; 

// Mock axios
vi.mock('axios');

describe('Stock Information API Functions', () => {
    const mockStockData: StockInformationInterface = {
        data: [],
        meta: {
            pagination: {
                page: 1,
                pageSize: 10,
                pageCount: 1,
                total: 0
            }
        }};
    const mockGraphicData: DataByYear = { /* ...mock data structure... */ };

    beforeEach(() => {
        localStorage.clear();
    });

    describe('getStockForDownload', () => {
        it('should return stock information for the past year', async () => {
            (axios.get as Mock).mockResolvedValueOnce({ data: mockStockData });
            const result = await getStockForDownload();
            expect(result).toEqual(mockStockData);
            expect(axios.get).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
                params: expect.objectContaining({
                    filters: {
                        operation_date: { $gte: expect.any(String) }
                    }
                })
            }));
        });

        it('should handle errors gracefully', async () => {
            (axios.get as Mock).mockRejectedValueOnce(new Error('Network error'));
            const result = await getStockForDownload();
            expect(result).toBeUndefined();
        });
    });

    describe('getGraphicOneWeek', () => {
        it('should return stock information for the past week', async () => {
            (axios.get as Mock).mockResolvedValueOnce({ data: mockStockData });
            const result = await getGraphicOneWeek();
            expect(result).toEqual(mockStockData);
            expect(axios.get).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
                params: expect.objectContaining({
                    filters: {
                        operation_date: { $gte: expect.any(String) }
                    }
                })
            }));
        });

        it('should handle errors gracefully', async () => {
            (axios.get as Mock).mockRejectedValueOnce(new Error('Network error'));
            const result = await getGraphicOneWeek();
            expect(result).toBeUndefined();
        });
    });

    describe('getGraphicByPeriod', () => {
        it('should return graphic data for the specified period', async () => {
            (axios.get as Mock).mockResolvedValueOnce({ data: mockGraphicData });
            const result = await getGraphicByPeriod('somePeriod', '1M'); // Use a valid period and tab
            expect(result).toEqual(mockGraphicData);
            expect(axios.get).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
                params: expect.objectContaining({
                    period: 'somePeriod',
                    startDate: expect.any(String),
                    endDate: expect.any(String),
                })
            }));
        });

        it('should return undefined for an invalid tab', async () => {
            const result = await getGraphicByPeriod('somePeriod', 'invalidTab');
            expect(result).toBeUndefined();
        });

        it('should handle errors gracefully', async () => {
            (axios.get as Mock).mockRejectedValueOnce(new Error('Network error'));
            const result = await getGraphicByPeriod('somePeriod', '1M');
            await getGraphicByPeriod('somePeriod', '3M');
            await getGraphicByPeriod('somePeriod', '6M');
            await getGraphicByPeriod('somePeriod', '1A');
            await getGraphicByPeriod('somePeriod', '5A');

            expect(result).toBeUndefined();
        });
    });
});
