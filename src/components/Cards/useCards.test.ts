import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { mockChartData } from '@/mocks/mockChartData';
import useCards from './useCards';

describe('useCards Hook', () => {
    // Mock fetch globally
    const mockFetch = vi.fn();

    beforeEach(() => {
        // Reset mocks before each test
        vi.resetAllMocks();
        global.fetch = mockFetch;
    });

    it('should start with loading state and then fetch data successfully', async () => {
        // Mock successful API response
        const mockData = {
            data: [mockChartData]
        };

        mockFetch.mockResolvedValueOnce({
            json: () => Promise.resolve(mockData)
        });

        // Render the hook
        const { result } = renderHook(() => useCards());

        // Initially, loading should be true and data should be empty
        expect(result.current.loading).toBe(true);
        expect(result.current.cardData).toEqual([]);
        expect(result.current.error).toBeNull();

        // Wait for the data to be loaded
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        // After loading, data should be populated and loading should be false
        expect(result.current.cardData).toEqual(mockData.data);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();

        // Verify fetch was called with the correct URL
        expect(mockFetch).toHaveBeenCalledWith('/TechnicalExercise.json');
    });

    it('should handle fetch errors correctly', async () => {
        // Mock failed API response
        const mockError = new Error('Failed to fetch');
        mockFetch.mockRejectedValueOnce(mockError);

        // Render the hook
        const { result } = renderHook(() => useCards());

        // Initially, loading should be true
        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBeNull();

        // Wait for the error to be set
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        // After error, loading should be false and error should be set
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(mockError);
        expect(result.current.cardData).toEqual([]);
    });

    it('should handle empty data response', async () => {
        // Mock empty data response
        const mockEmptyData = { data: [] };

        mockFetch.mockResolvedValueOnce({
            json: () => Promise.resolve(mockEmptyData)
        });

        // Render the hook
        const { result } = renderHook(() => useCards());

        // Wait for the data to be loaded
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        // After loading, data should be an empty array
        expect(result.current.cardData).toEqual([]);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
    });
});
