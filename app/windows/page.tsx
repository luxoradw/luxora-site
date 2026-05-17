import Navbar from "@/app/components/Navbar";
<>
  <Navbar />
  <main className="min-h-screen bg-black px-8 py-32 text-white">
    ...
  </main>
</>
const windows = [
  { name: "Sliding Window", href: "/windows/sliding" },
  { name: "Casement Window", href: "/windows/casement" },
  { name: "Awning Window", href: "/windows/awning" },
  { name: "Tilt & Turn Window", href: "/windows/tilt-turn" },
  { name: "Double Hung Window", href: "/windows/double-hung" },
  { name: "Skylight Window", href: "/windows/skylight" },
];

export default function WindowsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-28 text-white">

      <h1 className="mb-6 font-serif text-5xl text-yellow-400">
        Aluminum Windows
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {windows.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="border border-yellow-400/20 p-6 rounded-xl hover:border-yellow-400 transition"
          >
            <h2 className="text-xl text-yellow-400 font-serif">
              {item.name}
            </h2>
          </a>
        ))}
      </div>

    </main>
  );
}