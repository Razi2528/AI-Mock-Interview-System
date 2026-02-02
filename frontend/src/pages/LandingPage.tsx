import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { LogoBar } from '@/components/sections/LogoBar';
import { FeaturesOverview } from '@/components/sections/FeaturesOverview';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { KeyFeatures } from '@/components/sections/KeyFeatures';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <FeaturesOverview />
        <HowItWorks />
        <KeyFeatures />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
