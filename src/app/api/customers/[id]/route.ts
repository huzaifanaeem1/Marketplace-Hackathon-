import { writeClient } from "@/sanity/lib/writeClient";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

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
    // Update the customer in Sanity
    const customer = await writeClient
      .patch(id)
      .set({
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
      })
      .commit();

    return NextResponse.json(customer);
  } catch (error) {
    console.error("Error updating customer:", error);
    return NextResponse.json(
      { error: "Failed to update customer" },
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

//     // Delete customer document from Sanity
//     await writeClient.delete(id);

//     return NextResponse.json({
//       success: true,
//       message: "Customer deleted successfully",
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: "Failed to delete customer" },
//       { status: 500 }
//     );
//   }
// }