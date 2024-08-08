import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button), { ssr: true });

type LoginForm3Props = {
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

export function LoginForm3({
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
}: LoginForm3Props): JSX.Element {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
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
                            <Link href={forgotPasswordLink} className="ml-auto inline-block text-sm underline">
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
            </CardContent>
        </Card>
    )
}
