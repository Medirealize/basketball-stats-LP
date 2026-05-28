import { HeroSection } from "@/components/hero-section"
import { DeveloperBanner } from "@/components/developer-banner"
import { FeatureCards } from "@/components/feature-cards"
import { CollaborativeSection } from "@/components/collaborative-section"
import { HowItWorks } from "@/components/how-it-works"
import { ComparisonSection } from "@/components/comparison-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { StatsPreview } from "@/components/stats-preview"
import { PremiumSection } from "@/components/premium-section"
import { DevelopmentStorySection } from "@/components/development-story-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <HeroSection />
      <DeveloperBanner />
      <FeatureCards />
      <CollaborativeSection />
      <HowItWorks />
      <ComparisonSection />
      <TargetAudienceSection />
      <StatsPreview />
      <PremiumSection />
      <DevelopmentStorySection />
      <FaqSection />
      <Footer />
    </main>
  )
}
