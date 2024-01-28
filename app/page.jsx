import Herosection from "@components/Herosection";
import Navbar from "@components/Navbar";
import About from "@components/About";
import ProjectSection from "@components/ProjectSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <Herosection />
        <About />
        <ProjectSection />
      </div>
    </main>
  );
}
