"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Metrics() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-amber-500 uppercase tracking-widest font-semibold">
                        NIRMAN X Impact
                    </span>

                    <h2 className="mt-6 text-5xl font-bold">
                        Building The Future of Deep Tech
                    </h2>

                    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                        A vision-driven engineering company focused on creating
                        indigenous technologies for India and the global market.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">

                    <motion.div
                        whileHover={{ y: -8 }}
                        className="premium-card border rounded-3xl p-8 text-center"
                    >
                        <h3 className="text-6xl font-black text-amber-500">
                            <CountUp end={6} duration={3} />+
                        </h3>

                        <p className="mt-4 text-slate-600 font-medium">
                            Technology Domains
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -8 }}
                        className="premium-card border rounded-3xl p-8 text-center"
                    >
                        <h3 className="text-6xl font-black text-amber-500">
                            <CountUp end={20} duration={3} />+
                        </h3>

                        <p className="mt-4 text-slate-600 font-medium">
                            Future Product Concepts
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -8 }}
                        className="premium-card border rounded-3xl p-8 text-center"
                    >
                        <h3 className="text-6xl font-black text-amber-500">
                            <CountUp end={100} duration={3} />%
                        </h3>

                        <p className="mt-4 text-slate-600 font-medium">
                            Indigenous Innovation Vision
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -8 }}
                        className="premium-card border rounded-3xl p-8 text-center"
                    >
                        <h3 className="text-6xl font-black text-amber-500">
                            <CountUp end={1} duration={3} />
                        </h3>

                        <p className="mt-4 text-slate-600 font-medium">
                            Mission: Make In India
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}