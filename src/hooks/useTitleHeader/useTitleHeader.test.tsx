import { renderHook } from '@testing-library/react';
import useTitleHeader from "./useTitleHeader";
import useHeader from '../useHeader/useHeader';
import { Mock, vi } from "vitest";

// Mock the useHeader hook
vi.mock('../useHeader/useHeader');

describe('useTitleHeader', () => {
    beforeEach(() => {
        // Reset mock before each test
        vi.clearAllMocks();
    });

    it('should return header data for the given URL', () => {
        const mockData = {
            data: {
                attributes: {
                    header_sections: [
                        { url: '/about', title: 'About Us' },
                        { url: '/contact', title: 'Contact' },
                    ],
                },
            },
        };

        // Mock implementation of useHeader to return the mock data
        (useHeader as unknown as Mock).mockReturnValue({ data: mockData });

        const { result } = renderHook(() => useTitleHeader({ url: '/about' }));

        // Verify that headerData is set correctly
        expect(result.current.headerData).toEqual({ url: '/about', title: 'About Us' });
    });

    it('should return null if no matching header data is found', () => {
        const mockData = {
            data: {
                attributes: {
                    header_sections: [
                        { url: '/about', title: 'About Us' },
                        { url: '/contact', title: 'Contact' },
                    ],
                },
            },
        };

        // Mock implementation of useHeader to return the mock data
        (useHeader as unknown as Mock).mockReturnValue({ data: mockData });

        const { result } = renderHook(() => useTitleHeader({ url: '/non-existent' }));

        // Verify that headerData is null
        expect(result.current.headerData).toBeNull();
    });

    it('should return null when no data is available', () => {
        // Mock implementation of useHeader to return no data
        (useHeader as unknown as Mock).mockReturnValue({ data: null });

        const { result } = renderHook(() => useTitleHeader({ url: '/about' }));

        // Verify that headerData is null
        expect(result.current.headerData).toBeNull();
    });
});
