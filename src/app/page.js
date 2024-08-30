import HomeContent from "@/components/content/HomeContent";
import Navigate from "@/components/navigate";

export default function Home() {
  return (
    <main className="w-full">
      <Navigate/>
      <HomeContent/>
    </main>
  );
}
