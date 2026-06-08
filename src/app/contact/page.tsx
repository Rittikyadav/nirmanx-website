export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 pt-32 pb-24">

            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center">

                    <span className="text-amber-500 uppercase tracking-widest font-semibold">
                        Contact NIRMAN X
                    </span>

                    <h1 className="mt-6 text-6xl md:text-7xl font-black">
                        Let's Build The Future Together
                    </h1>

                    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                        Partner with NIRMAN X for Artificial Intelligence,
                        Embedded Systems, Industrial IoT, Cloud Platforms,
                        Electronics Engineering and Semiconductor Innovation.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-12 mt-20">

                    {/* Contact Information */}

                    <div className="premium-card rounded-3xl border p-10 bg-white">

                        <h2 className="text-3xl font-bold">
                            Get In Touch
                        </h2>

                        <p className="mt-4 text-slate-600">
                            Whether you're an industry partner,
                            startup, investor, research organization,
                            or government institution, we'd love to hear from you.
                        </p>

                        <div className="mt-10 space-y-8">

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Email
                                </h3>

                                <p className="text-slate-600">
                                    contact@nirmanx.com
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Domains
                                </h3>

                                <p className="text-slate-600">
                                    AI • Embedded Systems • Industrial IoT
                                </p>

                                <p className="text-slate-600">
                                    Cloud Platforms • Electronics • Semiconductor
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Vision
                                </h3>

                                <p className="text-slate-600">
                                    Made in India. Built for the World.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}

                    <div className="premium-card rounded-3xl border p-10 bg-white">

                        <h2 className="text-3xl font-bold mb-8">
                            Send Us A Message
                        </h2>

                        <form className="space-y-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-amber-400"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-amber-400"
                            />

                            <input
                                type="text"
                                placeholder="Organization / Company"
                                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-amber-400"
                            />

                            <textarea
                                placeholder="Tell us about your project..."
                                className="w-full border rounded-xl p-4 h-40 outline-none focus:ring-2 focus:ring-amber-400"
                            />

                            <button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-600 transition text-black font-semibold py-4 rounded-xl"
                            >
                                Submit Inquiry
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </main>
    );
}