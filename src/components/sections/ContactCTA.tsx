"use client";

import { Button } from "@/components/ui/button";

export default function ContactCTA() {
    return (
        <section className="py-32 bg-white">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-5xl font-bold text-slate-900">
                    Let's Build The Future Together
                </h2>

                <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                    Partner with NIRMAN X for Artificial Intelligence,
                    Embedded Systems, Industrial IoT, Cloud Platforms,
                    Electronics Engineering and Future Semiconductor Technologies.
                </p>

                <div className="mt-14 grid md:grid-cols-2 gap-8">

                    {/* Contact 1 */}
                    <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50 text-left">

                        <h3 className="text-xl font-bold text-slate-900">
                            Rittik Yadav
                        </h3>

                        <div className="mt-6 space-y-3">

                            <a
                                href="mailto:rittikyadav03@gmail.com"
                                className="block text-slate-700 hover:text-amber-500 transition"
                            >
                                📧 rittikyadav03@gmail.com
                            </a>

                            <a
                                href="tel:+918918282633"
                                className="block text-slate-700 hover:text-amber-500 transition"
                            >
                                📞 +91 89182 82633
                            </a>

                            <a
                                href="https://github.com/Rittikyadav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-slate-700 hover:text-amber-500 transition"
                            >
                                🔗 github.com/Rittikyadav
                            </a>

                        </div>

                    </div>

                    {/* Contact 2 */}
                    <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50 text-left">

                        <h3 className="text-xl font-bold text-slate-900">
                            Ishan Mukherjee
                        </h3>

                        <div className="mt-6 space-y-3">

                            <a
                                href="mailto:mukherjeeishan26@gmail.com"
                                className="block text-slate-700 hover:text-amber-500 transition"
                            >
                                📧 mukherjeeishan26@gmail.com
                            </a>

                            <a
                                href="tel:+916290814385"
                                className="block text-slate-700 hover:text-amber-500 transition"
                            >
                                📞 +91 62908 14385
                            </a>

                        </div>

                    </div>

                </div>

                <div className="mt-12">

                    <Button
                        size="lg"
                        className="bg-amber-500 hover:bg-amber-600 text-black"
                        asChild
                    >
                        <a href="mailto:rittikyadav03@gmail.com">
                            Start a Conversation
                        </a>
                    </Button>

                </div>

                <p className="mt-10 text-sm text-slate-500">
                    Kolkata, West Bengal, India
                </p>

            </div>

        </section>
    );
}