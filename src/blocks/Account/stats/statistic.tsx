import {
    Activity,
    CreditCard,
    DollarSign,
    Users,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import TotalRevenue from "./totalRevenue"
import Subscriptions from "./subscriptions"
import Sales from "./sales"
import ActiveNow from "./activeNow"

export default function ProductStatistic() {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <TotalRevenue />
            <Subscriptions />
            <Sales />
            <ActiveNow />
        </div>
    )
}