import Hero from "@/components/Hero";
import TrustedStrip from "@/components/TrustedStrip";
import HowItWorks from "@/components/HowItWorks";
import DashboardPreview from "@/components/DashboardPreview";
import WhyRetailers from "@/components/WhyRetailers";
import Industries from "@/components/Industries";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhoItsFor from "@/components/WhoItsFor";
import EarlyAccess from "@/components/EarlyAccess";
import PageShell from "@/components/PageShell";

const Index = () => {
  return (
    <PageShell>
      <Hero />
      <TrustedStrip />
      <DashboardPreview />
      <WhyRetailers />
      <Industries />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <WhoItsFor />
      <EarlyAccess />
    </PageShell>
  );
};

export default Index;
