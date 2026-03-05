import React from 'react';
import { Globe, Smartphone, LayoutGrid, Bot, ArrowRight } from 'lucide-react';

export default function Servicios() {
    return (
        <section id="servicios" className="w-full bg-[#050c0f] py-24 px-6 sm:px-12 flex flex-col items-center">
            <div className="max-w-7xl w-full">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4 block">
                            Nuestros Servicios
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Excelencia en Ingeniería
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Nos especializamos en aplicaciones de alto rendimiento construidas para escalar.
                            Desde el concepto hasta el despliegue, nos encargamos del trabajo pesado.
                        </p>
                    </div>
                    <a href="#" className="group flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors whitespace-nowrap">
                        Explorar Todos los Servicios
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Services Bento Grid using Flex */}
                <div className="flex flex-col gap-6">

                    {/* Top Row */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Desarrollo Web Card (Wider) */}
                        <div className="flex-[2] bg-[#0a161f]/50 border border-slate-800 rounded-3xl p-8 hover:bg-[#0a161f] transition-all group overflow-hidden relative">
                            <div className="relative z-10 w-full md:w-2/3">
                                <div className="w-12 h-12 bg-slate-900/80 border border-slate-700/50 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                                    <Globe size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Desarrollo Web</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    Aplicaciones web de última generación usando React, Next.js y frameworks modernos.
                                    Construimos interfaces rápidas, accesibles y optimizadas para SEO.
                                </p>
                            </div>

                            {/* Abstract Graphic representation */}
                            <div className="mt-6 md:mt-0 md:absolute md:-bottom-6 md:-right-6 w-full md:w-[60%] h-48 bg-[#111f28] rounded-tl-2xl border-t border-l border-slate-800 p-4 shadow-2xl flex flex-col gap-3 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                </div>
                                <div className="w-3/4 h-2 bg-slate-700 rounded-full mt-2" />
                                <div className="w-full h-2 bg-slate-700/50 rounded-full" />
                                <div className="w-5/6 h-2 bg-slate-700/50 rounded-full" />
                                <div className="mt-4 flex gap-2">
                                    <div className="w-8 h-8 rounded bg-cyan-500/20" />
                                    <div className="flex-1 rounded bg-slate-800" />
                                </div>
                            </div>
                        </div>

                        {/* Aplicaciones Móviles Card (Taller/Narrower) */}
                        <div className="flex-[1] bg-[#0a161f]/50 border border-slate-800 rounded-3xl p-8 hover:bg-[#0a161f] transition-all group overflow-hidden relative min-h-[400px]">
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-slate-900/80 border border-slate-700/50 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                                    <Smartphone size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Aplicaciones Móviles</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Experiencias nativas para iOS y Android con un rendimiento fluido usando React Native y Flutter.
                                </p>
                            </div>

                            {/* Abstract Phone Graphic */}
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-[#111f28] rounded-t-[2rem] border-t-4 border-l-4 border-r-4 border-slate-800 p-4 shadow-2xl group-hover:-translate-y-4 transition-transform duration-500">
                                <div className="w-12 h-1 bg-slate-700 mx-auto rounded-full mb-6" />
                                <div className="w-12 h-12 rounded-full bg-cyan-500/20 mb-4" />
                                <div className="w-full h-3 bg-slate-700/50 rounded-full mb-3" />
                                <div className="w-2/3 h-3 bg-slate-700/50 rounded-full mb-6" />
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="h-16 rounded-xl bg-slate-800" />
                                    <div className="h-16 rounded-xl bg-slate-800" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Sistemas de Gestión Card (Narrower) */}
                        <div className="flex-[1] bg-[#0a161f]/50 border border-slate-800 rounded-3xl p-8 hover:bg-[#0a161f] transition-all group overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-slate-900/80 border border-slate-700/50 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                                    <LayoutGrid size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Sistemas de Gestión</h3>
                                <p className="text-slate-400 leading-relaxed mb-12">
                                    Herramientas internas y paneles diseñados para la eficiencia empresarial y el procesamiento de datos en tiempo real.
                                </p>
                            </div>

                            {/* Abstract UI Graphic */}
                            <div className="mt-4 w-full h-32 bg-[#111f28] rounded-xl border border-slate-800 p-4 shadow-xl flex gap-4 group-hover:scale-105 transition-transform duration-500 origin-bottom">
                                <div className="w-1/4 h-full bg-slate-800/50 rounded-lg" />
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="w-full h-6 bg-slate-800/80 rounded-md" />
                                    <div className="w-full flex-1 bg-slate-800/30 rounded-md flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Automatización y Bots Card (Wider) */}
                        <div className="flex-[2] bg-[#0a161f]/50 border border-slate-800 rounded-3xl p-8 hover:bg-[#0a161f] transition-all group overflow-hidden relative flex flex-col justify-between">
                            <div className="relative z-10 w-full md:w-2/3 mb-12 md:mb-0">
                                <div className="w-12 h-12 bg-slate-900/80 border border-slate-700/50 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                                    <Bot size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Automatización y Bots</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Optimizamos tus flujos de trabajo con agentes IA, web scraping y automatización de procesos repetitivos.
                                    Ahorra tiempo y reduce errores drásticamente.
                                </p>
                            </div>

                            {/* Abstract Bot/Automation Graphic */}
                            <div className="md:absolute md:bottom-8 md:right-8 w-full md:w-1/3 flex justify-end group-hover:scale-110 transition-transform duration-500">
                                <div className="relative">
                                    <Bot size={120} className="text-cyan-500/10" strokeWidth={1} />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 animate-ping absolute" />
                                        <div className="w-12 h-12 rounded-full bg-[#0a161f] border-2 border-cyan-400 flex items-center justify-center z-10 relative">
                                            <div className="w-4 h-4 rounded-full bg-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
