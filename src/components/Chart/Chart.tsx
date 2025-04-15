"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export interface ChartProps {
    chartData: Array<{ x: number; y: number }>
}

const chartConfig = {
    y: {
        label: "Value",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function Chart({ chartData }: ChartProps) {
    return (
        <div className="w-full h-full">
            <ChartContainer config={chartConfig}>
                <LineChart
                    accessibilityLayer
                    data={chartData}
                >
                    <CartesianGrid />
                    <XAxis
                        dataKey="x"
                        tickLine
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => new Date(value).toLocaleDateString()}
                    />
                    <YAxis
                        dataKey="y"
                        tickLine
                        axisLine={false}
                        tickMargin={8}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                        dataKey="y"
                        type="linear"
                        stroke="var(--color-y)"
                        strokeWidth={2}
                        dot
                    />
                </LineChart>
            </ChartContainer>
        </div>

    )
}
