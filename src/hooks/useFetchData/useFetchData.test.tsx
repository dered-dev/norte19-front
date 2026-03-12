// useFetchData.test.ts
import { act, renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useFetchData } from './useFetchData';
import { vi } from 'vitest';

// Mock axios
vi.mock('axios');

describe('useFetchData', () => {


    it('should return error when fetch fails', async () => {
        // Arrange

        const mockError = new Error('Network Error');
        vi.spyOn(axios, 'get').mockRejectedValueOnce(mockError);
        const { result } = renderHook(() => useFetchData<{ message: string }>('test-url'));

        // Act
        await waitFor(() => expect(result.current.loading).toBe(false));

        // Assert
        act(() => {
            expect(result.current.data).toBe(null);
        })
    });

    it('should set loading to true initially', () => {
        // Arrange
        const { result } = renderHook(() => useFetchData<{ message: string }>('test-url'));

        // Assert
        act(() => {
            expect(result.current.loading).toBe(true);
        })
    });


});
