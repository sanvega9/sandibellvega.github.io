import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import aiimage from "./image/ai.jpg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">

      {/* Background Image */}
      <div className="fixed inset-0 -z-20">
        <Image
          src={aiimage}
          fill
          priority
          alt="AI Background"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-[#1C1678] opacity-45 -z-10" />

      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-5 py-4 mt-24 flex-grow">
        <HeroSection />
      </div>
      <Footer/>
    </main>
  );
}

