"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Sparkles } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobile-sidebar";
// import { useProModal } from "@/hooks/use-pro-modal";

const poppinsFont = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
  isPro: boolean;
}

export const Navbar = () => {
  //   const proModal = useProModal();

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={`hidden md:block text-xl md:text-3xl font-bold text-primary  ${poppinsFont.className}`}
          >
            Sidekick.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        {/* {!isPro && ( */}
        <Button
          //   onClick={proModal.onOpen}
          size="sm"
          variant="premium"
        >
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        {/* } */}
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
