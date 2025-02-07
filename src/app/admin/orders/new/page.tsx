import OrderForm from "@/components/admin/forms/OrderForm";

export default function NewOrderPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create New Order</h1>
      <OrderForm />
    </div>
  );
}