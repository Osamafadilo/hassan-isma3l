import React from "react";
import Header from "@/components/Header";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ServicesPage() {
  // Default language setting - can be connected to user preferences or browser settings
  const isArabic = true;

  return (
    <main className="min-h-screen bg-background">
      {/* Header Component */}
      <Header isArabic={isArabic} />

      <div className="py-10 container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isArabic ? "استكشف جميع الخدمات" : "Explore All Services"}
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          {isArabic
            ? "تصفح مجموعة واسعة من الخدمات المتاحة على منصتنا"
            : "Browse through our wide range of services available on our platform"}
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className={`absolute ${isArabic ? "right-3" : "left-3"} top-3 h-5 w-5 text-muted-foreground`} />
            <Input 
              className={`${isArabic ? "pr-10" : "pl-10"} py-6`} 
              placeholder={isArabic ? "ابحث عن خدمات..." : "Search for services..."} 
            />
            <Button className="absolute top-1 bottom-1 ${isArabic ? "left-1" : "right-1"}">
              {isArabic ? "بحث" : "Search"}
            </Button>
          </div>
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button variant="outline" className="mb-2">
            {isArabic ? "الكل" : "All"}
          </Button>
          <Button variant="outline" className="mb-2">
            {isArabic ? "الأعلى تقييماً" : "Top Rated"}
          </Button>
          <Button variant="outline" className="mb-2">
            {isArabic ? "الأكثر شعبية" : "Most Popular"}
          </Button>
          <Button variant="outline" className="mb-2">
            {isArabic ? "الأحدث" : "Newest"}
          </Button>
          <Button variant="outline" className="mb-2">
            {isArabic ? "السعر: من الأقل إلى الأعلى" : "Price: Low to High"}
          </Button>
          <Button variant="outline" className="mb-2">
            {isArabic ? "السعر: من الأعلى إلى الأقل" : "Price: High to Low"}
          </Button>
        </div>

        {/* Services Section */}
        <FeaturedServices isArabic={isArabic} />

        {/* Load More Button */}
        <div className="text-center mt-10">
          <Button size="lg">
            {isArabic ? "تحميل المزيد" : "Load More"}
          </Button>
        </div>
      </div>

      {/* Footer Component */}
      <Footer isArabic={isArabic} />
    </main>
  );
}
