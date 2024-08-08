import OrderDetail from "./orderDetail"
import {
    Home,
    LineChart,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"

import NavMenuMain from "./navMenuMain"
import PageHeader from "./pageHeader"
import OrdersTabs from "./ordersTabs"
import OrderInfo from "./orderInfo"

export function Orders() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <NavMenuMain
                primaryItem={{
                    href: "#",
                    icon: Package2,
                    label: "Acme Inc",
                    bgColorClass: "bg-primary",
                    textColorClass: "text-primary-foreground",
                }}
                menuItems={[
                    {
                        href: "#",
                        icon: Home,
                        label: "Dashboard",
                        textColorClass: "text-muted-foreground",
                    },
                    {
                        href: "#",
                        icon: ShoppingCart,
                        label: "Orders",
                        bgColorClass: "bg-accent",
                        textColorClass: "text-accent-foreground",
                    },
                    {
                        href: "#",
                        icon: Package,
                        label: "Products",
                        textColorClass: "text-muted-foreground",
                    },
                    {
                        href: "#",
                        icon: Users2,
                        label: "Customers",
                        textColorClass: "text-muted-foreground",
                    },
                    {
                        href: "#",
                        icon: LineChart,
                        label: "Analytics",
                        textColorClass: "text-muted-foreground",
                    },
                ]}
                footerItem={{
                    href: "#",
                    icon: Settings,
                    label: "Settings",
                    textColorClass: "text-muted-foreground",
                }}
            />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <PageHeader />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <OrderInfo />
                        <OrdersTabs
                            title="Orders"
                            description="Recent orders from your store."
                            tabs={[
                                {
                                    value: "week",
                                    label: "Week",
                                    orders: [
                                        {
                                            customerName: "Liam Johnson",
                                            customerEmail: "liam@example.com",
                                            type: "Sale",
                                            status: "Fulfilled",
                                            statusVariant: "secondary",
                                            date: "2023-06-23",
                                            amount: "$250.00",
                                        },
                                        {
                                            customerName: "Olivia Smith",
                                            customerEmail: "olivia@example.com",
                                            type: "Refund",
                                            status: "Declined",
                                            statusVariant: "outline",
                                            date: "2023-06-24",
                                            amount: "$150.00",
                                        },
                                    ],
                                },
                                {
                                    value: "month",
                                    label: "Month",
                                    orders: [
                                        {
                                            customerName: "Noah Williams",
                                            customerEmail: "noah@example.com",
                                            type: "Subscription",
                                            status: "Fulfilled",
                                            statusVariant: "secondary",
                                            date: "2023-06-25",
                                            amount: "$350.00",
                                        },
                                        {
                                            customerName: "Emma Brown",
                                            customerEmail: "emma@example.com",
                                            type: "Sale",
                                            status: "Fulfilled",
                                            statusVariant: "secondary",
                                            date: "2023-06-26",
                                            amount: "$450.00",
                                        },
                                    ],
                                },
                            ]}
                            filterOptions={[
                                { label: "Fulfilled", checked: true },
                                { label: "Declined", checked: false },
                                { label: "Refunded", checked: false },
                            ]}
                        />

                    </div>
                    <div>
                        <OrderDetail
                            orderId="Oe31b70H"
                            orderDate="November 23, 2023"
                            orderItems={[
                                { name: "Glimmer Lamps", quantity: 2, price: "$250.00" },
                                { name: "Aqua Filters", quantity: 1, price: "$49.00" },
                            ]}
                            subtotal="$299.00"
                            shipping="$5.00"
                            tax="$25.00"
                            total="$329.00"
                            shippingAddress={[
                                "Liam Johnson",
                                "1234 Main St.",
                                "Anytown, CA 12345",
                            ]}
                            billingInfo="Same as shipping address"
                            customerName="Liam Johnson"
                            customerEmail="liam@acme.com"
                            customerPhone="+1 234 567 890"
                            paymentMethod="Visa"
                            paymentLast4="4532"
                            lastUpdated="November 23, 2023"
                        />

                    </div>
                </main>
            </div>
        </div>
    )
}
