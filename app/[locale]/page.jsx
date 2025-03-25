
import Hero from "../components/Hero";
import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Roadmap from "../components/Roadmap";
import ButtonGradient from "../components/svg/ButtonGradient";

export default function HomePage() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Collaboration />
        <Services />
        <Roadmap />
      </div>

      <ButtonGradient />
    </>
  );
}
