import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/backend/lib/mongodb";
import Category from "@/backend/models/Category";
import Service from "@/backend/models/Service";

export async function GET(
  req: NextRequest,
  { params }: { params: { categoryId: string } },
) {
  try {
    await connectToDatabase();

    const { categoryId } = params;

    // Find the category
    const category = await Category.findOne({ id: categoryId });
    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    // Find services in this category
    const services = await Service.find({ category: categoryId }).sort({
      rating: -1,
    });

    return NextResponse.json({ category, services }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching category ${params.categoryId}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch category" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { categoryId: string } },
) {
  try {
    await connectToDatabase();

    const { categoryId } = params;
    const updateData = await req.json();

    const updatedCategory = await Category.findOneAndUpdate(
      { id: categoryId },
      { $set: updateData },
      { new: true },
    );

    if (!updatedCategory) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ category: updatedCategory }, { status: 200 });
  } catch (error) {
    console.error(`Error updating category ${params.categoryId}:`, error);
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { categoryId: string } },
) {
  try {
    await connectToDatabase();

    const { categoryId } = params;

    const deletedCategory = await Category.findOneAndDelete({ id: categoryId });

    if (!deletedCategory) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Category deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(`Error deleting category ${params.categoryId}:`, error);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 },
    );
  }
}
