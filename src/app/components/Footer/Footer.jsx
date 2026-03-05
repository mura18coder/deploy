import React from 'react';
import Link from 'next/link';
import { Mail, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#051114] pt-20 pb-8 px-6 sm:px-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="#inicio" className="flex items-center gap-2">
                            <div className="w-4 h-5 bg-cyan-400 transform -skew-x-12 rounded-[2px] shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Deploy
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Una agencia de software premium que construye productos digitales para el futuro.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400">
                            <a href="mailto:deploy.coders@gmail.com" className="hover:text-cyan-400 transition-colors">
                                <Mail size={20} />
                            </a>
                            <a href="https://linktr.ee/deploy.coders" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                                <Globe size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-2">
                            SERVICIOS
                        </h4>
                        <div className="flex flex-col gap-4">
                            <Link href="#servicios" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors w-fit">
                                Desarrollo Web
                            </Link>
                            <Link href="#servicios" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors w-fit">
                                Aplicaciones Móviles
                            </Link>
                            <Link href="#servicios" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors w-fit">
                                Sistemas de Gestión
                            </Link>
                            <Link href="#servicios" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors w-fit">
                                Automatización y Bots
                            </Link>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-2">
                            COMPAÑÍA
                        </h4>
                        <div className="flex flex-col gap-4">
                            <Link href="#inicio" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors w-fit">
                                Inicio
                            </Link>
                            <Link href="#sobre-nosotros" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors w-fit">
                                Sobre Nosotros
                            </Link>
                            <Link href="#proyectos" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors w-fit">
                                Proyectos
                            </Link>
                            <Link href="#contacto" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors w-fit">
                                Contacto
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Deploy Agency. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-6 text-slate-500 text-xs">
                        <Link href="#" className="hover:text-slate-300 transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="#" className="hover:text-slate-300 transition-colors">
                            Términos de Servicio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
