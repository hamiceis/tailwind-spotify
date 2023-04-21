import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
