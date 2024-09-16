import Link from "next/link";
import LandingPage from "./components/LandingPage";
import { Dog } from "lucide-react";
import DogRace from "./components/DogRace";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#18181b]">
      <section className="h-screen">
        <LandingPage />
      </section>
      <section></section>
    </main>
  );
}
