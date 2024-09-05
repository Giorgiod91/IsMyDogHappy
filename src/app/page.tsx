import Link from "next/link";
import LandingPage from "./components/LandingPage";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFF5E4]">
      <section className="h-screen">
        <LandingPage />
      </section>
    </main>
  );
}
