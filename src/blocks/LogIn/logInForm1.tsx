'use client'

import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button), { ssr: true });

type LogInForm1Props = {
    title: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    forgotPasswordText: string;
    forgotPasswordLink: string;
    submitButtonText: string;
    googleButtonText: string;
    signUpText: string;
    signUpLink: string;
};

export default function LogInForm1({
    title,
    description,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    forgotPasswordText,
    forgotPasswordLink,
    submitButtonText,
    googleButtonText,
    signUpText,
    signUpLink,
}: LogInForm1Props): JSX.Element {
    return (
        <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-balance text-muted-foreground">
                    {description}
                </p>
            </div>
            <div className="grid gap-4">
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
                    <div className="flex items-center">
                        <Label htmlFor="password">{passwordLabel}</Label>
                        <Link
                            href={forgotPasswordLink}
                            className="ml-auto inline-block text-sm underline"
                        >
                            {forgotPasswordText}
                        </Link>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    {submitButtonText}
                </Button>
                <Button variant="outline" className="w-full">
                    {googleButtonText}
                </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                {signUpText}{" "}
                <Link href={signUpLink} className="underline">
                    Sign up
                </Link>
            </div>
        </div>
    )
}
