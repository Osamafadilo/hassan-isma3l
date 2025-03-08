import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/backend/lib/mongodb";
import Category from "@/backend/models/Category";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const categories = await Category.find({}).sort({ title: 1 });

    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { id, title, description, imageSrc, titleAr, descriptionAr } =
      await req.json();

    // Check if category with this ID already exists
    const existingCategory = await Category.findOne({ id });
    if (existingCategory) {
      return NextResponse.json(
        { error: "Category with this ID already exists" },
        { status: 400 },
      );
    }

    const newCategory = new Category({
      id,
      title,
      description,
      imageSrc,
      titleAr,
      descriptionAr,
    });

    await newCategory.save();

    return NextResponse.json({ category: newCategory }, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 },
    );
  }
}
