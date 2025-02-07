import { writeClient } from "@/sanity/lib/writeClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    description,
    productsCount,
    parentCategory,
    tags,
    image,
  } = body;

  // Validate required fields
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  try {
    // Create a new category in Sanity
    const category = await writeClient.create({
      _type: "category",
      name,
      description,
      productsCount,
      parentCategory,
      tags,
      image: image
        ? {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: image.asset._ref,
            },
          }
        : null,
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}