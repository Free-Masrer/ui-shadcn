import Link from "next/link"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type NavItem = {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    bgColorClass?: string;
    textColorClass?: string;
}

type NavMenuMainProps = {
    primaryItem: NavItem;
    menuItems: NavItem[];
    footerItem: NavItem;
}

export default function NavMenuMain({
    primaryItem,
    menuItems,
    footerItem,
}: NavMenuMainProps): JSX.Element {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href={primaryItem.href}
                    className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full ${primaryItem.bgColorClass} text-lg font-semibold ${primaryItem.textColorClass} md:h-8 md:w-8 md:text-base`}
                >
                    <primaryItem.icon className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">{primaryItem.label}</span>
                </Link>
                {menuItems.map((item, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            <Link
                                href={item.href}
                                className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.bgColorClass} ${item.textColorClass} transition-colors hover:text-foreground md:h-8 md:w-8`}
                            >
                                <item.icon className="h-5 w-5" />
                                <span className="sr-only">{item.label}</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.label}</TooltipContent>
                    </Tooltip>
                ))}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={footerItem.href}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg ${footerItem.bgColorClass} ${footerItem.textColorClass} transition-colors hover:text-foreground md:h-8 md:w-8`}
                        >
                            <footerItem.icon className="h-5 w-5" />
                            <span className="sr-only">{footerItem.label}</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{footerItem.label}</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    )
}
