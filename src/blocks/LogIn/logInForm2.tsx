'use client'

import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button), { ssr: true });

type LogInForm2Props = {
    title: string;
    description: string;
    firstNameLabel: string;
    firstNamePlaceholder: string;
    lastNameLabel: string;
    lastNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    submitButtonText: string;
    githubButtonText: string;
    signInText: string;
    signInLink: string;
};

export default function LogInForm2({
    title,
    description,
    firstNameLabel,
    firstNamePlaceholder,
    lastNameLabel,
    lastNamePlaceholder,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    submitButtonText,
    githubButtonText,
    signInText,
    signInLink,
}: LogInForm2Props): JSX.Element {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">{firstNameLabel}</Label>
                            <Input id="first-name" placeholder={firstNamePlaceholder} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">{lastNameLabel}</Label>
                            <Input id="last-name" placeholder={lastNamePlaceholder} required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">{emailLabel}</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={emailPlaceholder}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">{passwordLabel}</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        {submitButtonText}
                    </Button>
                    <Button variant="outline" className="w-full">
                        {githubButtonText}
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    {signInText}{" "}
                    <Link href={signInLink} className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
