"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AuthButtons from "@/components/auth/AuthButtons";
import UserProfile from "@/components/auth/UserProfile";
import AuthModal from "@/components/auth/AuthModal";

interface HeaderProps {
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    initials?: string;
    userType?: "customer" | "provider";
  };
  onLogout?: () => void;
  className?: string;
  isArabic?: boolean;
}

const Header = ({
  isAuthenticated = false,
  user = {
    name: "John Doe",
    email: "john.doe@example.com",
    initials: "JD",
    userType: "customer",
  },
  onLogout = () => console.log("Logout clicked"),
  className,
  isArabic = true,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAuthModal, setActiveAuthModal] = useState<
    "login" | "signup" | null
  >(null);

  const handleOpenLoginModal = () => {
    setActiveAuthModal("login");
  };

  const handleOpenSignupModal = () => {
    setActiveAuthModal("signup");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginSuccess = (userData: any) => {
    console.log("Login successful", userData);
    setActiveAuthModal(null);
    // Here you would typically update your auth state
  };

  const handleSignupSuccess = (userData: any) => {
    console.log("Signup successful", userData);
    setActiveAuthModal(null);
    // Here you would typically update your auth state
  };

  return (
    <header
      className={cn(
        "w-full h-20 bg-background border-b border-border sticky top-0 z-50",
        className,
      )}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            {isArabic ? "سوق الخدمات" : "ServiceMarket"}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center ${isArabic ? "space-x-reverse space-x-6" : "space-x-6"}`}
          >
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {isArabic ? "التصنيفات" : "Categories"}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {isArabic ? "الخدمات" : "Services"}
            </Link>
            <Link
              href="/providers"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {isArabic ? "مقدمي الخدمات" : "Providers"}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {isArabic ? "حول" : "About"}
            </Link>
          </nav>
        </div>

        {/* Search, Auth, and Cart */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">{isArabic ? "بحث" : "Search"}</span>
          </Button>

          {/* Authentication */}
          {isAuthenticated ? (
            <UserProfile user={user} onLogout={onLogout} isArabic={isArabic} />
          ) : (
            <AuthButtons
              onOpenLoginModal={handleOpenLoginModal}
              onOpenSignupModal={handleOpenSignupModal}
              isArabic={isArabic}
            />
          )}

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
            <span className="sr-only">
              {isArabic ? "سلة التسوق" : "Shopping Cart"}
            </span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">{isArabic ? "القائمة" : "Menu"}</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg z-50">
          <nav className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              {isArabic ? "التصنيفات" : "Categories"}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              {isArabic ? "الخدمات" : "Services"}
            </Link>
            <Link
              href="/providers"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              {isArabic ? "مقدمي الخدمات" : "Providers"}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              {isArabic ? "حول" : "About"}
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center justify-start px-0"
            >
              <Search className={`h-5 w-5 ${isArabic ? "ml-2" : "mr-2"}`} />
              <span>{isArabic ? "بحث" : "Search"}</span>
            </Button>
          </nav>
        </div>
      )}

      {/* Auth Modal */}
      {activeAuthModal && (
        <AuthModal
          isOpen={activeAuthModal !== null}
          onClose={() => setActiveAuthModal(null)}
          defaultTab={activeAuthModal}
          onLoginSuccess={handleLoginSuccess}
          onSignupSuccess={handleSignupSuccess}
          isArabic={isArabic}
        />
      )}
    </header>
  );
};

export default Header;
