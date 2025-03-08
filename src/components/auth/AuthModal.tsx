"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import SocialLogin from "./SocialLogin";

interface AuthModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultTab?: "login" | "signup";
  onLoginSuccess?: (userData: any) => void;
  onSignupSuccess?: (userData: any) => void;
  isArabic?: boolean;
}

const AuthModal = ({
  isOpen = true,
  onClose = () => {},
  defaultTab = "login",
  onLoginSuccess = () => {},
  onSignupSuccess = () => {},
  isArabic = true,
}: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(defaultTab);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoginSubmit = async (data: any) => {
    setIsLoading(true);
    setError("");

    try {
      // In a real implementation, this would call an API to authenticate the user
      console.log("Login form submitted with:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login
      const userData = {
        id: "user-123",
        name: data.email.split("@")[0],
        email: data.email,
      };

      onLoginSuccess(userData);
      onClose();
    } catch (err) {
      setError(
        isArabic
          ? "البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى."
          : "Invalid email or password. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (data: any) => {
    setIsLoading(true);
    setError("");

    try {
      // In a real implementation, this would call an API to create a new user
      console.log("Signup form submitted with:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful signup
      const userData = {
        id: "user-new",
        name: data.name,
        email: data.email,
        userType: data.userType,
        phone: data.phone,
      };

      onSignupSuccess(userData);
      onClose();
    } catch (err) {
      setError(
        isArabic
          ? "تعذر إنشاء الحساب. يرجى المحاولة مرة أخرى."
          : "Could not create account. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    setError("");

    try {
      // In a real implementation, this would initiate OAuth flow with the provider
      console.log(`Initiating ${provider} login`);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful social login
      const userData = {
        id: `user-${provider.toLowerCase()}-123`,
        name: `${provider} User`,
        email: `user@${provider.toLowerCase()}.example.com`,
        provider: provider,
      };

      onLoginSuccess(userData);
      onClose();
    } catch (err) {
      setError(
        isArabic
          ? `فشل تسجيل الدخول باستخدام ${provider}. يرجى المحاولة مرة أخرى.`
          : `${provider} login failed. Please try again.`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="sm:max-w-[500px] p-0 overflow-hidden bg-background"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <DialogHeader className="pt-6 px-6">
          <DialogTitle className="text-2xl font-bold text-center">
            {activeTab === "login"
              ? isArabic
                ? "مرحبًا بعودتك"
                : "Welcome Back"
              : isArabic
                ? "إنشاء حساب"
                : "Create Account"}
          </DialogTitle>
        </DialogHeader>

        <Tabs
          defaultValue={defaultTab}
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "login" | "signup")}
          className="w-full"
        >
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">
                {isArabic ? "تسجيل الدخول" : "Login"}
              </TabsTrigger>
              <TabsTrigger value="signup">
                {isArabic ? "إنشاء حساب" : "Sign Up"}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="login" className="space-y-6 pb-6">
            <div className="px-6">
              <LoginForm
                onSubmit={handleLoginSubmit}
                isLoading={isLoading}
                error={error}
                isArabic={isArabic}
              />
            </div>
            <div className="px-6 pt-4 border-t">
              <SocialLogin
                onSocialLogin={handleSocialLogin}
                isArabic={isArabic}
              />
            </div>
          </TabsContent>

          <TabsContent value="signup" className="space-y-6 pb-6">
            <div className="px-6">
              <SignupForm
                onSubmit={handleSignupSubmit}
                isLoading={isLoading}
                isArabic={isArabic}
              />
            </div>
            <div className="px-6 pt-4 border-t">
              <SocialLogin
                onSocialLogin={handleSocialLogin}
                isArabic={isArabic}
              />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
