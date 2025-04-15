import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Chart } from './Chart';

// Mock the recharts components to avoid rendering issues in tests
vi.mock('recharts', () => ({
    CartesianGrid: () => <div data-testid="cartesian-grid" />,
    Line: () => <div data-testid="line" />,
    LineChart: ({ children }: { children: React.ReactNode }) => <div data-testid="line-chart">{children}</div>,
    XAxis: () => <div data-testid="x-axis" />,
    YAxis: () => <div data-testid="y-axis" />,
}));

// Mock the chart components
vi.mock('@/components/ui/chart', () => ({
    ChartConfig: {},
    ChartContainer: ({ children }: { children: React.ReactNode }) => <div data-testid="chart-container">{children}</div>,
    ChartTooltip: ({ children }: { children: React.ReactNode }) => <div data-testid="chart-tooltip">{children}</div>,
    ChartTooltipContent: () => <div data-testid="chart-tooltip-content" />,
}));

describe('Chart Component', () => {
    const mockChartData = [
        { x: 1000, y: 50 },
        { x: 2000, y: 100 },
        { x: 3000, y: 150 },
    ];

    it('should render the chart with the provided data', () => {
        render(<Chart chartData={mockChartData} />);

        // Check if the chart container is rendered
        expect(screen.getByTestId('chart-container')).toBeTruthy();

        // Check if the line chart is rendered
        expect(screen.getByTestId('line-chart')).toBeTruthy();

        // Check if the chart elements are rendered
        expect(screen.getByTestId('cartesian-grid')).toBeTruthy();
        expect(screen.getByTestId('x-axis')).toBeTruthy();
        expect(screen.getByTestId('y-axis')).toBeTruthy();
        expect(screen.getByTestId('line')).toBeTruthy();

    });

    it('should render with empty data', () => {
        render(<Chart chartData={[]} />);

        // Chart should still render with empty data
        expect(screen.getByTestId('chart-container')).toBeTruthy();
        expect(screen.getByTestId('line-chart')).toBeTruthy();
    });

    it('should apply the correct CSS classes', () => {
        render(<Chart chartData={mockChartData} />);

        // Check if the main container has the correct class
        const container = screen.getByTestId('chart-container').parentElement;
        expect(container?.className).toContain('w-full');
        expect(container?.className).toContain('h-full');
    });
});
