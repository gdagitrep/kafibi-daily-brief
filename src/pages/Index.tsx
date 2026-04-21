import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DashboardPreview from "@/components/DashboardPreview";
import WhyRetailers from "@/components/WhyRetailers";
import WhoItsFor from "@/components/WhoItsFor";
import EarlyAccess from "@/components/EarlyAccess";
import PageShell from "@/components/PageShell";

const Index = () => {
  return (
    <PageShell>
      <Hero />
      <DashboardPreview />
      <HowItWorks />
      <WhyRetailers />
      <WhoItsFor />
      <EarlyAccess />
    </PageShell>
  );
};

export default Index;
