import { writeClient } from "@/sanity/lib/writeClient";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id; // Get ID from dynamic route
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

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
    // Update the category in Sanity
    const category = await writeClient
      .patch(id)
      .set({
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
      })
      .commit();

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 }
    );
  }
}

// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { id } = params;

//     // Delete category document from Sanity
//     await writeClient.delete(id);

//     return NextResponse.json({
//       success: true,
//       message: "Category deleted successfully",
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: "Failed to delete category" },
//       { status: 500 }
//     );
//   }
// }