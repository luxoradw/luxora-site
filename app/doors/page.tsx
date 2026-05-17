import Navbar from "@/app/components/Navbar";
<>
  <Navbar />
  <main className="min-h-screen bg-black px-8 py-32 text-white">
    ...
  </main>
</>
export default function DoorsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-28 text-white">
      <h1 className="mb-6 font-serif text-5xl text-yellow-400">
        Aluminum Door
      </h1>
      <p className="text-neutral-300">
        Folding Door, Sliding Door, Pivot Door, Casement Door, and Barn Door.
      </p>
    </main>
  );
}