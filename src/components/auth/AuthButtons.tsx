import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { LogIn, UserPlus } from "lucide-react";

interface AuthButtonsProps {
  onOpenLoginModal?: () => void;
  onOpenSignupModal?: () => void;
  className?: string;
  isArabic?: boolean;
}

const AuthButtons = ({
  onOpenLoginModal = () => {},
  onOpenSignupModal = () => {},
  className = "",
  isArabic = true,
}: AuthButtonsProps) => {
  // State to track which modal should be opened
  const [activeModal, setActiveModal] = useState<"login" | "signup" | null>(
    null,
  );

  // Handle login button click
  const handleLoginClick = () => {
    setActiveModal("login");
    onOpenLoginModal();
  };

  // Handle signup button click
  const handleSignupClick = () => {
    setActiveModal("signup");
    onOpenSignupModal();
  };

  return (
    <div
      className={`flex items-center ${isArabic ? "space-x-reverse space-x-4" : "space-x-4"} bg-background ${className}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLoginClick}
            className="flex items-center gap-2"
          >
            <LogIn className="h-4 w-4" />
            <span>{isArabic ? "تسجيل الدخول" : "Login"}</span>
          </Button>
        </DialogTrigger>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            size="sm"
            onClick={handleSignupClick}
            className="flex items-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            <span>{isArabic ? "إنشاء حساب" : "Sign Up"}</span>
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};

export default AuthButtons;
