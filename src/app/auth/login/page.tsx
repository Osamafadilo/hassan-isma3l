"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  const isArabic = false;

  const handleLoginSubmit = async (data: any) => {
    console.log("Login form submitted with:", data);
    // Here you would implement the actual login logic
  };

  return (
    <main className="min-h-screen bg-background">
      <Header isArabic={isArabic} />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto">
          <LoginForm 
            onSubmit={handleLoginSubmit} 
            isArabic={isArabic} 
          />
        </div>
      </div>

      <Footer isArabic={isArabic} />
    </main>
  );
}
