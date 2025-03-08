"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignupForm from "@/components/auth/SignupForm";

export default function RegisterPage() {
  const isArabic = false;

  const handleSignupSubmit = async (data: any) => {
    console.log("Signup form submitted with:", data);
    // Here you would implement the actual registration logic
  };

  return (
    <main className="min-h-screen bg-background">
      <Header isArabic={isArabic} />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto">
          <SignupForm 
            onSubmit={handleSignupSubmit} 
            isArabic={isArabic} 
          />
        </div>
      </div>

      <Footer isArabic={isArabic} />
    </main>
  );
}
