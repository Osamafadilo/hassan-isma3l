"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const isArabic = false;

  // Map error codes to messages
  const getErrorMessage = (errorCode: string | null) => {
    switch (errorCode) {
      case "CredentialsSignin":
        return isArabic 
          ? "فشل تسجيل الدخول. يرجى التحقق من بريدك الإلكتروني وكلمة المرور."
          : "Login failed. Please check your email and password.";
      case "OAuthSignin":
      case "OAuthCallback":
      case "OAuthCreateAccount":
      case "EmailCreateAccount":
      case "Callback":
        return isArabic
          ? "حدث خطأ أثناء محاولة تسجيل الدخول باستخدام مزود الخدمة. يرجى المحاولة مرة أخرى."
          : "There was an error signing in with the provider. Please try again.";
      case "OAuthAccountNotLinked":
        return isArabic
          ? "لتأكيد هويتك، يرجى تسجيل الدخول بنفس الحساب الذي استخدمته في البداية."
          : "To confirm your identity, please sign in with the same account you used originally.";
      case "EmailSignin":
        return isArabic
          ? "فشل إرسال رابط تسجيل الدخول عبر البريد الإلكتروني. يرجى التحقق من عنوان بريدك الإلكتروني."
          : "Failed to send login email. Please check your email address.";
      case "SessionRequired":
        return isArabic
          ? "يرجى تسجيل الدخول للوصول إلى هذه الصفحة."
          : "Please sign in to access this page.";
      default:
        return isArabic
          ? "حدث خطأ غير متوقع أثناء محاولة تسجيل الدخول. يرجى المحاولة مرة أخرى."
          : "An unexpected error occurred while trying to sign in. Please try again.";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header isArabic={isArabic} />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-md border">
          <div className="flex items-center justify-center mb-6 text-destructive">
            <AlertCircle size={48} />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-4">
            {isArabic ? "خطأ في المصادقة" : "Authentication Error"}
          </h1>
          
          <p className="text-center mb-6 text-muted-foreground">
            {getErrorMessage(error)}
          </p>
          
          <div className="flex flex-col space-y-4">
            <Link href="/auth/login">
              <Button className="w-full">
                {isArabic ? "العودة إلى تسجيل الدخول" : "Back to Login"}
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="w-full">
                {isArabic ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer isArabic={isArabic} />
    </main>
  );
}
