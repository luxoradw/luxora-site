"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type DoorType =
  | "sliding"
  | "folding"
  | "pocket"
  | "swing"

interface Props {
  type?: DoorType
}

export default function DoorMotionPlatform({
  type = "folding",
}: Props) {
  const [panels, setPanels] = useState(4)

  const panelCount =
    panels === 2 ? 2 : panels === 6 ? 6 : 4

  const panelWidth = 70
  const panelHeight = 160

  return (
    <div className="w-full bg-black text-white rounded-3xl p-8 border border-yellow-700">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h2 className="text-3xl font-light tracking-[0.25em] uppercase text-yellow-500">
          Door Motion Platform
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => setPanels(2)}
            className={`px-5 py-2 rounded-full border transition-all ${
              panels === 2
                ? "bg-yellow-600 text-black border-yellow-400"
                : "border-yellow-700 hover:border-yellow-400"
            }`}
          >
            2 Panels
          </button>

          <button
            onClick={() => setPanels(4)}
            className={`px-5 py-2 rounded-full border transition-all ${
              panels === 4
                ? "bg-yellow-600 text-black border-yellow-400"
                : "border-yellow-700 hover:border-yellow-400"
            }`}
          >
            4 Panels
          </button>

          <button
            onClick={() => setPanels(6)}
            className={`px-5 py-2 rounded-full border transition-all ${
              panels === 6
                ? "bg-yellow-600 text-black border-yellow-400"
                : "border-yellow-700 hover:border-yellow-400"
            }`}
          >
            6 Panels
          </button>
        </div>
      </div>

      {/* TOP VIEW */}
      <div className="mb-16">
        <h3 className="text-yellow-500 mb-4 tracking-[0.2em] uppercase text-sm">
          Top View
        </h3>

        <div className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-8 overflow-hidden">

          {/* FRAME */}
          <div
            className="relative mx-auto border-2 border-yellow-700"
            style={{
              width: panelCount * panelWidth,
              height: 18,
            }}
          >
            <div className="absolute inset-0 flex">

              {[...Array(panelCount)].map((_, i) => {
                const isFolding = type === "folding"

                return (
                  <motion.div
                    key={i}
                    className="border-r border-black bg-yellow-500"
                    style={{
                      width: panelWidth,
                      height: "100%",
                      originX: i === 0 ? 0 : 1,
                    }}
                    animate={
                      isFolding
                        ? {
                            rotate: i === 0 ? -65 : -75,
                            x: i * -18,
                          }
                        : {
                            x: i % 2 === 0 ? -50 : 50,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* SIDE VIEW */}
      <div>
        <h3 className="text-yellow-500 mb-4 tracking-[0.2em] uppercase text-sm">
          Side Elevation
        </h3>

        <div className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-10 overflow-hidden">

          {/* FRAME */}
          <div
            className="relative mx-auto flex items-end border-2 border-yellow-700"
            style={{
              width: panelCount * panelWidth,
              height: panelHeight + 10,
            }}
          >

            {[...Array(panelCount)].map((_, i) => {

              const foldOffset =
                i * -22

              const rotateValue =
                i % 2 === 0 ? -10 : 10

              return (
                <motion.div
                  key={i}
                  className="absolute bottom-0 bg-yellow-500 border border-black shadow-2xl"
                  style={{
                    width: panelWidth - 6,
                    height: panelHeight,
                    left: i * panelWidth,
                    transformOrigin:
                      i === 0
                        ? "left center"
                        : "right center",
                  }}
                  animate={
                    type === "folding"
                      ? {
                          rotateY: rotateValue,
                          x: foldOffset,
                        }
                      : type === "sliding"
                      ? {
                          x:
                            i % 2 === 0
                              ? -60
                              : 60,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {/* GLASS */}
                  <div className="absolute inset-[8px] border border-black/40 bg-black/20 backdrop-blur-sm" />

                  {/* HANDLE */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[3px] h-10 bg-black rounded-full" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}