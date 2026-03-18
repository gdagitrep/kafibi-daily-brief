import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DailyBrief from "@/components/DailyBrief";
import HowItWorks from "@/components/HowItWorks";
import WhyRetailers from "@/components/WhyRetailers";
import WhoItsFor from "@/components/WhoItsFor";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <DailyBrief />
      <HowItWorks />
      <WhyRetailers />
      <WhoItsFor />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
