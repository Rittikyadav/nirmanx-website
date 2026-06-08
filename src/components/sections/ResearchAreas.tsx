const researchAreas = [
    "Artificial Intelligence",
    "Computer Vision",
    "Edge AI",
    "Industrial IoT",
    "Embedded Systems",
    "Cloud Infrastructure",
    "Electronics Design",
    "Smart Energy",
    "Digital Twins",
    "FPGA",
    "VLSI",
    "Semiconductor Research",
];

export default function ResearchAreas() {
    return (
        <section className="py-32 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="text-amber-500 uppercase tracking-widest">
                        Research Focus
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Core Research Areas
                    </h2>

                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {researchAreas.map((area) => (
                        <div
                            key={area}
                            className="bg-white border rounded-2xl p-6 text-center"
                        >
                            {area}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}