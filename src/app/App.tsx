import { useEffect } from "react";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { CravingsSection } from "./components/cravings-section";
import { MeetNibblSection } from "./components/meet-nibbl";
import { FeaturesSection } from "./components/features-section";
import { BucketListSection } from "./components/bucket-list-section";
import { CollectionsSection } from "./components/collections-section";
import { ShareSection } from "./components/share-section";
import { SocialProofSection } from "./components/social-proof";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.background = "#0B0A09";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#0B0A09",
        color: "#F2EFE8",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <CravingsSection />
      <MeetNibblSection />
      <FeaturesSection />
      <BucketListSection />
      <CollectionsSection />
      <ShareSection />
      <SocialProofSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}