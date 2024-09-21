import Link from "next/link";
import LandingPage from "./components/LandingPage";
import { Dog } from "lucide-react";
import DogRace from "./components/DogRace";
import StateContainer from "./components/StateContainer";
import PartTwo from "./components/PartTwo";
import About from "./components/About";

export default function HomePage() {
  //bg-gray-900 bg-[#18181b]
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <section className="h-screen">
        <LandingPage />
      </section>
      <section className="h-[500px] bg-[#F5F5F5]">
        <PartTwo />
      </section>
      <section>
        <StateContainer susge="susge" susge2="susge2" />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
}
