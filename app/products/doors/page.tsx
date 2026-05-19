"use client";

const performance = [
  ["STRUCTURAL STRENGTH", "96%"],
  ["WATER TIGHTNESS", "90%"],
  ["AIR PERMEABILITY", "90%"],
  ["WIND RESISTANCE", "95%"],
  ["SMOOTH OPERATION", "92%"],
];

export default function DoorsPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <section className="relative overflow-hidden px-12 pb-12 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_35%,rgba(234,179,8,.10),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-[1700px] grid-cols-1 gap-14 xl:grid-cols-[680px_1fr]">
          <div>
            <div className="mb-14 flex items-center gap-6">
              <p className="text-lg font-semibold uppercase tracking-[0.22em] text-yellow-500">
                Door Systems
              </p>
              <div className="h-px flex-1 bg-yellow-500/40" />
            </div>

            <h1 className="font-serif text-[68px] uppercase leading-[1.02] tracking-[0.02em]">
              Built For
              <br />
              <span className="text-yellow-500">Luxury Movement</span>
            </h1>

            <p className="mt-9 max-w-[570px] text-[22px] leading-[1.55] text-white/72">
              Premium aluminum door systems engineered for large openings,
              smooth operation, structural strength, weather resistance, and
              luxury architectural performance.
            </p>

            <div className="mt-12 grid max-w-[650px] grid-cols-4 gap-4">
              {["SMOOTH OPERATION", "STRUCTURAL STRENGTH", "THERMAL CONTROL", "WATER & AIR TIGHTNESS"].map((item) => (
                <div key={item} className="border-r border-yellow-500/15 last:border-r-0">
                  <div className="mb-2 text-3xl text-yellow-500">✺</div>
                  <p className="text-[13px] font-semibold uppercase leading-6 tracking-[0.08em] text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 max-w-[610px] rounded-xl border border-yellow-500/30 bg-black/45 p-6">
              <h2 className="mb-7 text-xl font-semibold uppercase tracking-[0.08em] text-yellow-500">
                Heavy Duty Track System
              </h2>

              <div className="grid grid-cols-[320px_1fr] gap-8">
                <div>
                  <div className="relative h-[115px]">
                    <div className="absolute left-0 right-0 top-8 h-16 rounded-full border-[6px] border-zinc-700">
                      <div className="absolute left-20 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full border-[8px] border-yellow-500" />
                      <div className="absolute right-20 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full border-[8px] border-yellow-500" />
                    </div>
                  </div>

                  <div className="mt-6 h-3 rounded-full bg-gradient-to-r from-zinc-500 via-yellow-500 to-yellow-300" />
                  <div className="mt-3 flex justify-between text-xs font-bold uppercase text-white">
                    <span>Stable Track</span>
                    <span className="text-yellow-500">Smooth Motion</span>
                  </div>
                </div>

                <p className="text-[18px] leading-8 text-white/75">
                  Reinforced roller and track systems support smooth movement,
                  stable panel alignment, and reliable long-term operation for
                  large luxury door openings.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[730px]">
            <div className="absolute left-[4%] top-0 h-[680px] w-[560px] bg-gradient-to-br from-zinc-900 to-black shadow-[0_0_100px_rgba(0,0,0,.9)]">
              <div className="absolute inset-10 border-[22px] border-zinc-800">
                <div className="absolute left-0 top-0 h-full w-1/2 border-r border-zinc-500/60 bg-gradient-to-br from-white/12 to-transparent">
                  <div className="absolute right-8 top-1/2 h-32 w-5 -translate-y-1/2 rounded-sm bg-yellow-500 shadow-[0_0_35px_rgba(234,179,8,.65)]" />
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-white/10 to-transparent">
                  <div className="absolute left-8 top-1/2 h-32 w-5 -translate-y-1/2 rounded-sm bg-yellow-500 shadow-[0_0_35px_rgba(234,179,8,.65)]" />
                </div>
                <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-400/60" />
              </div>
            </div>

            <div className="absolute bottom-5 left-[42%] h-[235px] w-[255px] border-[8px] border-zinc-300 bg-black">
              <div className="absolute inset-5 border-[10px] border-zinc-800">
                <div className="absolute left-1/2 top-[-10px] h-[calc(100%+20px)] w-12 -translate-x-1/2 bg-yellow-500" />
                <div className="absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 bg-zinc-300/80" />
              </div>
            </div>

            {[
              ["INSULATED GLASS PANELS", "Double or triple glass for comfort and performance.", "top-24"],
              ["THERMAL BREAK PROFILE", "Reduced heat transfer through aluminum frame.", "top-[295px]"],
              ["EUROPEAN HARDWARE", "Premium handles, hinges, locks, and rollers.", "top-[470px]"],
              ["HEAVY DUTY TRACK", "Smooth operation for large luxury openings.", "bottom-16"],
            ].map(([title, text, pos]) => (
              <div key={title} className={`absolute right-0 ${pos} w-[260px]`}>
                <div className="mb-3 h-px w-full bg-yellow-500/50" />
                <h3 className="text-lg font-bold uppercase leading-6 tracking-[0.06em] text-yellow-500">
                  {title}
                </h3>
                <p className="mt-3 text-[17px] leading-7 text-white/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-yellow-500/20 px-12 py-8">
        <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-12 xl:grid-cols-[700px_1fr]">
          <div>
            <div className="mb-8 flex items-center gap-5">
              <h2 className="text-xl uppercase tracking-[0.14em] text-yellow-500">
                Performance At A Glance
              </h2>
              <div className="h-px flex-1 bg-yellow-500/30" />
            </div>

            {performance.map(([name, value]) => (
              <div key={name} className="mb-6 grid grid-cols-[220px_1fr_60px] items-center gap-5">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-yellow-500">{name}</p>
                <div className="h-2 bg-white/10">
                  <div className="h-full bg-gradient-to-r from-yellow-700 to-yellow-300" style={{ width: value }} />
                </div>
                <p className="text-base text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-yellow-500/35 bg-black/35 p-8">
            <h2 className="mb-8 text-2xl uppercase tracking-[0.08em] text-yellow-500">
              Why Choose Our Door Systems?
            </h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-5">
              {[
                "Heavy Duty Aluminum Profiles",
                "Smooth Sliding & Folding Movement",
                "Premium European Hardware",
                "Large Opening Capability",
                "Thermal Break Performance",
                "Weather Resistant Engineering",
                "Luxury Custom Finish Options",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-yellow-500 text-yellow-500">
                    ✓
                  </span>
                  <p className="text-[17px] text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}