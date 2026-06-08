"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Cpu,
    Cloud,
    Microchip,
    Database,
    Wifi,
} from "lucide-react";

const stack = [
    {
        icon: Brain,
        title: "Artificial Intelligence",
        tech: [
            "TensorFlow",
            "PyTorch",
            "Computer Vision",
            "Edge AI",
            "TinyML",
        ],
    },
    {
        icon: Cpu,
        title: "Embedded Systems",
        tech: [
            "ESP32",
            "STM32",
            "ARM Cortex",
            "RTOS",
            "Firmware",
        ],
    },
    {
        icon: Wifi,
        title: "Industrial IoT",
        tech: [
            "MQTT",
            "LoRa",
            "NB-IoT",
            "LTE",
            "Modbus",
        ],
    },
    {
        icon: Cloud,
        title: "Cloud Platforms",
        tech: [
            "AWS",
            "Azure",
            "Docker",
            "CI/CD",
            "Monitoring",
        ],
    },
    {
        icon: Database,
        title: "Data Intelligence",
        tech: [
            "Analytics",
            "Telemetry",
            "Digital Twin",
            "Prediction",
            "Visualization",
        ],
    },
    {
        icon: Microchip,
        title: "Electronics & VLSI",
        tech: [
            "PCB Design",
            "FPGA",
            "RTL",
            "ASIC",
            "Semiconductor",
        ],
    },
];

export default function TechnologyStack() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <span className="text-amber-500 uppercase tracking-widest">
                        Technology Stack
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Full Stack Engineering Capability
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {stack.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                whileHover={{ y: -10 }}
                                className="premium-card rounded-3xl p-8 border"
                            >
                                <Icon
                                    size={40}
                                    className="text-amber-500 mb-6"
                                />

                                <h3 className="text-2xl font-bold mb-6">
                                    {item.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">

                                    {item.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-2 rounded-full bg-slate-100 text-sm"
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