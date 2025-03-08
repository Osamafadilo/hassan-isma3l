"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Share2,
  Heart,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function ServicePage() {
  const params = useParams();
  const serviceId = params.serviceId as string;

  // Default language setting - can be connected to user preferences or browser settings
  const isArabic = true;

  // This would normally come from a database or API
  const getServiceInfo = (id: string) => {
    // Mock service data
    return {
      id: serviceId,
      title: isArabic ? "تصميم موقع احترافي" : "Professional Web Design",
      providerName: isArabic ? "حلول تقنية" : "TechSolutions Inc.",
      rating: 4.8,
      reviewCount: 124,
      priceRange: isArabic ? "١٠٠$ - ٥٠٠$" : "$100 - $500",
      category: isArabic ? "الخدمات الرقمية" : "Digital Services",
      description: isArabic
        ? "نقدم خدمات تصميم مواقع احترافية تناسب احتياجات عملك. يشمل ذلك تصميم واجهة المستخدم، وتطوير الواجهة الخلفية، والتكامل مع أنظمة الدفع، وتحسين محركات البحث."
        : "We provide professional web design services tailored to your business needs. This includes UI design, backend development, payment integration, and SEO optimization.",
      location: isArabic
        ? "الرياض، المملكة العربية السعودية"
        : "Riyadh, Saudi Arabia",
      deliveryTime: isArabic ? "٣-٥ أيام عمل" : "3-5 business days",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      ],
      features: isArabic
        ? [
            "تصميم متجاوب",
            "تحسين محركات البحث",
            "دعم فني",
            "استضافة مجانية لمدة سنة",
          ]
        : [
            "Responsive Design",
            "SEO Optimization",
            "Technical Support",
            "Free Hosting for 1 Year",
          ],
      providerInfo: {
        name: isArabic ? "حلول تقنية" : "TechSolutions Inc.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=techsolutions",
        description: isArabic
          ? "شركة متخصصة في تقديم حلول تقنية متكاملة للشركات والأفراد منذ عام ٢٠١٠."
          : "A company specialized in providing integrated technical solutions for companies and individuals since 2010.",
        rating: 4.9,
        reviewCount: 532,
        completedProjects: 1240,
      },
    };
  };

  const service = getServiceInfo(serviceId);

  return (
    <main className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header Component */}
      <Header isArabic={isArabic} />

      <div className="container mx-auto py-8 px-4">
        {/* Back Button */}
        <Link href="/services">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft
              className={`${isArabic ? "ml-2 rotate-180" : "mr-2"} h-4 w-4`}
            />
            {isArabic ? "العودة إلى الخدمات" : "Back to Services"}
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Service Images and Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={service.images[0]}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-white/80 hover:bg-white"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-white/80 hover:bg-white"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {service.images.map((img, index) => (
                <div
                  key={index}
                  className="relative h-20 w-20 rounded-md overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${service.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Service Details Tabs */}
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">
                  {isArabic ? "الوصف" : "Description"}
                </TabsTrigger>
                <TabsTrigger value="features">
                  {isArabic ? "المميزات" : "Features"}
                </TabsTrigger>
                <TabsTrigger value="reviews">
                  {isArabic ? "التقييمات" : "Reviews"}
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="description"
                className="mt-4 p-4 bg-muted/30 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {isArabic ? "وصف الخدمة" : "Service Description"}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </TabsContent>
              <TabsContent
                value="features"
                className="mt-4 p-4 bg-muted/30 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {isArabic ? "مميزات الخدمة" : "Service Features"}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent
                value="reviews"
                className="mt-4 p-4 bg-muted/30 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {isArabic ? "تقييمات العملاء" : "Customer Reviews"}
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${star <= Math.floor(service.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-medium">
                    {service.rating}
                  </span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-muted-foreground">
                    {isArabic
                      ? `${service.reviewCount} تقييم`
                      : `${service.reviewCount} reviews`}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {isArabic
                    ? "لا توجد تقييمات متاحة حالياً"
                    : "No reviews available at the moment"}
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Service Summary and Booking */}
          <div className="space-y-6">
            {/* Service Summary Card */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <Badge className="mb-2">{service.category}</Badge>
              <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
              <div className="flex items-center mb-4">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="text-sm font-medium">
                  {service.rating} ({service.reviewCount}{" "}
                  {isArabic ? "تقييم" : "reviews"})
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">
                    {service.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">
                    {isArabic ? "وقت التسليم:" : "Delivery Time:"}{" "}
                    {service.deliveryTime}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <p className="text-sm text-muted-foreground mb-1">
                  {isArabic ? "نطاق السعر" : "Price Range"}
                </p>
                <p className="text-2xl font-bold">{service.priceRange}</p>
              </div>

              <Button className="w-full mb-2">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {isArabic ? "إضافة إلى السلة" : "Add to Cart"}
              </Button>
              <Button variant="outline" className="w-full">
                {isArabic ? "طلب عرض سعر مخصص" : "Request Custom Quote"}
              </Button>
            </div>

            {/* Provider Info Card */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">
                {isArabic ? "معلومات مزود الخدمة" : "Service Provider"}
              </h3>
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={service.providerInfo.image}
                    alt={service.providerInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{service.providerInfo.name}</h4>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-xs">
                      {service.providerInfo.rating} (
                      {service.providerInfo.reviewCount})
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {service.providerInfo.description}
              </p>
              <div className="text-sm">
                <p>
                  <span className="font-medium">
                    {isArabic ? "المشاريع المكتملة:" : "Completed Projects:"}
                  </span>{" "}
                  {service.providerInfo.completedProjects}
                </p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                {isArabic ? "عرض الملف الشخصي" : "View Profile"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer isArabic={isArabic} />
    </main>
  );
}
