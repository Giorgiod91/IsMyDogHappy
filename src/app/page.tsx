import Link from "next/link";
import LandingPage from "./components/LandingPage";
import { Dog } from "lucide-react";
import DogRace from "./components/DogRace";
import StateContainer from "./components/StateContainer";

export default function HomePage() {
  //bg-gray-900 bg-[#18181b]
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <section className="h-screen">
        <LandingPage />
      </section>
      <section>
        <StateContainer susge="susge" susge2="susge2" />
      </section>
    </main>
  );
}
