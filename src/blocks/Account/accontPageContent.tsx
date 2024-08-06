import PluginsDirectory from "./pluginsDirectory";
import ProductsEmptyState from "./productsEmtyState";
import RecentSales from "./recentSales";
import ProductStatistic from "./stats/statistic";
import StoreName from "./storeName";
import Transactions from "./transactions";

export default function AccountPageContent() {
    return (
        <div className="grid gap-6">
            <StoreName />
            <PluginsDirectory />
            <ProductStatistic />
            <div className="grid gap-4 md:gap-8 lg:grid-cols-1 xl:grid-cols-1">
                <Transactions />
                <RecentSales />
            </div>
            <ProductsEmptyState />
        </div>
    )
}