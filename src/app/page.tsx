import React from "react";
import Header from "@/components/Header";
import ClientHero from "@/components/ClientHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";

export default function Home() {
  // Default language setting - can be connected to user preferences or browser settings
  const isArabic = false;

  return (
    <main className="min-h-screen bg-background">
      {/* Header Component */}
      <Header isArabic={isArabic} />

      {/* Hero Section */}
      <ClientHero
        isArabic={isArabic}
        title="Find Professional Services for Every Need"
        subtitle="Connect with trusted service providers across multiple categories. From home maintenance to professional consultations, we've got you covered."
        ctaPrimaryText="Explore Services"
        ctaSecondaryText="Become a Provider"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* Service Categories Section */}
      <ServiceCategories isArabic={isArabic} />

      {/* Featured Services Section */}
      <FeaturedServices isArabic={isArabic} />

      {/* Footer Component */}
      <Footer isArabic={isArabic} />
    </main>
  );
}
