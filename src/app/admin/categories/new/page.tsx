import CategoryForm from "@/components/admin/forms/CategoryForm";

export default function NewCategoryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add New Category</h1>
      <CategoryForm />
    </div>
  );
}