"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const panelOptions = [2, 4, 6, 8];

const functions = [
  { id: "standard", label: "Standard Fold" },
  { id: "foldUp50", label: "Fold Up 50" },
];

export default function FoldingDoorPage() {
  const [panelCount, setPanelCount] = useState(4);
  const [selectedFunction, setSelectedFunction] = useState("standard");
  const [motionState, setMotionState] = useState<"open" | "closed">("closed");

  const toggleMotion = () => {
    setMotionState((prev) => (prev === "closed" ? "open" : "closed"));
  };

  const panelWidth = 100 / panelCount;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-light tracking-[0.2em] uppercase mb-4">
            Folding Doors
          </h1>

          <p className="text-white/60 max-w-2xl leading-relaxed">
            Luxury thermally broken folding door systems engineered for
            seamless indoor-outdoor transitions with ultra-slim aluminum
            profiles.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-8 mb-14">

          {/* Panel Count */}
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
              Panel Count
            </div>

            <div className="flex gap-3">
              {panelOptions.map((count) => (
                <button
                  key={count}
                  onClick={() => setPanelCount(count)}
                  className={`px-5 py-2 border text-sm tracking-widest transition-all duration-300 ${
                    panelCount === count
                      ? "border-yellow-500 text-yellow-400"
                      : "border-white/20 text-white/60 hover:border-white/50"
                  }`}
                >
                  {count} Panel
                </button>
              ))}
            </div>
          </div>

          {/* Function */}
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
              Function
            </div>

            <div className="flex gap-3">
              {functions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedFunction(item.id)}
                  className={`px-5 py-2 border text-sm tracking-widest transition-all duration-300 ${
                    selectedFunction === item.id
                      ? "border-yellow-500 text-yellow-400"
                      : "border-white/20 text-white/60 hover:border-white/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Open / Close */}
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
              Motion
            </div>

            <button
              onClick={toggleMotion}
              className="px-6 py-2 border border-yellow-500 text-yellow-400 tracking-[0.2em] uppercase hover:bg-yellow-500/10 transition-all duration-300"
            >
              {motionState === "closed" ? "Open" : "Close"}
            </button>
          </div>
        </div>

        {/* Graphic */}
        <div className="relative w-full h-[520px] flex items-center justify-center overflow-hidden">

          {/* Frame */}
          <div className="relative w-[92%] h-[420px] border border-yellow-500/40 bg-white/[0.02] overflow-hidden">

            {/* Panels */}
            <div className="absolute inset-0 flex">

              {Array.from({ length: panelCount }).map((_, index) => {
                const direction = index % 2 === 0 ? -1 : 1;

                let transform = "translateX(0px) rotateY(0deg)";

                // STANDARD
                if (selectedFunction === "standard") {
                  transform =
                    motionState === "closed"
                      ? "translateX(0px) rotateY(0deg)"
                      : `translateX(${direction * index * 18}px)
                         rotateY(${direction * 70}deg)`;
                }

                // FOLD UP 50
                if (selectedFunction === "foldUp50") {
                  transform =
                    motionState === "closed"
                      ? "translateX(0px) rotateY(0deg)"
                      : `translateX(${direction * index * 22}px)
                         rotateY(${direction * 78}deg)`;
                }

                return (
                  <motion.div
                    key={index}
                    animate={{
                      transform,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    style={{
                      width: `${panelWidth}%`,
                      transformOrigin:
                        direction === -1 ? "left center" : "right center",
                    }}
                    className="relative h-full border-r border-black/40 bg-gradient-to-b from-[#1f1f1f] to-[#111]"
                  >

                    {/* Glass */}
                    <div className="absolute inset-[10px] border border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">

                      {/* Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                      {/* Vertical reflection */}
                      <div className="absolute top-0 left-[18%] w-[1px] h-full bg-white/10" />

                      <div className="absolute top-0 right-[18%] w-[1px] h-full bg-white/5" />
                    </div>

                    {/* Handle */}
                    <div className="absolute top-1/2 right-3 -translate-y-1/2 w-[3px] h-16 bg-yellow-500/70 rounded-full" />
                  </motion.div>
                );
              })}
            </div>

            {/* Top Track */}
            <div className="absolute top-0 left-0 w-full h-[8px] bg-yellow-500/20" />

            {/* Bottom Track */}
            <div className="absolute bottom-0 left-0 w-full h-[8px] bg-yellow-500/10" />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">

          <div className="border border-white/10 p-8 bg-white/[0.02]">
            <div className="text-yellow-400 text-sm tracking-[0.2em] uppercase mb-3">
              Thermal Break
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Advanced insulated aluminum profile system for superior energy
              efficiency and structural performance.
            </p>
          </div>

          <div className="border border-white/10 p-8 bg-white/[0.02]">
            <div className="text-yellow-400 text-sm tracking-[0.2em] uppercase mb-3">
              Minimal Sightline
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Ultra-slim modern frame design engineered for luxury residential
              and commercial applications.
            </p>
          </div>

          <div className="border border-white/10 p-8 bg-white/[0.02]">
            <div className="text-yellow-400 text-sm tracking-[0.2em] uppercase mb-3">
              Premium Hardware
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Heavy-duty concealed rolling hardware with smooth silent movement
              and long-term durability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}