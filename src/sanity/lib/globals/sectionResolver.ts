import HeroSection from "@/components/sections/HeroSection";
import BrandsMarquee from "@/components/sections/BrandsMarquee";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sections: { [key: string]: React.ComponentType<any> } = {
  heroSection: HeroSection,
  brandsMarquee: BrandsMarquee,
};

export default sections;