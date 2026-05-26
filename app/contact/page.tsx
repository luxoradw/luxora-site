import {
  FaInstagram,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Luxury Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-[-250px] right-[-200px] h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      {/* Gold Grid Effect */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,215,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">

        <div className="w-full max-w-5xl text-center">

          {/* Logo */}
          <div className="mb-14 flex justify-center">
            <img
              src="/logo.png"
              alt="Luxora Logo"
              className="w-60 opacity-95 drop-shadow-[0_0_35px_rgba(255,215,0,0.25)] transition duration-500 hover:scale-105"
            />
          </div>

          {/* Title */}
          <h1 className="mb-6 text-6xl font-extralight tracking-[0.3em] text-yellow-400">
            CONTACT
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-20 max-w-2xl text-lg leading-8 text-neutral-400">
            Luxury architectural doors and windows crafted for timeless modern living.
          </p>

          {/* Glass Card */}
          <div className="rounded-[40px] border border-yellow-400/20 bg-white/5 p-16 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,215,0,0.08)]">

            {/* Icons */}
            <div className="flex items-center justify-center gap-14 text-5xl">

              {/* Instagram */}
              <a
                href="https://instagram.com/luxoradw"
                target="_blank"
                className="text-neutral-500 transition-all duration-300 hover:scale-110 hover:text-yellow-400"
              >
                <FaInstagram />
              </a>

              {/* Website */}
              <a
                href="https://luxoradw.com"
                target="_blank"
                className="text-neutral-500 transition-all duration-300 hover:scale-110 hover:text-yellow-400"
              >
                <FaGlobe />
              </a>

              {/* Email */}
              <a
                href="mailto:info@luxoradw.com"
                className="text-neutral-500 transition-all duration-300 hover:scale-110 hover:text-yellow-400"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}