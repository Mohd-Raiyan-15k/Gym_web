import Hero from "./Hero";
import WorkoutSessions from "./WorkoutSessions";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import { Contact } from "lucide-react";
import About from "./About";

function LandingPage() {
  return (
    <div>
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <About />
    </div>
  );
}

export default LandingPage;
