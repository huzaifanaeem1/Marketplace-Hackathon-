import { client } from "@/sanity/lib/client";
import ProductForm from "@/components/admin/forms/ProductForm";

interface InitialData {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  discountPercent: number;
  bestSelling: boolean;
  colors: string[];
  sizes: string[];
  category: { _id: string };
  image?: {
    _type: "image";
    asset?: {
      _type: "reference";
      _ref: string;
    };
  } | null;
}
export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch product data from Sanity
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0] {
      _id,
      name,
      description,
      price,
      stock,
      discountPercent,
      bestSelling,
      colors,
      sizes,
      category->{_id},
      image
    }`,
    { id: params.id }
  );

  // Prepare initialData for the form
  const initialData: InitialData = {
    _id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    discountPercent: product.discountPercent,
    bestSelling: product.bestSelling,
    colors: product.colors || [],
    sizes: product.sizes || [],
    category: product.category,
    image: product.image,
  };

  console.log(initialData); // Log initialData for debugging

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <ProductForm initialData={initialData} />
    </div>
  );
}