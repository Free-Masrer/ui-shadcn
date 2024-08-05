import OrderDetail from "./orderDetail"

import NavMenuMain from "./navMenuMain"
import PageHeader from "./pageHeader"
import OrdersTabs from "./ordersTabs"
import OrderInfo from "./orderInfo"

export function Orders() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <NavMenuMain />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <PageHeader />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <OrderInfo />
                        <OrdersTabs />
                    </div>
                    <div>
                        <OrderDetail />
                    </div>
                </main>
            </div>
        </div>
    )
}
