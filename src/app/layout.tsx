import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductsProvider } from "@/context/productsContext";
import { CategoryProvider } from "@/context/categoryContext";
import { CartItemProvier } from "@/context/cartContext";
import { WishlistProvider } from "@/context/wishlistContext";
import { FormProvider } from "@/context/formDataContext";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/toast/ToastNotification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoeway",
  description: "E-commerce Marketplace",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"}>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>
          <FormProvider>
            <ToastProvider>
              <CartItemProvier>
                <CategoryProvider>
                  <ProductsProvider>
                    <WishlistProvider>
                      {/* <SignedOut>
                        <SignInButton />
                      </SignedOut> */}
                      {/* <SignedIn>
                        <UserButton />
                      </SignedIn> */}
                      {children}
                    </WishlistProvider>
                  </ProductsProvider>
                </CategoryProvider>
              </CartItemProvier>
            </ToastProvider>
          </FormProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}