import { Orders } from "@/blocks/orders";
import Test from "@/blocks/test";
import Test2 from "@/blocks/test2";
import Image from "next/image";
import { TooltipProvider } from '@/components/ui/tooltip';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Orders />
    </main>
  );
}
