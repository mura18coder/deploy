"use client"; // Importante: Usamos interactividad (abrir/cerrar menú)
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Iconos de hamburguesa y cerrar

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0  backdrop-blur-md border-b border-blue-400 z-[100]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-4 h-5 bg-cyan-400 transform -skew-x-12 rounded-[2px] shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Deploy
                    </span>
                </Link>

                {/* LINKS ESCRITORIO (Se ocultan en móvil con 'hidden md:flex') */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="#proyectos"
                        className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="#servicios"
                        className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Servicios
                    </Link>
                    <Link
                        href="#sobre-nosotros"
                        className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        href="#carreras"
                        className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Carreras
                    </Link>
                    {/* BOTONES ESCRITORIO */}
                    <div className="hidden md:flex items-center gap-3">
                        <button className="px-5 py-2 text-sm font-bold bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            Iniciar Proyecto
                        </button>
                    </div>
                </div>

                {/* BOTONES ESCRITORIO */}

                {/* BOTÓN MENÚ MÓVIL (Solo visible en móviles 'md:hidden') */}
                <div className="md:hidden flex items-center relative z-[110]">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 focus:outline-none"
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <div
                            className={`absolute transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                        >
                            <Menu size={28} />
                        </div>
                        <div
                            className={`absolute transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
                        >
                            <X size={28} />
                        </div>
                    </button>
                </div>

            </div>

            {/* OVERLAY AL FONDO */}
            <div
                className={`fixed top-0 left-0 w-screen h-[100dvh] bg-slate-900/20 backdrop-blur-sm z-[100] md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* MENÚ DESPLEGABLE MÓVIL (Sidebar lateral derecho) */}
            <div
                className={`fixed top-0 right-0 h-[100dvh] w-[80vw] max-w-sm bg-[#050c0f] border-l border-slate-800 shadow-2xl z-[105] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="px-8 py-24 flex flex-col gap-6 overflow-y-auto h-full">
                    <Link
                        href="#proyectos"
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="#servicios"
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Servicios
                    </Link>
                    <Link
                        href="#sobre-nosotros"
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        href="#carreras"
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Carreras
                    </Link>

                    <div className="mt-8 pt-6 border-t border-slate-800">
                        <button className="w-full py-3 bg-cyan-400 text-lg font-bold rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:bg-cyan-300 transition-all active:scale-[0.98]">
                            Iniciar Proyecto
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
