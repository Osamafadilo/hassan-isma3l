"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  id: string;
  title: string;
  providerName: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  imageSrc: string;
  category: string;
  href: string;
  isPopular?: boolean;
}

const ServiceCard = ({
  id = "service-1",
  title = "Professional Web Design",
  providerName = "TechSolutions Inc.",
  rating = 4.8,
  reviewCount = 124,
  priceRange = "$100 - $500",
  imageSrc = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  category = "Digital Services",
  href = "/services/professional-web-design",
  isPopular = false,
}: ServiceCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Card
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col"
      onClick={handleClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {isPopular && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            Popular
          </Badge>
        )}
        <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
          {category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{providerName}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="text-sm font-medium">
            {rating} ({reviewCount} reviews)
          </span>
        </div>
        <p className="text-sm font-semibold">{priceRange}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-3">
        <span className="text-sm font-medium text-primary">View details</span>
        <ArrowRight className="h-4 w-4 text-primary" />
      </CardFooter>
    </Card>
  );
};

interface FeaturedServicesProps {
  services?: ServiceCardProps[];
  className?: string;
  isArabic?: boolean;
}

const FeaturedServices = ({
  services = [
    {
      id: "service-1",
      title: "Professional Web Design",
      providerName: "TechSolutions Inc.",
      rating: 4.8,
      reviewCount: 124,
      priceRange: "$100 - $500",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Digital Services",
      href: "/services/professional-web-design",
      isPopular: true,
    },
    {
      id: "service-2",
      title: "Home Cleaning Service",
      providerName: "CleanHome Pro",
      rating: 4.6,
      reviewCount: 89,
      priceRange: "$50 - $150",
      imageSrc:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      category: "Home Maintenance",
      href: "/services/home-cleaning",
      isPopular: false,
    },
    {
      id: "service-3",
      title: "Food Delivery",
      providerName: "QuickBite Delivery",
      rating: 4.7,
      reviewCount: 215,
      priceRange: "$5 - $20",
      imageSrc:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
      category: "Food & Dining",
      href: "/services/food-delivery",
      isPopular: true,
    },
    {
      id: "service-4",
      title: "Professional Photography",
      providerName: "CaptureMoment Studios",
      rating: 4.9,
      reviewCount: 76,
      priceRange: "$200 - $1000",
      imageSrc:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
      category: "Creative Services",
      href: "/services/professional-photography",
      isPopular: false,
    },
    {
      id: "service-5",
      title: "Car Repair & Maintenance",
      providerName: "AutoFix Garage",
      rating: 4.5,
      reviewCount: 132,
      priceRange: "$80 - $300",
      imageSrc:
        "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80",
      category: "Automotive",
      href: "/services/car-repair",
      isPopular: false,
    },
    {
      id: "service-6",
      title: "Interior Design Consultation",
      providerName: "Elegant Spaces Design",
      rating: 4.7,
      reviewCount: 58,
      priceRange: "$150 - $800",
      imageSrc:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      category: "Home & Decor",
      href: "/services/interior-design",
      isPopular: true,
    },
  ],
  className,
  isArabic = true,
}: FeaturedServicesProps) => {
  // Translate service categories and other text based on language
  const getTranslatedCategory = (category: string): string => {
    if (!isArabic) return category;

    const translations: Record<string, string> = {
      "Digital Services": "الخدمات الرقمية",
      "Home Maintenance": "صيانة المنزل",
      "Food & Dining": "الطعام والمطاعم",
      "Creative Services": "الخدمات الإبداعية",
      Automotive: "السيارات",
      "Home & Decor": "المنزل والديكور",
    };

    return translations[category] || category;
  };

  // Translate price ranges if in Arabic
  const getTranslatedPrice = (price: string): string => {
    if (!isArabic) return price;
    return price.replace("$", "").replace(" - ", " - $") + " $";
  };

  return (
    <section
      className={cn("py-12 px-4 bg-slate-50", className)}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {isArabic ? "الخدمات المميزة" : "Featured Services"}
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              {isArabic
                ? "اكتشف أفضل الخدمات المتاحة على منصتنا، مختارة خصيصًا لتلبية احتياجاتك."
                : "Discover the best services available on our platform, handpicked to meet your needs."}
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 self-start md:self-auto"
          >
            {isArabic ? "عرض جميع الخدمات" : "View all services"}
            <ArrowRight className={`h-4 w-4 ${isArabic ? "mr-2" : "ml-2"}`} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              category={getTranslatedCategory(service.category)}
              priceRange={getTranslatedPrice(service.priceRange)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            {isArabic
              ? "هل أنت مقدم خدمة؟ انضم إلى منصتنا وابدأ في الوصول إلى عملاء جدد اليوم."
              : "Are you a service provider? Join our platform and start reaching new customers today."}
          </p>
          <Button variant="default" size="lg">
            {isArabic ? "سجل كمقدم خدمة" : "Register as a Provider"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
