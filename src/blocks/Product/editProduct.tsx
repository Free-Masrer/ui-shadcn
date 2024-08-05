import Image from "next/image"
import {
    Upload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ProductControoler from "./productCintroller"
import ProductDetails from "./productDetails"
import ProductStock from "./productStock"
import ProductCategory from "./productCategory"
import ProductImages from "./productImages"
import ProductStatus from "./productStatus"
import ArchiveProduct from "./archiveProduct"

export function EditProduct() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                        <ProductControoler />
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                <ProductDetails />
                                <ProductStock />
                                <ProductCategory />
                            </div>
                            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                <ProductStatus />
                                <ProductImages />
                                <ArchiveProduct />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
