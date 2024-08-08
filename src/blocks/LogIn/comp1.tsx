"use client"

import { Bar, BarChart, Label, Rectangle, ReferenceLine, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

type Component1Props = {
    cardDescription: string;
    cardTitle: string;
    stepsLabel: string;
    stepsValue: number;
    stepsUnit: string;
    data: { date: string; steps: number }[];
    averageSteps: number;
    averageStepsLabel: string;
    averageStepsValue: string;
    totalStepsText: string;
    totalStepsValue: number;
    stepsToGoalText: string;
    stepsToGoalValue: number;
};

export default function Component1({
    cardDescription,
    cardTitle,
    stepsLabel,
    stepsValue,
    stepsUnit,
    data,
    averageSteps,
    averageStepsLabel,
    averageStepsValue,
    totalStepsText,
    totalStepsValue,
    stepsToGoalText,
    stepsToGoalValue,
}: Component1Props): JSX.Element {
    return (
        <Card className="lg:max-w-md">
            <CardHeader className="space-y-0 pb-2">
                <CardDescription>{cardDescription}</CardDescription>
                <CardTitle className="text-4xl tabular-nums">
                    {stepsValue}{" "}
                    <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                        {stepsUnit}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={{
                        steps: {
                            label: stepsLabel,
                            color: "hsl(var(--chart-1))",
                        },
                    }}
                >
                    <BarChart
                        accessibilityLayer
                        margin={{
                            left: -4,
                            right: -4,
                        }}
                        data={data}
                    >
                        <Bar
                            dataKey="steps"
                            fill="var(--color-steps)"
                            radius={5}
                            fillOpacity={0.6}
                            activeBar={<Rectangle fillOpacity={0.8} />}
                        />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={4}
                            tickFormatter={(value) => {
                                return new Date(value).toLocaleDateString("en-US", {
                                    weekday: "short",
                                })
                            }}
                        />
                        <ChartTooltip
                            defaultIndex={2}
                            content={
                                <ChartTooltipContent
                                    hideIndicator
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                            cursor={false}
                        />
                        <ReferenceLine
                            y={averageSteps}
                            stroke="hsl(var(--muted-foreground))"
                            strokeDasharray="3 3"
                            strokeWidth={1}
                        >
                            <Label
                                position="insideBottomLeft"
                                value={averageStepsLabel}
                                offset={10}
                                fill="hsl(var(--foreground))"
                            />
                            <Label
                                position="insideTopLeft"
                                value={averageStepsValue}
                                className="text-lg"
                                fill="hsl(var(--foreground))"
                                offset={10}
                                startOffset={100}
                            />
                        </ReferenceLine>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-1">
                <CardDescription>
                    {totalStepsText}{" "}
                    <span className="font-medium text-foreground">{totalStepsValue}</span> steps.
                </CardDescription>
                <CardDescription>
                    {stepsToGoalText}{" "}
                    <span className="font-medium text-foreground">{stepsToGoalValue}</span>{" "}
                    more steps to reach your goal.
                </CardDescription>
            </CardFooter>
        </Card>
    )
}
