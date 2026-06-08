export default function TeamPage() {
    return (
        <main className="min-h-screen py-32">

            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-6xl font-black text-center">
                    Team NIRMAN X
                </h1>

                <p className="text-center mt-6 text-xl text-slate-600">
                    Researchers. Engineers. Innovators.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    <div className="premium-card p-8 rounded-3xl border">
                        <h3 className="text-2xl font-bold">
                            Founder
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Deep Tech Engineering Leadership
                        </p>
                    </div>

                    <div className="premium-card p-8 rounded-3xl border">
                        <h3 className="text-2xl font-bold">
                            AI Division
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Vision, ML and Analytics
                        </p>
                    </div>

                    <div className="premium-card p-8 rounded-3xl border">
                        <h3 className="text-2xl font-bold">
                            Embedded Division
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Firmware & Hardware Systems
                        </p>
                    </div>

                </div>

            </div>

        </main>
    );
}