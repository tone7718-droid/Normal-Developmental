import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import TummyTime from "@/components/TummyTime";
import FacilitationPrinciples from "@/components/FacilitationPrinciples";
import AgeCalculator from "@/components/AgeCalculator";
import StageExplorer from "@/components/StageExplorer";
import ReflexSection from "@/components/ReflexSection";
import Checkups from "@/components/Checkups";
import WarningSummary from "@/components/WarningSummary";
import MythBusting from "@/components/MythBusting";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Overview />
      <TummyTime />
      <FacilitationPrinciples />
      <AgeCalculator />
      <StageExplorer />
      <ReflexSection />
      <Checkups />
      <WarningSummary />
      <MythBusting />
      <Faq />
      <Footer />
    </main>
  );
}
