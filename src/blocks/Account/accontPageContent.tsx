import Component1 from "../LogIn/comp1";
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
            <Component1
                cardDescription="Today"
                cardTitle="12,584"
                stepsLabel="Steps"
                stepsValue={12584}
                stepsUnit="steps"
                data={[
                    { date: "2024-01-01", steps: 2000 },
                    { date: "2024-01-02", steps: 2100 },
                    { date: "2024-01-03", steps: 2200 },
                    { date: "2024-01-04", steps: 1300 },
                    { date: "2024-01-05", steps: 1400 },
                    { date: "2024-01-06", steps: 2500 },
                    { date: "2024-01-07", steps: 1600 },
                ]}
                averageSteps={1200}
                averageStepsLabel="Average Steps"
                averageStepsValue="12,343"
                totalStepsText="Over the past 7 days, you have walked"
                totalStepsValue={53305}
                stepsToGoalText="You need"
                stepsToGoalValue={12584}
            />

        </div>
    )
}