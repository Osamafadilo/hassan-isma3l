"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedServices from "@/components/FeaturedServices";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.categoryId as string;

  // Default language setting - can be connected to user preferences or browser settings
  const isArabic = true;

  // This would normally come from a database or API
  const getCategoryInfo = (id: string) => {
    const categories = {
      restaurants: {
        title: isArabic ? "مطاعم" : "Restaurants",
        description: isArabic
          ? "اكتشف أفضل المطاعم في منطقتك"
          : "Discover the best restaurants in your area",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      },
      stores: {
        title: isArabic ? "متاجر" : "Stores",
        description: isArabic
          ? "تسوق من أفضل المتاجر المحلية والعالمية"
          : "Shop from the best local and global stores",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      },
      travel: {
        title: isArabic ? "سفر" : "Travel",
        description: isArabic
          ? "خطط لرحلتك القادمة مع أفضل خدمات السفر"
          : "Plan your next trip with the best travel services",
        image:
          "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80",
      },
      maintenance: {
        title: isArabic ? "صيانة" : "Maintenance",
        description: isArabic
          ? "خدمات صيانة احترافية لمنزلك وممتلكاتك"
          : "Professional maintenance services for your home and properties",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
      },
      delivery: {
        title: isArabic ? "توصيل" : "Delivery",
        description: isArabic
          ? "خدمات توصيل سريعة وموثوقة"
          : "Fast and reliable delivery services",
        image:
          "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=1200&q=80",
      },
      "real-estate": {
        title: isArabic ? "عقارات" : "Real Estate",
        description: isArabic
          ? "ابحث عن منزل أحلامك مع وكلاء عقارات محترفين"
          : "Find your dream home with professional real estate agents",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      },
    };

    return (
      categories[categoryId as keyof typeof categories] || {
        title: isArabic ? "فئة غير معروفة" : "Unknown Category",
        description: isArabic
          ? "لم يتم العثور على معلومات لهذه الفئة"
          : "No information found for this category",
        image:
          "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
      }
    );
  };

  const category = getCategoryInfo(categoryId);

  return (
    <main className="min-h-screen bg-background">
      {/* Header Component */}
      <Header isArabic={isArabic} />

      {/* Category Hero */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4 z-10">
          <Link href="/categories">
            <Button variant="ghost" className="text-white mb-4">
              <ArrowLeft
                className={`mr-2 h-4 w-4 ${isArabic ? "rotate-180" : ""}`}
              />
              {isArabic ? "العودة إلى الفئات" : "Back to Categories"}
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            {category.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Services in this category */}
      <div className="py-12 container mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          {isArabic
            ? `خدمات في فئة ${category.title}`
            : `Services in ${category.title}`}
        </h2>

        <FeaturedServices isArabic={isArabic} />
      </div>

      {/* Footer Component */}
      <Footer isArabic={isArabic} />
    </main>
  );
}
