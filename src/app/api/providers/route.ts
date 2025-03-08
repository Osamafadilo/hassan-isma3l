import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const verified = url.searchParams.get("verified");
    const limit = parseInt(url.searchParams.get("limit") || "10");

    let query: any = {};

    if (category) {
      query.categories = { $in: [category] };
    }

    if (verified === "true") {
      query.isVerified = true;
    }

    const providers = await Provider.find(query)
      .sort({ rating: -1 })
      .limit(limit);

    return NextResponse.json({ providers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching providers:", error);
    return NextResponse.json(
      { error: "Failed to fetch providers" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const providerData = await req.json();

    const newProvider = new Provider(providerData);
    await newProvider.save();

    return NextResponse.json({ provider: newProvider }, { status: 201 });
  } catch (error) {
    console.error("Error creating provider:", error);
    return NextResponse.json(
      { error: "Failed to create provider" },
      { status: 500 },
    );
  }
}
