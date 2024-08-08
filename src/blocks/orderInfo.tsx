import OrdersForMonth from "./ordersForMonth";
import OrdersForWeek from "./ordersForWeek";
import YourOrdersBlock from "./yourOrders";


export default function OrderInfo() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <YourOrdersBlock
                title="Your Orders"
                description="Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis."
                buttonText="Create New Order"
                onButtonClick={() => {
                    console.log("Creating a new order...");
                }}
            />

            <OrdersForWeek
                description="This Week"
                title="$1,329"
                growthText="+25% from last week"
                progressValue={25}
                progressAriaLabel="25% increase"
            />

            <OrdersForMonth
                description="This Month"
                title="$5,329"
                growthText="+10% from last month"
                progressValue={12}
                progressAriaLabel="12% increase"
            />
        </div>
    )
}