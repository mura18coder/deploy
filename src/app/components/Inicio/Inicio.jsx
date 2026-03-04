import React from 'react';
import { BarChart3, Users } from 'lucide-react';

export default function Hero({
    badge = "Aceptando nuevos proyectos",
    tituloPrincipal = "Nosotros Construimos,",
    tituloAcento = "Tú Despliegas",
    descripcion = "Productos digitales premium para empresas con visión de futuro. Convertimos problemas complejos en soluciones de software elegantes y escalables.",
    textoBotonPrimario = "Ver Casos de Estudio",
    textoBotonSecundario = "Nuestro Proceso"
}) {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050c0f] px-6 py-20">
            {/* Glows de fondo para profundidad */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* LADO IZQUIERDO: Tipografía Impactante */}
                <div className="flex flex-col space-y-6">
                    <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full w-fit">
                        <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                        <span className="text-sky-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            {badge}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
                        {tituloPrincipal}
                        <span className="text-blue-500 block mt-2">
                            {tituloAcento}
                        </span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
                        {descripcion}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 justify-center">
                        {/* Botón con Glow estilo Stitch */}
                        <button className="w-full sm:w-auto px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] text-sm">
                            {textoBotonPrimario}
                        </button>
                        <button className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border border-slate-700 font-bold rounded-lg hover:bg-slate-800 transition-all text-sm">
                            {textoBotonSecundario}
                        </button>
                    </div>
                </div>

                {/* LADO DERECHO: Dashboard Visual */}
                <div className="relative group perspective-1000">
                    <div className="bg-[#0a161a] border border-slate-800 rounded-3xl p-8 shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:-rotate-x-2">

                        {/* Controles de Ventana */}
                        <div className="flex gap-2 mb-10">
                            <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                            <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                        </div>

                        {/* Widgets Internos */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="h-32 bg-slate-900/40 border border-slate-800/50 rounded-2xl p-5">
                                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                                </div>
                                <div className="w-full h-2 bg-slate-800 rounded-full mb-2"></div>
                                <div className="w-2/3 h-2 bg-slate-800/50 rounded-full"></div>
                            </div>
                            <div className="h-32 bg-slate-900/40 border border-slate-800/50 rounded-2xl p-5">
                                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                                    <Users className="w-4 h-4 text-purple-400" />
                                </div>
                                <div className="w-full h-2 bg-slate-800 rounded-full mb-2"></div>
                                <div className="w-2/3 h-2 bg-slate-800/50 rounded-full"></div>
                            </div>
                        </div>

                        {/* Gráfico de Barras Dinámico */}
                        <div className="h-44 bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex items-end justify-between gap-3">
                            <div className="w-full bg-cyan-500/20 rounded-t-lg h-[40%]"></div>
                            <div className="w-full bg-cyan-500/40 rounded-t-lg h-[70%]"></div>
                            <div className="w-full bg-cyan-500/20 rounded-t-lg h-[30%]"></div>
                            <div className="w-full bg-cyan-500/60 rounded-t-lg h-[85%]"></div>
                            <div className="w-full bg-cyan-400 rounded-t-lg h-[50%] shadow-[0_-5px_15px_rgba(34,211,238,0.3)]"></div>
                        </div>

                        {/* Notificación Flotante */}
                        <div className="absolute bottom-[-15px] right-[-15px] bg-[#0d1d23] border border-cyan-500/30 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
                            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Estado</p>
                                <p className="text-white text-xs font-black">Todos los Sistemas Listos</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}