import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut, Settings, User, Store } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserProfileProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
    initials?: string;
    userType?: "customer" | "provider";
  };
  onLogout?: () => void;
  onSettings?: () => void;
  onProfile?: () => void;
  isArabic?: boolean;
}

const UserProfile = ({
  user = {
    name: "John Doe",
    email: "john.doe@example.com",
    initials: "JD",
    userType: "customer",
  },
  onLogout = () => console.log("Logout clicked"),
  onSettings = () => console.log("Settings clicked"),
  onProfile = () => console.log("Profile clicked"),
  isArabic = true,
}: UserProfileProps) => {
  return (
    <div
      className="flex items-center gap-2 bg-background p-2 rounded-lg"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar>
              {user.avatar ? (
                <AvatarImage src={user.avatar} alt={user.name} />
              ) : (
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {user.initials}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate max-w-[120px]">
                {user.email}
              </p>
              {user.userType && (
                <div className="flex items-center mt-1">
                  {user.userType === "provider" ? (
                    <>
                      <Store className="h-3 w-3 text-primary mr-1" />
                      <span className="text-xs text-primary">
                        {isArabic ? "مقدم خدمة" : "Service Provider"}
                      </span>
                    </>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      {isArabic ? "زبون" : "Customer"}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={isArabic ? "start" : "end"}
          className="w-56"
        >
          <DropdownMenuLabel>
            {isArabic ? "حسابي" : "My Account"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onProfile} className="cursor-pointer">
            <User className={`${isArabic ? "ml-2" : "mr-2"} h-4 w-4`} />
            <span>{isArabic ? "الملف الشخصي" : "Profile"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onSettings} className="cursor-pointer">
            <Settings className={`${isArabic ? "ml-2" : "mr-2"} h-4 w-4`} />
            <span>{isArabic ? "الإعدادات" : "Settings"}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onLogout} className="cursor-pointer">
            <LogOut className={`${isArabic ? "ml-2" : "mr-2"} h-4 w-4`} />
            <span>{isArabic ? "تسجيل الخروج" : "Log out"}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfile;
