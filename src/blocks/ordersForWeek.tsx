"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type OrdersForWeekProps = {
    description: string;
    title: string;
    growthText: string;
    progressValue: number;
    progressAriaLabel: string;
};

export default function OrdersForWeek({
    description,
    title,
    growthText,
    progressValue,
    progressAriaLabel,
}: OrdersForWeekProps): JSX.Element {
    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>{description}</CardDescription>
                <CardTitle className="text-4xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">
                    {growthText}
                </div>
            </CardContent>
            <CardFooter>
                <Progress value={progressValue} aria-label={progressAriaLabel} />
            </CardFooter>
        </Card>
    )
}

