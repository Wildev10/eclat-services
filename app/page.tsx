import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Founders from "@/components/Founders";
import Recruitment from "@/components/Recruitment";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Founders />
      <Recruitment />
    </>
  );
}
