"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FooterProps {
  className?: string;
  isArabic?: boolean;
}

const Footer = ({ className, isArabic = true }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: isArabic ? "الشركة" : "Company",
      links: [
        { label: isArabic ? "حول" : "About", href: "/about" },
        { label: isArabic ? "وظائف" : "Careers", href: "/careers" },
        { label: isArabic ? "الأخبار" : "News", href: "/news" },
        { label: isArabic ? "اتصل بنا" : "Contact", href: "/contact" },
      ],
    },
    {
      title: isArabic ? "الخدمات" : "Services",
      links: [
        {
          label: isArabic ? "مطاعم" : "Restaurants",
          href: "/categories/restaurants",
        },
        { label: isArabic ? "متاجر" : "Stores", href: "/categories/stores" },
        { label: isArabic ? "سفر" : "Travel", href: "/categories/travel" },
        {
          label: isArabic ? "صيانة" : "Maintenance",
          href: "/categories/maintenance",
        },
        {
          label: isArabic ? "توصيل" : "Delivery",
          href: "/categories/delivery",
        },
        {
          label: isArabic ? "عقارات" : "Real Estate",
          href: "/categories/real-estate",
        },
      ],
    },
    {
      title: isArabic ? "الدعم" : "Support",
      links: [
        { label: isArabic ? "مركز المساعدة" : "Help Center", href: "/help" },
        { label: isArabic ? "الأسئلة الشائعة" : "FAQ", href: "/faq" },
        {
          label: isArabic ? "سياسة الخصوصية" : "Privacy Policy",
          href: "/privacy",
        },
        {
          label: isArabic ? "شروط الخدمة" : "Terms of Service",
          href: "/terms",
        },
      ],
    },
  ];

  return (
    <footer
      className={cn(
        "bg-background border-t border-border py-12 px-4",
        className,
      )}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-primary mb-4 inline-block"
            >
              {isArabic ? "سوق الخدمات" : "ServiceMarket"}
            </Link>
            <p className="text-muted-foreground mb-6">
              {isArabic
                ? "منصة وساطة للخدمات تربط الزبائن بمقدمي الخدمات المحترفين في مختلف المجالات."
                : "A service marketplace platform connecting customers with professional service providers across various domains."}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {isArabic ? "معلومات الاتصال" : "Contact Information"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">
                  {isArabic
                    ? "شارع الرئيسي، المدينة، البلد"
                    : "Main Street, City, Country"}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">
                  info@servicemarket.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear}{" "}
            {isArabic
              ? "سوق الخدمات. جميع الحقوق محفوظة."
              : "ServiceMarket. All rights reserved."}
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isArabic ? "شروط الخدمة" : "Terms of Service"}
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isArabic ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
