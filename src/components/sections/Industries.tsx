"use client";

import { motion } from "framer-motion";
import {
    Factory,
    Zap,
    Train,
    Shield,
    Leaf,
    Mountain,
    Building2,
    Cpu,
} from "lucide-react";

const industries = [
    {
        icon: Factory,
        title: "Manufacturing",
        description:
            "Industry 4.0, automation, predictive maintenance and smart production.",
    },
    {
        icon: Zap,
        title: "Smart Energy",
        description:
            "Energy monitoring, analytics, optimization and intelligent metering.",
    },
    {
        icon: Mountain,
        title: "Mining",
        description:
            "Asset monitoring, worker safety and industrial intelligence systems.",
    },
    {
        icon: Train,
        title: "Railways",
        description:
            "Track monitoring, collision prevention and intelligent transportation.",
    },
    {
        icon: Leaf,
        title: "Environment",
        description:
            "Air quality monitoring and environmental intelligence platforms.",
    },
    {
        icon: Shield,
        title: "Defence",
        description:
            "Mission-critical embedded systems and intelligent surveillance.",
    },
    {
        icon: Building2,
        title: "Smart Cities",
        description:
            "Connected infrastructure, monitoring and urban intelligence.",
    },
    {
        icon: Cpu,
        title: "Semiconductor",
        description:
            "Future VLSI, FPGA and indigenous silicon innovation.",
    },
];

export default function Industries() {
    return (
        <section className="py-32 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <span className="text-amber-500 uppercase tracking-widest font-semibold">
                        Industries
                    </span>

                    <h2 className="mt-6 text-5xl font-bold">
                        Industries We Empower
                    </h2>

                    <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto">
                        Building intelligent technologies that solve real-world
                        industrial and infrastructure challenges.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {industries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.05,
                                }}
                                viewport={{ once: true }}
                                className="premium-card bg-white border rounded-3xl p-8"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                                    <Icon className="text-amber-600" />
                                </div>

                                <h3 className="text-xl font-bold">
                                    {industry.title}
                                </h3>

                                <p className="mt-4 text-slate-600">
                                    {industry.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}