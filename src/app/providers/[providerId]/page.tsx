"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Star,
  MapPin,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import FeaturedServices from "@/components/FeaturedServices";

export default function ProviderPage() {
  const params = useParams();
  const providerId = params.providerId as string;

  // Default language setting - can be connected to user preferences or browser settings
  const isArabic = true;

  // This would normally come from a database or API
  const getProviderInfo = (id: string) => {
    // Mock provider data
    return {
      id: providerId,
      name: isArabic ? "حلول تقنية" : "TechSolutions Inc.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=techsolutions",
      coverImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
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
      description: isArabic
        ? "شركة متخصصة في تقديم حلول تقنية متكاملة للشركات والأفراد منذ عام ٢٠١٠. نقدم خدمات تطوير الويب، وتصميم واجهات المستخدم، وتطوير تطبيقات الجوال، وخدمات الاستضافة والدعم الفني."
        : "A company specialized in providing integrated technical solutions for companies and individuals since 2010. We offer web development, UI design, mobile app development, hosting services, and technical support.",
      contactInfo: {
        email: "info@techsolutions.example.com",
        phone: "+966 12 345 6789",
        website: "www.techsolutions-example.com",
        workingHours: isArabic
          ? "الأحد - الخميس: ٩ ص - ٥ م"
          : "Sunday - Thursday: 9 AM - 5 PM",
      },
      stats: {
        completedProjects: 1240,
        activeProjects: 18,
        clientsServed: 850,
        responseRate: "98%",
        responseTime: isArabic ? "خلال ساعتين" : "Within 2 hours",
      },
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
      ],
    };
  };

  const provider = getProviderInfo(providerId);

  return (
    <main className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header Component */}
      <Header isArabic={isArabic} />

      {/* Provider Cover Image */}
      <div className="relative h-[200px] md:h-[300px] w-full">
        <Image
          src={provider.coverImage}
          alt={provider.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        {/* Back Button */}
        <div className="mb-6 pt-4">
          <Link href="/providers">
            <Button
              variant="ghost"
              className="bg-background/80 backdrop-blur-sm"
            >
              <ArrowLeft
                className={`${isArabic ? "ml-2 rotate-180" : "mr-2"} h-4 w-4`}
              />
              {isArabic ? "العودة إلى مزودي الخدمات" : "Back to Providers"}
            </Button>
          </Link>
        </div>

        {/* Provider Profile Header */}
        <div className="bg-card rounded-lg shadow-md border p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-background mr-4 mb-4 md:mb-0">
              <Image
                src={provider.image}
                alt={provider.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold flex items-center">
                    {provider.name}
                    {provider.isVerified && (
                      <CheckCircle className="ml-2 h-5 w-5 text-green-500" />
                    )}
                  </h1>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-sm font-medium">
                      {provider.rating} ({provider.reviewCount}{" "}
                      {isArabic ? "تقييم" : "reviews"})
                    </span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">
                      {provider.location}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button>{isArabic ? "تواصل معنا" : "Contact Us"}</Button>
                  <Button variant="outline">
                    {isArabic ? "طلب عرض سعر" : "Request Quote"}
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {provider.categories.map((category, index) => (
                  <Badge key={index} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Provider Details */}
          <div className="md:col-span-2 space-y-8">
            {/* Provider Details Tabs */}
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">
                  {isArabic ? "نبذة عنا" : "About"}
                </TabsTrigger>
                <TabsTrigger value="services">
                  {isArabic ? "خدماتنا" : "Services"}
                </TabsTrigger>
                <TabsTrigger value="gallery">
                  {isArabic ? "معرض الأعمال" : "Gallery"}
                </TabsTrigger>
                <TabsTrigger value="reviews">
                  {isArabic ? "التقييمات" : "Reviews"}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  {isArabic ? "نبذة عن الشركة" : "About the Company"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {provider.description}
                </p>

                <h4 className="text-lg font-medium mb-3">
                  {isArabic ? "إحصائيات" : "Statistics"}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">
                      {provider.stats.completedProjects}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "مشاريع مكتملة" : "Completed Projects"}
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">
                      {provider.stats.activeProjects}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "مشاريع نشطة" : "Active Projects"}
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">
                      {provider.stats.clientsServed}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "عملاء تمت خدمتهم" : "Clients Served"}
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">
                      {provider.stats.responseRate}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "معدل الاستجابة" : "Response Rate"}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services" className="mt-6">
                <h3 className="text-xl font-semibold mb-6">
                  {isArabic ? "خدماتنا" : "Our Services"}
                </h3>
                <FeaturedServices isArabic={isArabic} />
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  {isArabic ? "معرض أعمالنا" : "Our Work Gallery"}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {provider.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${provider.name} work sample ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  {isArabic ? "تقييمات العملاء" : "Customer Reviews"}
                </h3>
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 ${star <= Math.floor(provider.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-2xl font-medium">
                    {provider.rating}
                  </span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-muted-foreground">
                    {isArabic
                      ? `${provider.reviewCount} تقييم`
                      : `${provider.reviewCount} reviews`}
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

          {/* Right Column - Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">
                {isArabic ? "معلومات الاتصال" : "Contact Information"}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium">
                      {isArabic ? "البريد الإلكتروني" : "Email"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {provider.contactInfo.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium">
                      {isArabic ? "رقم الهاتف" : "Phone"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {provider.contactInfo.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium">
                      {isArabic ? "الموقع" : "Location"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {provider.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium">
                      {isArabic ? "ساعات العمل" : "Working Hours"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {provider.contactInfo.workingHours}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full">
                  {isArabic ? "تواصل معنا" : "Contact Us"}
                </Button>
              </div>
            </div>

            {/* Response Info Card */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">
                {isArabic ? "معلومات الاستجابة" : "Response Information"}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-sm">
                    {isArabic ? "معدل الاستجابة" : "Response Rate"}
                  </p>
                  <p className="text-sm font-medium">
                    {provider.stats.responseRate}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">
                    {isArabic ? "وقت الاستجابة" : "Response Time"}
                  </p>
                  <p className="text-sm font-medium">
                    {provider.stats.responseTime}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">
                    {isArabic ? "آخر تواجد" : "Last Online"}
                  </p>
                  <p className="text-sm font-medium">
                    {isArabic ? "الآن" : "Now"}
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">
                {isArabic ? "حجز استشارة" : "Book a Consultation"}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {isArabic
                  ? "احجز استشارة مجانية لمناقشة احتياجاتك ومتطلباتك"
                  : "Book a free consultation to discuss your needs and requirements"}
              </p>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                <p className="text-sm">
                  {isArabic ? "متاح للحجز" : "Available for booking"}
                </p>
              </div>
              <Button className="w-full">
                {isArabic ? "حجز موعد" : "Book Appointment"}
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
