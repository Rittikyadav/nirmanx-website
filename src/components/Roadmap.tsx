"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Brain,
    Microchip,
    Factory,
    Boxes,
} from "lucide-react";

const roadmap = [
    {
        icon: Boxes,
        phase: "Phase 1",
        years: "2026 - 2028",
        title: "Industrial Solutions",
        description:
            "Develop and deploy industrial-grade products in Air Quality Monitoring, Smart Energy, Industrial IoT and Intelligent Automation.",
    },
    {
        icon: Cpu,
        phase: "Phase 2",
        years: "2028 - 2030",
        title: "Deep-Tech Products",
        description:
            "Build scalable hardware and software platforms combining Embedded Systems, Electronics Engineering and Cloud Infrastructure.",
    },
    {
        icon: Brain,
        phase: "Phase 3",
        years: "2030 - 2033",
        title: "AI Platforms",
        description:
            "Create advanced AI, Computer Vision and Edge Intelligence solutions for manufacturing, energy and smart infrastructure.",
    },
    {
        icon: Microchip,
        phase: "Phase 4",
        years: "2033 - 2036",
        title: "Semiconductor Technologies",
        description:
            "Expand into FPGA, VLSI and indigenous semiconductor innovation to support India's future technology ecosystem.",
    },
];

export default function Roadmap() {
    return (
        <section
            id="roadmap"
            className="py-32 bg-gradient-to-b from-slate-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="text-center mb-20">

                    <span className="text-amber-500 uppercase tracking-widest font-semibold">
                        Vision 2036
                    </span>

                    <h2 className="mt-6 text-5xl md:text-6xl font-black">
                        NIRMAN X Growth Roadmap
                    </h2>

                    <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto">
                        Our mission is to evolve from a deep-tech engineering startup
                        into a globally trusted technology company driving innovation
                        across AI, Embedded Systems, Industrial IoT, Electronics and
                        Semiconductor Technologies.
                    </p>

                </div>

                {/* Roadmap Cards */}

                <div className="grid lg:grid-cols-4 gap-8">

                    {roadmap.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.phase}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                transition={{
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-3xl border bg-white p-8 premium-card"
                            >

                                {/* Big Number */}

                                <div className="absolute -right-6 -top-6 text-[120px] font-black text-slate-100 select-none">
                                    {index + 1}
                                </div>

                                {/* Icon */}

                                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-lg">

                                    <Icon
                                        size={28}
                                        className="text-white"
                                    />

                                </div>

                                {/* Content */}

                                <div className="relative z-10">

                                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                                        {item.phase}
                                    </span>

                                    <p className="mt-3 text-sm font-medium text-slate-500">
                                        {item.years}
                                    </p>

                                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>

                                </div>

                                {/* Bottom Accent */}

                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500 group-hover:w-full" />

                            </motion.div>
                        );
                    })}

                </div>

                {/* Vision 2040 */}

                <div className="mt-24 relative overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-14 text-center text-white">

                    <Factory
                        className="mx-auto mb-8 text-amber-400"
                        size={56}
                    />

                    <h3 className="text-4xl md:text-5xl font-black">
                        Vision 2040
                    </h3>

                    <p className="mt-6 max-w-5xl mx-auto text-lg text-slate-300 leading-relaxed">
                        NIRMAN X aims to become a globally trusted Indian
                        deep-tech company spanning Artificial Intelligence,
                        Embedded Systems, Industrial IoT, Cloud Platforms,
                        Electronics Engineering and Semiconductor Innovation.

                        Our goal is to transform research into products,
                        products into platforms, and platforms into
                        world-class technology ecosystems.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                            Artificial Intelligence
                        </span>

                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                            Embedded Systems
                        </span>

                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                            Industrial IoT
                        </span>

                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                            Cloud Platforms
                        </span>

                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                            Electronics
                        </span>

                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                            Semiconductor
                        </span>

                    </div>

                    <div className="mt-10 text-amber-400 font-semibold tracking-wide text-lg">
                        🇮🇳 Made in India • Built for the World
                    </div>

                </div>

            </div>
        </section>
    );
}