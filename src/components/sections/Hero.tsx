"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Cpu,
    Cloud,
    Microchip,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

            {/* Background Effects */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200 rounded-full blur-[120px] opacity-20" />

            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-20" />

            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200 rounded-full blur-[120px] opacity-10" />

            <div className="absolute inset-0 hero-grid" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}

                    <div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white text-sm font-medium shadow-sm">
                                🇮🇳 Made in India • Built for the World
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mt-8 text-6xl md:text-8xl font-black tracking-tight"
                        >
                            NIRMAN{" "}
                            <span className="gold-text">
                                X
                            </span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-3xl md:text-4xl font-bold text-slate-800"
                        >
                            Engineering India's Future.
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-2 text-3xl md:text-4xl font-bold text-slate-700"
                        >
                            Building the World.
                        </motion.h3>

                    </div>

                    {/* RIGHT SIDE */}

                    <div>

                        <div
                            className="
      bg-white
      rounded-[36px]
      border border-slate-200
      p-10
      shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      backdrop-blur-sm
    "
                        >

                            <div className="w-12 h-1 rounded-full bg-amber-500 mb-6" />

                            <p className="text-sm font-semibold tracking-widest uppercase text-amber-600">
                                NIRMAN X CAPABILITIES
                            </p>

                            <h3 className="mt-3 text-3xl font-bold text-slate-900">
                                Building Intelligent
                                <br />
                                Products & Platforms
                            </h3>

                            <p className="mt-4 text-slate-600">
                                End-to-end engineering expertise spanning AI,
                                Embedded Systems, Industrial IoT, Cloud Platforms,
                                Electronics Engineering and Future Semiconductor Technologies.
                            </p>

                            <div className="grid grid-cols-2 gap-5 mt-10">

                                <div
                                    className="
          group
          rounded-3xl
          border border-slate-200
          bg-gradient-to-b
          from-white
          to-slate-50
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
                                >
                                    <Brain className="text-blue-600 mb-4" size={28} />

                                    <h4 className="font-semibold text-slate-900">
                                        Artificial Intelligence
                                    </h4>

                                    <p className="mt-2 text-sm text-slate-600">
                                        Computer Vision
                                        <br />
                                        Predictive Analytics
                                    </p>
                                </div>

                                <div
                                    className="
          group
          rounded-3xl
          border border-slate-200
          bg-gradient-to-b
          from-white
          to-slate-50
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
                                >
                                    <Cpu className="text-green-600 mb-4" size={28} />

                                    <h4 className="font-semibold text-slate-900">
                                        Embedded Systems
                                    </h4>

                                    <p className="mt-2 text-sm text-slate-600">
                                        Firmware
                                        <br />
                                        RTOS & Edge Devices
                                    </p>
                                </div>

                                <div
                                    className="
          group
          rounded-3xl
          border border-slate-200
          bg-gradient-to-b
          from-white
          to-slate-50
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
                                >
                                    <Cloud className="text-purple-600 mb-4" size={28} />

                                    <h4 className="font-semibold text-slate-900">
                                        Industrial IoT
                                    </h4>

                                    <p className="mt-2 text-sm text-slate-600">
                                        Cloud Integration
                                        <br />
                                        Monitoring & Analytics
                                    </p>
                                </div>

                                <div
                                    className="
          group
          rounded-3xl
          border border-slate-200
          bg-gradient-to-b
          from-white
          to-slate-50
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
                                >
                                    <Microchip className="text-amber-600 mb-4" size={28} />

                                    <h4 className="font-semibold text-slate-900">
                                        Electronics & VLSI
                                    </h4>

                                    <p className="mt-2 text-sm text-slate-600">
                                        Hardware Design
                                        <br />
                                        FPGA & Semiconductor
                                    </p>
                                </div>

                            </div>

                            <div className="mt-10 border-t border-slate-200 pt-8">

                                <h3 className="text-2xl font-bold text-slate-900">
                                    From Research to Reality
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    Transforming innovative ideas into
                                    industry-ready intelligent products.
                                </p>

                                <div className="mt-6 flex items-center justify-center gap-3 text-sm font-medium text-slate-700 flex-wrap">

                                    <span>Research</span>

                                    <span className="text-amber-500">→</span>

                                    <span>Engineering</span>

                                    <span className="text-amber-500">→</span>

                                    <span>Product</span>

                                    <span className="text-amber-500">→</span>

                                    <span>Deployment</span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}