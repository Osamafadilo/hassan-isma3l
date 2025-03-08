import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Star, MapPin, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ProviderCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  categories: string[];
  isVerified: boolean;
  completedProjects: number;
  isArabic?: boolean;
}

const ProviderCard = ({
  id,
  name,
  image,
  rating,
  reviewCount,
  location,
  categories,
  isVerified,
  completedProjects,
  isArabic = true,
}: ProviderCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start">
          <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {name}
                {isVerified && (
                  <CheckCircle className="inline-block ml-2 h-4 w-4 text-green-500" />
                )}
              </h3>
              <Link href={`/providers/${id}`}>
                <Button variant="outline" size="sm">
                  {isArabic ? "عرض الملف" : "View Profile"}
                </Button>
              </Link>
            </div>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="text-sm font-medium">
                {rating} ({reviewCount} {isArabic ? "تقييم" : "reviews"})
              </span>
            </div>
            <div className="flex items-center mt-1 text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category, index) => (
              <Badge key={index} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {isArabic ? "المشاريع المكتملة:" : "Completed Projects:"}{" "}
            {completedProjects}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ProvidersPage() {
  // Default language setting - can be connected to user preferences or browser settings
  const isArabic = true;

  // Mock providers data
  const providers = [
    {
      id: "provider-1",
      name: isArabic ? "حلول تقنية" : "TechSolutions Inc.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=techsolutions",
      rating: 4.9,
      reviewCount: 532,
      location: isArabic
        ? "الرياض، المملكة العربية السعودية"
        : "Riyadh, Saudi Arabia",
      categories: isArabic
        ? ["الخدمات الرقمية", "تطوير الويب", "تصميم"]
        : ["Digital Services", "Web Development", "Design"],
      isVerified: true,
      completedProjects: 1240,
    },
    {
      id: "provider-2",
      name: isArabic ? "بيت النظافة" : "CleanHome Pro",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=cleanhome",
      rating: 4.7,
      reviewCount: 328,
      location: isArabic
        ? "جدة، المملكة العربية السعودية"
        : "Jeddah, Saudi Arabia",
      categories: isArabic
        ? ["صيانة المنزل", "تنظيف", "خدمات منزلية"]
        : ["Home Maintenance", "Cleaning", "Household Services"],
      isVerified: true,
      completedProjects: 890,
    },
    {
      id: "provider-3",
      name: isArabic ? "توصيل سريع" : "QuickBite Delivery",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=quickbite",
      rating: 4.5,
      reviewCount: 612,
      location: isArabic
        ? "الدمام، المملكة العربية السعودية"
        : "Dammam, Saudi Arabia",
      categories: isArabic
        ? ["توصيل طعام", "توصيل سريع", "مطاعم"]
        : ["Food Delivery", "Fast Delivery", "Restaurants"],
      isVerified: true,
      completedProjects: 2150,
    },
    {
      id: "provider-4",
      name: isArabic ? "استوديو لحظة" : "CaptureMoment Studios",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=capturemoment",
      rating: 4.8,
      reviewCount: 215,
      location: isArabic
        ? "الرياض، المملكة العربية السعودية"
        : "Riyadh, Saudi Arabia",
      categories: isArabic
        ? ["تصوير", "خدمات إبداعية", "تصميم"]
        : ["Photography", "Creative Services", "Design"],
      isVerified: false,
      completedProjects: 340,
    },
    {
      id: "provider-5",
      name: isArabic ? "إصلاح السيارات" : "AutoFix Garage",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=autofix",
      rating: 4.6,
      reviewCount: 412,
      location: isArabic
        ? "جدة، المملكة العربية السعودية"
        : "Jeddah, Saudi Arabia",
      categories: isArabic
        ? ["سيارات", "صيانة", "إصلاح"]
        : ["Automotive", "Maintenance", "Repair"],
      isVerified: true,
      completedProjects: 780,
    },
    {
      id: "provider-6",
      name: isArabic ? "مساحات أنيقة" : "Elegant Spaces Design",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=elegantspaces",
      rating: 4.9,
      reviewCount: 187,
      location: isArabic
        ? "الرياض، المملكة العربية السعودية"
        : "Riyadh, Saudi Arabia",
      categories: isArabic
        ? ["تصميم داخلي", "ديكور", "منزل"]
        : ["Interior Design", "Decor", "Home"],
      isVerified: true,
      completedProjects: 230,
    },
  ];

  return (
    <main className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header Component */}
      <Header isArabic={isArabic} />

      <div className="py-10 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isArabic ? "مزودي الخدمات" : "Service Providers"}
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          {isArabic
            ? "تواصل مع مزودي خدمات محترفين ذوي خبرة في مختلف المجالات"
            : "Connect with experienced professional service providers across various domains"}
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search
              className={`absolute ${isArabic ? "right-3" : "left-3"} top-3 h-5 w-5 text-muted-foreground`}
            />
            <Input
              className={`${isArabic ? "pr-10" : "pl-10"} py-6`}
              placeholder={
                isArabic
                  ? "ابحث عن مزودي خدمات..."
                  : "Search for service providers..."
              }
            />
            <Button
              className={`absolute top-1 bottom-1 ${isArabic ? "left-1" : "right-1"}`}
            >
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
            {isArabic ? "تم التحقق" : "Verified"}
          </Button>
          <Button variant="outline" className="mb-2">
            {isArabic ? "الخدمات الرقمية" : "Digital Services"}
          </Button>
          <Button variant="outline" className="mb-2">
            {isArabic ? "صيانة المنزل" : "Home Maintenance"}
          </Button>
          <Button variant="outline" className="mb-2">
            {isArabic ? "توصيل" : "Delivery"}
          </Button>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} {...provider} isArabic={isArabic} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <Button size="lg">{isArabic ? "تحميل المزيد" : "Load More"}</Button>
        </div>

        {/* Become a Provider CTA */}
        <div className="mt-16 bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {isArabic
              ? "هل أنت محترف؟ انضم إلينا كمزود خدمة"
              : "Are you a professional? Join us as a service provider"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {isArabic
              ? "قم بتوسيع نطاق عملك والوصول إلى المزيد من العملاء من خلال منصتنا"
              : "Expand your business and reach more customers through our platform"}
          </p>
          <Button size="lg">
            {isArabic ? "سجل كمزود خدمة" : "Register as a Provider"}
          </Button>
        </div>
      </div>

      {/* Footer Component */}
      <Footer isArabic={isArabic} />
    </main>
  );
}
