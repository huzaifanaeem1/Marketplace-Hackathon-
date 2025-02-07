import { writeClient } from "@/sanity/lib/writeClient";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.json(
      { error: "Order ID is required" },
      { status: 400 }
    );
  }

  const body = await request.json();
  const { orderNumber, customer, items, total, status, paymentMethod } = body;
  console.log(items);
  // Validate required fields
  if (
    !orderNumber ||
    !customer ||
    !items ||
    !total ||
    !status ||
    !paymentMethod
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // Update the order in Sanity
    const order = await writeClient
      .patch(id)
      .set({
        orderNumber,
        customer: { _ref: customer._ref },
        items: items.map((item: any) => ({
          products: { _ref: item._id },
          quantity: item.quantity,
          price: item.price,
        })),
        total,
        status,
        paymentMethod,
      })
      .commit();

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
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

//     // Delete the order document from Sanity
//     await writeClient.delete(id);

//     return NextResponse.json({
//       success: true,
//       message: "Order deleted successfully",
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: "Failed to delete order" },
//       { status: 500 }
//     );
//   }
// }