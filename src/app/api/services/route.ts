import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const popular = url.searchParams.get("popular");
    const limit = parseInt(url.searchParams.get("limit") || "10");

    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (popular === "true") {
      query.isPopular = true;
    }

    const services = await Service.find(query)
      .sort({ rating: -1 })
      .limit(limit);

    return NextResponse.json({ services }, { status: 200 });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const serviceData = await req.json();

    const newService = new Service(serviceData);
    await newService.save();

    return NextResponse.json({ service: newService }, { status: 201 });
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 },
    );
  }
}
