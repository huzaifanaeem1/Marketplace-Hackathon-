import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full fixed top-0 left-0 z-10">
        <Header />
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
}