import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import LocationMarquee from "@/components/home/LocationMarquee";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import PricingTeaser from "@/components/home/PricingTeaser";
import TeamStrip from "@/components/home/TeamStrip";
import Testimonials from "@/components/home/Testimonials";
import InstagramCallout from "@/components/home/InstagramCallout";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <LocationMarquee />
      <FeaturedProjects />
      <PricingTeaser />
      <TeamStrip />
      <Testimonials />
      <InstagramCallout />
    </>
  );
}
