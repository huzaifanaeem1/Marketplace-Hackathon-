import { writeClient } from "@/sanity/lib/writeClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { clerkId, firstName, lastName, email, phone, address } = body;

  // Validate required fields
  if (!clerkId || !firstName || !lastName || !email || !phone) {
    return NextResponse.json(
      {
        error: "Clerk ID, first name, last name, email, and phone are required",
      },
      { status: 400 }
    );
  }

  try {
    // Create a new customer in Sanity
    const customer = await writeClient.create({
      _type: "customer",
      clerkId,
      firstName,
      lastName,
      email,
      phone,
      address: address
        ? {
            street: address.street || "",
            apartment: address.apartment || "",
            city: address.city || "",
            postalCode: address.postalCode || "",
          }
        : null,
    });

    return NextResponse.json(customer);
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      { error: "Failed to create customer" },
      { status: 500 }
    );
  }
}