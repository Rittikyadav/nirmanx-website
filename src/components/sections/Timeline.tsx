"use client";

import { motion } from "framer-motion";

const phases = [
    {
        title: "Research",
        description:
            "Academic research, innovation, problem identification and technology exploration.",
    },
    {
        title: "Innovation",
        description:
            "Converting research outcomes into practical engineering concepts.",
    },
    {
        title: "Prototype",
        description:
            "Rapid prototyping of hardware, software and intelligent systems.",
    },
    {
        title: "Validation",
        description:
            "Testing, optimization and industry-grade verification.",
    },
    {
        title: "Industry",
        description:
            "Pilot deployment and collaboration with industrial partners.",
    },
    {
        title: "Product",
        description:
            "Commercial products built for India and global markets.",
    },
];

export default function Timeline() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <span className="text-amber-500 font-semibold uppercase tracking-widest">
                        Innovation Pipeline
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Research → Industry → Product
                    </h2>

                    <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
                        NIRMAN X bridges the gap between academic research and
                        industrial deployment through a structured deep-tech
                        development pipeline.
                    </p>
                </div>

                <div className="grid lg:grid-cols-6 gap-6">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="relative border rounded-3xl p-6 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg mb-4">
                                {index + 1}
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                {phase.title}
                            </h3>

                            <p className="text-slate-600 text-sm">
                                {phase.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}