import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import aiimage from "./image/ai.jpg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0">
        <Image
        src={aiimage}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1]"
        />
      </div>
      <Navbar/> 
   <div class="container mt-24 mx-auto px-5 py-4">
   <div className="absolute inset-0 bg-[#1C1678] opacity-45 z-[-1]"></div>
   <HeroSection/>
   </div>
          <div>
             <Footer/>

          <div>
    </main>
  );
}
