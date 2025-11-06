"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleDarkMode } from "@/components/ui/toggleDarkMode";
import { Skeleton } from "@/components/ui/skeleton";
import { Settings, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/database/supabaseClient";

const supabase = createClient();

const Header: React.FC = () => {
  const router = useRouter();

  const handleGetUserConfig = () => {
    router.push("/user");
  };

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) return toast.error("Error logging out. Please try again.");

    if (!error) toast.success("Logged out successfully.");
    router.push("/");
  };

  const getUserName = () => {
    // TODO: Get user name from database
    const userName = "Tobias";
    return <span className="font-medium capitalize">{userName}</span>;
  };

  const getUserAvatar = () => {
    // TODO: Get user photo from database
    const userPhoto = "https://github.com/shadcn.png";
    return userPhoto;
  };

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 backdrop-blur-md bg-background/70 border border-border shadow-md rounded-2xl px-6 py-3 w-[90%] max-w-2xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={getUserAvatar()} />
              <AvatarFallback>
                <Skeleton className="h-6 w-6 rounded-full" />
              </AvatarFallback>
            </Avatar>
            {getUserName()}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <ToggleDarkMode />
          <Settings className="cursor-pointer" onClick={handleGetUserConfig} />
          <LogOut className="cursor-pointer" onClick={handleLogOut} />
        </div>
      </div>
    </header>
  );
};

export default Header;
