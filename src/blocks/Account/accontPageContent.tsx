import PluginsDirectory from "./pluginsDirectory";
import StoreName from "./storeName";

export default function AccountPageContent() {
    return (
        <div className="grid gap-6">
            <StoreName />
            <PluginsDirectory />
        </div>
    )
}