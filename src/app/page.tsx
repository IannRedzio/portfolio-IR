import Intro from "@/components/sections/Intro";

export default async function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-background">
      <Intro />
    </main>
  );
}
