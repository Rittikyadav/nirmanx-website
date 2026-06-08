"use client";

import Logo from "./Logo";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="backdrop-blur-xl bg-white/80 border-b">

                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    <Logo />

                    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

                        <a
                            href="#vision"
                            className="hover:text-amber-500 transition"
                        >
                            Vision
                        </a>

                        <a
                            href="#domains"
                            className="hover:text-amber-500 transition"
                        >
                            Technologies
                        </a>

                        <a
                            href="#capabilities"
                            className="hover:text-amber-500 transition"
                        >
                            Capabilities
                        </a>

                        <a
                            href="#timeline"
                            className="hover:text-amber-500 transition"
                        >
                            Timeline
                        </a>

                        <a
                            href="#roadmap"
                            className="hover:text-amber-500 transition"
                        >
                            Roadmap
                        </a>

                        <a
                            href="#contact"
                            className="hover:text-amber-500 transition"
                        >
                            Contact
                        </a>

                    </nav>

                    <Button
                        className="bg-amber-500 hover:bg-amber-600 text-black"
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Partner With Us
                    </Button>

                </div>

            </div>
        </header>
    );
}