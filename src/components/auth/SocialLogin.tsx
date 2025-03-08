import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Facebook, Mail, MessageCircle, Phone } from "lucide-react";

interface SocialLoginProps {
  onSocialLogin?: (provider: string) => void;
  className?: string;
  isArabic?: boolean;
}

const SocialLogin = ({
  onSocialLogin = (provider) => console.log(`Login with ${provider}`),
  className,
  isArabic = true,
}: SocialLoginProps) => {
  const socialProviders = [
    {
      name: "Google",
      arabicName: "جوجل",
      icon: Mail,
      color: "bg-red-500 hover:bg-red-600",
      tooltip: isArabic ? "تسجيل الدخول باستخدام جوجل" : "Sign in with Google",
    },
    {
      name: "Facebook",
      arabicName: "فيسبوك",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      tooltip: isArabic
        ? "تسجيل الدخول باستخدام فيسبوك"
        : "Sign in with Facebook",
    },
    {
      name: "Telegram",
      arabicName: "تيليجرام",
      icon: MessageCircle,
      color: "bg-blue-400 hover:bg-blue-500",
      tooltip: isArabic
        ? "تسجيل الدخول باستخدام تيليجرام"
        : "Sign in with Telegram",
    },
    {
      name: "WhatsApp",
      arabicName: "واتساب",
      icon: Phone,
      color: "bg-green-500 hover:bg-green-600",
      tooltip: isArabic
        ? "تسجيل الدخول باستخدام واتساب"
        : "Sign in with WhatsApp",
    },
  ];

  return (
    <div
      className={cn("w-full bg-white p-6 rounded-lg", className)}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <h3 className="text-lg font-medium text-center mb-4">
        {isArabic ? "المتابعة باستخدام" : "Continue with"}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <TooltipProvider>
          {socialProviders.map((provider) => (
            <Tooltip key={provider.name}>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "w-full text-white flex items-center justify-center gap-2",
                    provider.color,
                  )}
                  onClick={() => onSocialLogin(provider.name)}
                >
                  <provider.icon className="h-5 w-5" />
                  <span>{isArabic ? provider.arabicName : provider.name}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{provider.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          {isArabic
            ? "بالمتابعة، فإنك توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا"
            : "By continuing, you agree to our Terms of Service and Privacy Policy"}
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
