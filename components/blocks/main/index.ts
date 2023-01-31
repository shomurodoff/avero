import dynamic from "next/dynamic";
const HeroSection = dynamic(import("./hero-section"), { ssr: false });
import ServicesSection from "./services-section";
import NewsSection from "./news-section";
export { HeroSection, ServicesSection, NewsSection };
