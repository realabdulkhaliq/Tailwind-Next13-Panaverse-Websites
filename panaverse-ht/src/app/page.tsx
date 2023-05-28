import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import ProgramOutcome from "@/components/widgets/ProgramOutcome";
import SpecielizedTrack from "@/components/widgets/SpecielizedTrack";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreTracks />
      <SpecielizedTrack />
      <ProgramOutcome />
    </>
  );
}
