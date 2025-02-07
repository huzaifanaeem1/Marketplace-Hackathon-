import { client } from "@/sanity/lib/client";
import CategoryForm from "@/components/admin/forms/CategoryForm";
import CustomerForm from "@/components/admin/forms/CustomerForm";
import { auth } from "@clerk/nextjs/server";

interface InitialData {
  _id?: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: {
    street?: string;
    apartment?: string;
    city?: string;
    postalCode?: string;
  };
}

export default async function EditCustomerPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch product data from Sanity
  const customer = await client.fetch(
    `*[_type == "customer" && _id == $id][0] {
      _id,
      clerkId,
      firstName, 
      lastName,
      email,
      phone,
      address,
    }`,
    { id: params.id }
  );

  // Prepare initialData for the form
  const initialData: InitialData = {
    _id: customer._id,
    clerkId: customer.clerkId,
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
  };

  console.log(initialData); // Log initialData for debugging

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Customer</h1>
      <CustomerForm initialData={initialData} />
    </div>
  );
}