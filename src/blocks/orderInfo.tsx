import OrdersForMonth from "./ordersForMonth";
import OredersForWeek from "./ordersForWeek";
import YourOrdersBlock from "./yourOrders";


export default function OrderInfo() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <YourOrdersBlock />
            <OredersForWeek />
            <OrdersForMonth />
        </div>
    )
}