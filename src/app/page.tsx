import Hero from "@/components/Hero";
import PortfolioPreview from "@/components/PortfolioPreview";
import Process from "@/components/Process";
import Services from '@/components/Services'
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <> 
      <Hero />  
      <Services />
      <WhyChooseUs /> 
      <PortfolioPreview /> 
      <Testimonials /> 
      <Process /> 
       
    </>
  );
}
