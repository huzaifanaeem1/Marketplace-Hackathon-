import { client } from "@/sanity/lib/client";
import CategoryForm from "@/components/admin/forms/CategoryForm";

interface InitialData {
  _id?: string;
  name: string;
  description: string;
  productsCount: number;
  parentCategory: string;
  tags: string[];
  image?: {
    _type: "image";
    asset?: {
      _type: "reference";
      _ref: string;
    };
  } | null;
}

export default async function EditCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch product data from Sanity
  const category = await client.fetch(
    `*[_type == "category" && _id == $id][0] {
      _id,
      name,
      description,
      productsCount,
      parentCategory,
      tags,
      image
    }`,
    { id: params.id }
  );

  // Prepare initialData for the form
  const initialData: InitialData = {
    _id: category._id,
    name: category.name,
    description: category.description,
    productsCount: category.productsCount,
    parentCategory: category.parentCategory,
    tags: category.tags,
    image: category.image,
  };

  console.log(initialData); // Log initialData for debugging

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Category</h1>
      <CategoryForm initialData={initialData} />
    </div>
  );
}