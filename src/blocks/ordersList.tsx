"use client"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Order = {
    customerName: string;
    customerEmail: string;
    type: string;
    status: string;
    statusVariant: "secondary" | "outline";
    date: string;
    amount: string;
};

type OrdersListProps = {
    title: string;
    description: string;
    orders: Order[];
};

export default function OrdersList({
    title,
    description,
    orders,
}: OrdersListProps): JSX.Element {
    return (
        <Card>
            <CardHeader className="px-7">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden sm:table-cell">Type</TableHead>
                            <TableHead className="hidden sm:table-cell">Status</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div className="font-medium">{order.customerName}</div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        {order.customerEmail}
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    {order.type}
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <Badge className="text-xs" variant={order.statusVariant}>
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {order.date}
                                </TableCell>
                                <TableCell className="text-right">{order.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
