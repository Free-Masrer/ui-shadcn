import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    File,
    ListFilter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import OrdersList from "./ordersList"

type Order = {
    customerName: string;
    customerEmail: string;
    type: string;
    status: string;
    statusVariant: "secondary" | "outline";
    date: string;
    amount: string;
};

type OrdersTabsProps = {
    tabs: { value: string; label: string; orders: Order[] }[];
    filterOptions: { label: string; checked: boolean }[];
    title: string;
    description: string;
};

export default function OrdersTabs({
    tabs,
    filterOptions,
    title,
    description,
}: OrdersTabsProps): JSX.Element {
    return (
        <Tabs defaultValue={tabs[0]?.value || ""}>
            <div className="flex items-center">
                <TabsList>
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-7 gap-1 text-sm"
                            >
                                <ListFilter className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Filter</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {filterOptions.map((option, index) => (
                                <DropdownMenuCheckboxItem key={index} checked={option.checked}>
                                    {option.label}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                        size="sm"
                        variant="outline"
                        className="h-7 gap-1 text-sm"
                    >
                        <File className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Export</span>
                    </Button>
                </div>
            </div>
            {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    <OrdersList
                        title={title}
                        description={description}
                        orders={tab.orders}
                    />
                </TabsContent>
            ))}
        </Tabs>
    )
}
