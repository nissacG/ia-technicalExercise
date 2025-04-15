import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { mockChartData } from '@/mocks/mockChartData';
import Card from './Card';

describe('Card Component', () => {

    it('renders the card with all provided data', () => {
        render(<Card {...mockChartData} />);

        // Check if title is rendered
        const titleElement = screen.getByText('Test Title');
        expect(titleElement).toBeInTheDocument();

        // Check if subtitle is rendered
        const subtitleElement = screen.getByText('Test Subtitle');
        expect(subtitleElement).toBeInTheDocument();

        // Check if date is rendered
        const dateElement = screen.getByText('2023-01-01');
        expect(dateElement).toBeInTheDocument();

        // Check if URL is rendered as a link
        const urlLink = screen.getByText('https://example.com');
        expect(urlLink).toBeInTheDocument();
        expect(urlLink.getAttribute('href')).toBe('https://example.com');

        // Check if description is rendered
        const descriptionElement = screen.getByText('This is a test description for the card component.');
        expect(descriptionElement).toBeInTheDocument();

    });

    it('renders with empty chart data', () => {
        const cardWithEmptyChart = {
            ...mockChartData,
            chart: []
        };

        render(<Card {...cardWithEmptyChart} />);

        // Check if title is still rendered
        const titleElement = screen.getByText('Test Title');
        expect(titleElement).toBeInTheDocument();
    });

});
