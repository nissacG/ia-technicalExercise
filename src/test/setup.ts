import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Mock the ResizeObserver which is not available in JSDOM
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});