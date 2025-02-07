import { client } from "@/sanity/lib/client";
import { Product } from "@/types/productType";

interface Sale {
  _id: string;
  orderNumber: string;
  total: number;
  status: string;
  customer: { firstName: string; lastName: string; email: string };
  items: { product: Product; quantity: number }[];
  _createdAt: string;
}

export default async function SalesPage() {
  const sales: Sale[] = await client.fetch(`
    *[_type == "order" && status == "completed"] | order(_createdAt desc) {
      _id,
      total,
      createdAt,
      "items": items[]{
      quantity,
      price,
      "product": products->{
       name,
      }
    },
    }
  `);

  const totalRevenue = sales.reduce((sum, sale) => sum + sale.total, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-myHeading">Sales Overview</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-6 text-myHeading">
        <h2 className="text-xl font-semibold">Total Revenue</h2>
        <p className="text-3xl font-bold text-myHeading">${totalRevenue.toFixed(2)}</p>
      </div>
      <div className="space-y-4">
        {sales.map((sale) => (
          <div key={sale._id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              Sale #{sale._id.slice(-6)}
            </h2>
            <p className="text-gray-600">
              Date: {new Date(sale._createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-600">Total: ${sale.total}</p>
            <div className="mt-4">
              <h3 className="font-medium">Products Sold:</h3>
              <ul className="list-disc pl-6">
                {sale.items.map((item) => (
                  <li key={item.product.name}>
                    {item.product.name} (x{item.quantity})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}