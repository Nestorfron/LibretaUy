import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      <PageContainer>
        <Hero />

        <Features />

        <CTA />
      </PageContainer>
    </div>
  );
}