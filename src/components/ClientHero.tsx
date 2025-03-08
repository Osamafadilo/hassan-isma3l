"use client";

import React from "react";
import Hero from "./Hero";

interface ClientHeroProps {
  isArabic?: boolean;
  title?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  backgroundImage?: string;
  className?: string;
}

const ClientHero = ({
  isArabic = false,
  title,
  subtitle,
  ctaPrimaryText,
  ctaSecondaryText,
  backgroundImage,
  className,
}: ClientHeroProps) => {
  const handlePrimaryAction = () => {
    console.log("Primary CTA clicked");
    // Add your primary action logic here
  };

  const handleSecondaryAction = () => {
    console.log("Secondary CTA clicked");
    // Add your secondary action logic here
  };

  return (
    <Hero
      isArabic={isArabic}
      title={title}
      subtitle={subtitle}
      ctaPrimaryText={ctaPrimaryText}
      ctaSecondaryText={ctaSecondaryText}
      backgroundImage={backgroundImage}
      className={className}
      onPrimaryAction={handlePrimaryAction}
      onSecondaryAction={handleSecondaryAction}
    />
  );
};

export default ClientHero;
