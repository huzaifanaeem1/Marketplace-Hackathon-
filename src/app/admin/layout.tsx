import { redirect } from "next/navigation";
import { checkAdmin } from "@/utils/roles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const isAdmin = await checkAdmin();

  if (!isAdmin) {
    redirect("/unauthorized"); // Redirect non-admins to home
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-myHeading text-white p-6 h-screen sticky top-0">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <nav className="space-y-2">
          <Link
            href="/admin"
            className="block py-2 hover:bg-gray-500 rounded px-4"
          > 
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="block py-2 hover:bg-gray-500 rounded px-4"
          >
            Products
          </Link>
          <Link
            href="/admin/orders"
            className="block py-2 hover:bg-gray-500 rounded px-4"
          >
            Orders
          </Link>
          <Link
            href="/admin/customers"
            className="block py-2 hover:bg-gray-500 rounded px-4"
          >
            Customers
          </Link>
          <Link
            href="/admin/categories"
            className="block py-2 hover:bg-gray-500 rounded px-4"
          >
            Categories
          </Link>
          <Link
            href="/admin/sales"
            className="block py-2 hover:bg-gray-500 rounded px-4"
          >
            Sales
          </Link>
          
<Link 
  href="/"
  className="py-2 hover:bg-gray-500 rounded px-4 flex items-center gap-2"
>
  <ArrowLeft size={20} /> Back to Home
</Link>

        </nav>
      </aside>


      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}