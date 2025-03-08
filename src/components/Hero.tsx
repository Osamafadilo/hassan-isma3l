"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  backgroundImage?: string;
  isArabic?: boolean;
  className?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

const Hero = ({
  title = "Find Professional Services for Every Need",
  subtitle = "Connect with trusted service providers across multiple categories. From home maintenance to professional consultations, we've got you covered.",
  ctaPrimaryText = "Explore Services",
  ctaSecondaryText = "Become a Provider",
  backgroundImage = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80",
  isArabic = false,
  className,
  onPrimaryAction = () => console.log("Primary CTA clicked"),
  onSecondaryAction = () => console.log("Secondary CTA clicked"),
}: HeroProps) => {
  // Arabic translations for default text
  const arabicTitle = "ابحث عن خدمات احترافية لكل احتياجاتك";
  const arabicSubtitle =
    "تواصل مع مزودي خدمات موثوقين عبر فئات متعددة. من صيانة المنزل إلى الاستشارات المهنية، نحن نغطي كل احتياجاتك.";
  const arabicPrimaryText = "استكشف الخدمات";
  const arabicSecondaryText = "كن مزود خدمة";

  return (
    <section
      className={cn(
        "relative w-full h-[500px] bg-background overflow-hidden",
        className,
      )}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {isArabic ? arabicTitle : title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            {isArabic ? arabicSubtitle : subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium"
              onClick={onPrimaryAction}
            >
              {isArabic ? arabicPrimaryText : ctaPrimaryText}
              <ArrowRight
                className={`ml-2 h-4 w-4 ${isArabic ? "rotate-180" : ""}`}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/20"
              onClick={onSecondaryAction}
            >
              {isArabic ? arabicSecondaryText : ctaSecondaryText}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
