'use client'
import dynamic from "next/dynamic"
import PageTitle from "@/blocks/Account/pageTitle"
import AccountNavMenu from "@/blocks/Account/accountNavMenu"
import AccountPageContent from "@/blocks/Account/accontPageContent"
const AccountHeader = dynamic(() => import("@/blocks/Account/header").then((mod) => mod.default), { ssr: true });
export default function Account() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AccountHeader />
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <PageTitle />
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                    <AccountNavMenu />
                    <AccountPageContent />
                </div>
            </main>
        </div>
    )
}


