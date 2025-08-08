import Image from "next/image";
import Hero from "./components/Hero";
import UploadSection from "./components/UploadSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <div>
      <Hero/>
      <UploadSection/>
      <FeaturesSection/>
    </div>
  );
}
