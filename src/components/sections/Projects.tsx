"use client";

import { motion } from "framer-motion";
import {
    Leaf,
    Zap,
    Factory,
    Eye,
    Satellite,
    Cpu,
} from "lucide-react";

const projects = [
    {
        icon: Leaf,
        title: "AI Air Quality Monitoring Platform",
        client: "Industrial & Smart City Applications",
        description:
            "End-to-end AQM solution with real-time monitoring, cloud dashboard, analytics and predictive insights.",
        tech: ["ESP32", "IoT", "Cloud", "AI"],
    },

    {
        icon: Zap,
        title: "Smart Energy Meter Platform",
        client: "Industrial Energy Management",
        description:
            "Cloud-enabled smart energy monitoring platform with analytics, reporting and intelligent alerts.",
        tech: ["Modbus", "Energy Analytics", "Cloud"],
    },

    {
        icon: Factory,
        title: "Industrial Conveyor Monitoring",
        client: "Steel & Manufacturing",
        description:
            "Industrial monitoring system for process optimization, predictive maintenance and operational visibility.",
        tech: ["Industrial IoT", "AI", "Dashboard"],
    },

    {
        icon: Eye,
        title: "AI Vision Analytics",
        client: "Industry 4.0",
        description:
            "Computer vision solution for inspection, anomaly detection and process automation.",
        tech: ["OpenCV", "AI", "Computer Vision"],
    },

    {
        icon: Satellite,
        title: "GPS Tracking Platform",
        client: "Fleet & Asset Management",
        description:
            "Real-time GPS monitoring and telemetry platform for vehicles and industrial assets.",
        tech: ["GPS", "GSM", "Cloud"],
    },

    {
        icon: Cpu,
        title: "Embedded Product Development",
        client: "Custom Engineering",
        description:
            "Hardware, firmware and PCB design services for industrial and commercial products.",
        tech: ["STM32", "ESP32", "PCB Design"],
    },
];

export default function Projects() {
    return (
        <section className="py-32 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <span className="text-amber-500 uppercase tracking-widest font-semibold">
                        Proven Capability
                    </span>

                    <h2 className="mt-6 text-5xl font-black">
                        Projects & Solutions
                    </h2>

                    <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto">
                        Real engineering solutions developed across AI,
                        Industrial IoT, Embedded Systems, Cloud Platforms
                        and Industrial Automation.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => {
                        const Icon = project.icon;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -10,
                                }}
                                transition={{
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="premium-card rounded-3xl border bg-white p-8"
                            >

                                <Icon
                                    size={42}
                                    className="text-amber-500 mb-6"
                                />

                                <p className="text-sm text-amber-600 font-medium">
                                    {project.client}
                                </p>

                                <h3 className="mt-2 text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-slate-600">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">

                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-2 bg-slate-100 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}