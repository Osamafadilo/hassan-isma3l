import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/backend/lib/mongodb";
import Provider from "@/backend/models/Provider";
import Service from "@/backend/models/Service";
import Review from "@/backend/models/Review";
import mongoose from "mongoose";

export async function GET(
  req: NextRequest,
  { params }: { params: { providerId: string } },
) {
  try {
    await connectToDatabase();

    const { providerId } = params;

    if (!mongoose.Types.ObjectId.isValid(providerId)) {
      return NextResponse.json(
        { error: "Invalid provider ID" },
        { status: 400 },
      );
    }

    const provider = await Provider.findById(providerId);

    if (!provider) {
      return NextResponse.json(
        { error: "Provider not found" },
        { status: 404 },
      );
    }

    // Get provider's services
    const services = await Service.find({ providerId: provider.userId })
      .sort({ rating: -1 })
      .limit(6);

    // Get provider's reviews
    const reviews = await Review.find({ providerId })
      .sort({ createdAt: -1 })
      .limit(5);

    return NextResponse.json({ provider, services, reviews }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching provider ${params.providerId}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch provider" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { providerId: string } },
) {
  try {
    await connectToDatabase();

    const { providerId } = params;
    const updateData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(providerId)) {
      return NextResponse.json(
        { error: "Invalid provider ID" },
        { status: 400 },
      );
    }

    const updatedProvider = await Provider.findByIdAndUpdate(
      providerId,
      { $set: updateData },
      { new: true },
    );

    if (!updatedProvider) {
      return NextResponse.json(
        { error: "Provider not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ provider: updatedProvider }, { status: 200 });
  } catch (error) {
    console.error(`Error updating provider ${params.providerId}:`, error);
    return NextResponse.json(
      { error: "Failed to update provider" },
      { status: 500 },
    );
  }
}
