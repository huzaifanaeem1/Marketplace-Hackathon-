import CustomerForm from "@/components/admin/forms/CustomerForm";
import { auth } from "@clerk/nextjs/server";

export default async function NewCustomerPage() {
  const { userId } = await auth();
  if (!userId) return;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create Customer</h1>
      <CustomerForm clerkId={userId} />
    </div>
  );
}