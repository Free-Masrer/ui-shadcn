'use client'
import Image from "next/image"
import LogInForm1 from "@/blocks/LogIn/logInForm1"
import LogInForm2 from "@/blocks/LogIn/logInForm2"

export default function Login() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <LogInForm1
                    title="Login"
                    description="Enter your email below to login to your account"
                    emailLabel="Email"
                    emailPlaceholder="m@example.com"
                    passwordLabel="Password"
                    forgotPasswordText="Forgot your password?"
                    forgotPasswordLink="/forgot-password"
                    submitButtonText="Login"
                    googleButtonText="Login with Google"
                    signUpText="Don't have an account?"
                    signUpLink="#"
                />
            </div>
            <div className="hidden bg-muted lg:block">
                <Image
                    src="/placeholder.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <LogInForm2
                title="Sign Up"
                description="Enter your information to create an account"
                firstNameLabel="First name"
                firstNamePlaceholder="Max"
                lastNameLabel="Last name"
                lastNamePlaceholder="Robinson"
                emailLabel="Email"
                emailPlaceholder="m@example.com"
                passwordLabel="Password"
                submitButtonText="Create an account"
                githubButtonText="Sign up with GitHub"
                signInText="Already have an account?"
                signInLink="#"
            />

        </div>
    )
}

