// src/tests/setupTests.ts

import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mocking IntersectionObserver
beforeEach(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    // Mocking ResizeObserver
    const mockResizeObserver = vi.fn();
    mockResizeObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.ResizeObserver = mockResizeObserver;
});

// Set environment variable for testing
import.meta.env.VITE_APP_STAGE = 'dev';
