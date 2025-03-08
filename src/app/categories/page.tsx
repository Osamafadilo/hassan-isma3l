import React from "react";
import Header from "@/components/Header";
import ServiceCategories from "@/components/services/ServiceCategories";
import Footer from "@/components/Footer";

export default function CategoriesPage() {
  // Default language setting - can be connected to user preferences or browser settings
  const isArabic = true;

  return (
    <main className="min-h-screen bg-background">
      {/* Header Component */}
      <Header isArabic={isArabic} />

      <div className="py-10 container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isArabic ? "تصفح جميع الفئات" : "Browse All Categories"}
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          {isArabic
            ? "اكتشف مجموعة واسعة من الخدمات المصنفة حسب الفئة لتلبية احتياجاتك المختلفة"
            : "Discover a wide range of services categorized to meet your various needs"}
        </p>

        {/* Service Categories Section */}
        <ServiceCategories isArabic={isArabic} />
      </div>

      {/* Footer Component */}
      <Footer isArabic={isArabic} />
    </main>
  );
}
