import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id; // Get ID from dynamic route
  if (!id)
    return NextResponse.json({ error: "ID is required" }, { status: 400 });

  const body = await request.json();
  const {
    name,
    description,
    price,
    stock,
    discountPercent,
    bestSelling,
    colors,
    sizes,
    category,
    image,
  } = body;

  try {
    const product = await writeClient
      .patch(id)
      .set({
        name,
        description,
        price,
        stock,
        discountPercent,
        bestSelling,
        colors,
        sizes,
        category: { _type: "reference", _ref: category },
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: image.asset._ref,
          },
        },
      })
      .commit();

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
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

//     // Delete product document from Sanity
//     await writeClient.delete(id);

//     return NextResponse.json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: "Failed to delete product" },
//       { status: 500 }
//     );
//   }
// }