import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Projects from "@/components/Projects";
import WhyUsSection from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Features />
      <Projects />
      <WhyUsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
