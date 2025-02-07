
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import SalesChart from "@/components/admin/sales/SalesChart";
import { DollarSign, Eye, Package, ShoppingBag, Tag, Users } from "lucide-react";
interface Metric {
  title: string;
  value: number | string;
  icon: string;
}

interface Order {
  _id: string;
  orderNumber: string;
  total: number;
  status: string;
  customer: { firstName: string; lastName: string; email: string };
  _createdAt: string;
}

export default async function AdminDashboard() {
  // Fetch all completed orders to calculate total revenue
  const completedOrders: Order[] = await client.fetch(`
    *[_type == "order" && status == "completed"] {
      _id,
      total,
      _createdAt
    }
  `);

  // Calculate total revenue
  const totalRevenue = completedOrders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  // Fetch other metrics
  const totalOrders = await client.fetch(`count(*[_type == "order"])`);
  const totalProducts = await client.fetch(`count(*[_type == "product"])`);
  const totalCustomers = await client.fetch(`count(*[_type == "customer"])`);

  // Fetch recent orders
  const recentOrders: Order[] = await client.fetch(`
   *[_type == "order"] | order(_createdAt desc) {
      _id,
      orderNumber,
      total,
      status,
      customer->{firstName, lastName , email},
      _createdAt
    }
  `);

  const labels = completedOrders.map((sale) =>
    new Date(sale._createdAt).toLocaleDateString()
  );
  const data = completedOrders.map((sale) => sale.total);
  // Metrics data

  type Metric = {
    title: string;
    value: string;
    icon: JSX.Element;
  };


  const metrics: Metric[] = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: <DollarSign size={24} />,
    },
    {
      title: "Total Orders",
      value: totalOrders.toLocaleString(),
      icon: <Package size={24} />,
    },
    {
      title: "Total Products",
      value: totalProducts.toLocaleString(),
      icon: <ShoppingBag size={24} />,
    },
    {
      title: "Total Customers",
      value: totalCustomers.toLocaleString(),
      icon: <Users size={24} />,
    },
  ];



  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
              </div>
              <span className="text-3xl">{metric.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sales chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <SalesChart labels={labels} data={data} />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link
          href="/admin/products"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center"
        >
          <ShoppingBag size={32} className="text-blue-500" />
          <p className="mt-2 font-medium">Manage Products</p>
        </Link>

        <Link
          href="/admin/orders"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center"
        >
          <Package size={32} className="text-green-500" />
          <p className="mt-2 font-medium">Manage Orders</p>
        </Link>

        <Link
          href="/admin/customers"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center"
        >
          <Users size={32} className="text-purple-500" />
          <p className="mt-2 font-medium">Manage Customers</p>
        </Link>

        <Link
          href="/admin/categories"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center"
        >
          <Tag size={32} className="text-red-500" />
          <p className="mt-2 font-medium">Manage Categories</p>
        </Link>
      </div>


      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order._id}
              className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="font-medium">Order {order.orderNumber}</p>
                <p className="text-sm text-gray-500">
                  {order.customer.firstName + " " + order.customer.lastName} -{" "}
                  {new Date(order._createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-medium">${order.total}</p>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${order.status === "completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                    }`}
                >
                  {order.status}
                </span>
                <Link
                  href={`/admin/orders/${order._id}`}
                  className="text-myHeading hover:underline flex items-center gap-2"
                >
                  <Eye size={16} /> View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
