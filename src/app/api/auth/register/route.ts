import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { name, email, password, userType, phone } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 },
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate initials from name
    const nameParts = name.split(" ");
    const initials =
      nameParts.length > 1
        ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
        : `${nameParts[0][0]}${nameParts[0][1] || ""}`.toUpperCase();

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      userType,
      phone,
      initials,
    });

    await newUser.save();

    // Return user data without password
    const userData = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      userType: newUser.userType,
      phone: newUser.phone,
      initials: newUser.initials,
    };

    return NextResponse.json({ user: userData }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 },
    );
  }
}
