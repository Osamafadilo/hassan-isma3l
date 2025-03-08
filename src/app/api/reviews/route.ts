import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/backend/lib/mongodb";
import Review from "@/backend/models/Review";
import Service from "@/backend/models/Service";
import Provider from "@/backend/models/Provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/backend/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { serviceId, providerId, rating, comment } = await req.json();

    // Create new review
    const newReview = new Review({
      userId: session.user.id,
      serviceId,
      providerId,
      rating,
      comment,
    });

    await newReview.save();

    // Update service rating
    const serviceReviews = await Review.find({ serviceId });
    const serviceAvgRating =
      serviceReviews.reduce((acc, review) => acc + review.rating, 0) /
      serviceReviews.length;

    await Service.findByIdAndUpdate(serviceId, {
      $set: {
        rating: serviceAvgRating.toFixed(1),
        reviewCount: serviceReviews.length,
      },
    });

    // Update provider rating
    const providerReviews = await Review.find({ providerId });
    const providerAvgRating =
      providerReviews.reduce((acc, review) => acc + review.rating, 0) /
      providerReviews.length;

    await Provider.findByIdAndUpdate(providerId, {
      $set: {
        rating: providerAvgRating.toFixed(1),
        reviewCount: providerReviews.length,
      },
    });

    return NextResponse.json({ review: newReview }, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 },
    );
  }
}
