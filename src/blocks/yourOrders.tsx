"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type YourOrdersBlockProps = {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
};

export default function YourOrdersBlock({
    title,
    description,
    buttonText,
    onButtonClick,
}: YourOrdersBlockProps): JSX.Element {
    return (
        <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
                <CardTitle>{title}</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button onClick={onButtonClick}>{buttonText}</Button>
            </CardFooter>
        </Card>
    )
}
