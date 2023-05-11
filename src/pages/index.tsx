import Image from "next/image";
import { Inter } from "next/font/google";
import { Widget } from "@/components/Widget";
import DarkModeButton from "@/components/DarkModeButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center bg-[#1E1E1E] dark:bg-white">
      <div className="flex items-center justify-center font-medium text-white dark:text-[#1E1E1E]  ring-2 ring-white dark:ring-[#1E1E1E] rounded-sm p-2 mb-4 gap-2">
        <span>Change Mode</span>
        <DarkModeButton />
      </div>
      <Widget />
    </main>
  );
}
