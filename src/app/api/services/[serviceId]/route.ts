import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/backend/lib/mongodb";
import Service from "@/backend/models/Service";
import Provider from "@/backend/models/Provider";
import Review from "@/backend/models/Review";
import mongoose from "mongoose";

export async function GET(
  req: NextRequest,
  { params }: { params: { serviceId: string } },
) {
  try {
    await connectToDatabase();

    const { serviceId } = params;

    if (!mongoose.Types.ObjectId.isValid(serviceId)) {
      return NextResponse.json(
        { error: "Invalid service ID" },
        { status: 400 },
      );
    }

    const service = await Service.findById(serviceId);

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // Get provider information
    const provider = await Provider.findOne({ userId: service.providerId });

    // Get reviews
    const reviews = await Review.find({ serviceId })
      .sort({ createdAt: -1 })
      .limit(5);

    return NextResponse.json({ service, provider, reviews }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching service ${params.serviceId}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch service" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { serviceId: string } },
) {
  try {
    await connectToDatabase();

    const { serviceId } = params;
    const updateData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(serviceId)) {
      return NextResponse.json(
        { error: "Invalid service ID" },
        { status: 400 },
      );
    }

    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { $set: updateData },
      { new: true },
    );

    if (!updatedService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ service: updatedService }, { status: 200 });
  } catch (error) {
    console.error(`Error updating service ${params.serviceId}:`, error);
    return NextResponse.json(
      { error: "Failed to update service" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { serviceId: string } },
) {
  try {
    await connectToDatabase();

    const { serviceId } = params;

    if (!mongoose.Types.ObjectId.isValid(serviceId)) {
      return NextResponse.json(
        { error: "Invalid service ID" },
        { status: 400 },
      );
    }

    const deletedService = await Service.findByIdAndDelete(serviceId);

    if (!deletedService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // Also delete related reviews
    await Review.deleteMany({ serviceId });

    return NextResponse.json(
      { message: "Service deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(`Error deleting service ${params.serviceId}:`, error);
    return NextResponse.json(
      { error: "Failed to delete service" },
      { status: 500 },
    );
  }
}
