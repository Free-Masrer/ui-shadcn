import { Orders } from "@/blocks/orders";
import { EditProduct } from "@/blocks/Product/editProduct";
import { Products } from "@/blocks/Products/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Orders />
      <Products />
      <EditProduct />
    </main>
  );
}
