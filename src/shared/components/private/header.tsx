"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleDarkMode } from "@/components/ui/toggleDarkMode";
import { Skeleton } from "@/components/ui/skeleton";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();

  const handleLogOut = () => {
    // Handle logout logic here
    router.push("/");
  };

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 backdrop-blur-md bg-background/70 border border-border shadow-md rounded-2xl px-6 py-3 w-[90%] max-w-2xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <Skeleton className="h-6 w-6 rounded-full" />
              </AvatarFallback>
            </Avatar>
            {/*TODO: Get user name from database */}
            <span className="capitalize">tobias</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ToggleDarkMode />
          <LogOut className="ml-4 cursor-pointer" onClick={handleLogOut} />
        </div>
      </div>
    </header>
  );
};

export default Header;
