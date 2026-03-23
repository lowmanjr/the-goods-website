import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DetoxSales from "@/components/DetoxSales";
import ShopMyKitchen from "@/components/ShopMyKitchen";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <DetoxSales />
        <ShopMyKitchen />
      </main>
      <Footer />
    </>
  );
}
