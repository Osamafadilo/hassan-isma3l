"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  id?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  className?: string;
}

const CategoryCard = ({
  id = "category-1",
  title = "Restaurants",
  description = "Find the best dining options in your area",
  imageSrc = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  href = "/categories/restaurants",
  className,
}: CategoryCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Card
      className={cn(
        "overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg bg-white",
        className,
      )}
      onClick={handleClick}
    >
      <div className="relative h-40 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Browse services and find the perfect option for your needs.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm font-medium text-primary">View services</span>
        <ArrowRight className="h-4 w-4 text-primary" />
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
