import React from "react";
import { cn } from "@/lib/utils";
import CategoryCard from "./CategoryCard";

interface ServiceCategoriesProps {
  categories?: {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    href: string;
  }[];
  className?: string;
  isArabic?: boolean;
}

const ServiceCategories = ({
  categories = [
    {
      id: "restaurants",
      title: "Restaurants",
      description: "Find the best dining options in your area",
      imageSrc:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      href: "/categories/restaurants",
    },
    {
      id: "stores",
      title: "Stores",
      description: "Discover local and online shopping destinations",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      href: "/categories/stores",
    },
    {
      id: "travel",
      title: "Travel",
      description: "Plan your next adventure with top travel services",
      imageSrc:
        "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
      href: "/categories/travel",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description: "Professional repair and maintenance services",
      imageSrc:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      href: "/categories/maintenance",
    },
    {
      id: "delivery",
      title: "Delivery",
      description: "Fast and reliable delivery services",
      imageSrc:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80",
      href: "/categories/delivery",
    },
    {
      id: "real-estate",
      title: "Real Estate",
      description: "Find your dream property with expert agents",
      imageSrc:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      href: "/categories/real-estate",
    },
  ],
  className,
  isArabic = true,
}: ServiceCategoriesProps) => {
  return (
    <section
      className={cn("py-12 px-4 bg-background", className)}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            {isArabic ? "فئات الخدمات" : "Service Categories"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isArabic
              ? "تصفح مجموعة واسعة من فئات الخدمات للعثور على ما تحتاجه بالضبط. من المطاعم إلى صيانة المنزل، لدينا كل ما تحتاجه."
              : "Browse through our wide range of service categories to find exactly what you need. From dining to home maintenance, we've got you covered."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              title={
                isArabic && category.id === "restaurants"
                  ? "مطاعم"
                  : isArabic && category.id === "stores"
                    ? "متاجر"
                    : isArabic && category.id === "travel"
                      ? "سفر"
                      : isArabic && category.id === "maintenance"
                        ? "صيانة"
                        : isArabic && category.id === "delivery"
                          ? "توصيل"
                          : isArabic && category.id === "real-estate"
                            ? "عقارات"
                            : category.title
              }
              description={
                isArabic && category.id === "restaurants"
                  ? "اعثر على أفضل خيارات تناول الطعام في منطقتك"
                  : isArabic && category.id === "stores"
                    ? "اكتشف وجهات التسوق المحلية وعبر الإنترنت"
                    : isArabic && category.id === "travel"
                      ? "خطط لمغامرتك القادمة مع أفضل خدمات السفر"
                      : isArabic && category.id === "maintenance"
                        ? "خدمات إصلاح وصيانة احترافية"
                        : isArabic && category.id === "delivery"
                          ? "خدمات توصيل سريعة وموثوقة"
                          : isArabic && category.id === "real-estate"
                            ? "ابحث عن عقارك المثالي مع وكلاء خبراء"
                            : category.description
              }
              imageSrc={category.imageSrc}
              href={category.href}
              className="h-full"
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {isArabic
              ? "لا ترى ما تبحث عنه؟ نحن نضيف باستمرار فئات خدمات جديدة."
              : "Don't see what you're looking for? We're constantly adding new service categories."}
          </p>
          <button className="text-primary font-medium hover:underline">
            {isArabic ? "طلب فئة جديدة" : "Request a new category"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
