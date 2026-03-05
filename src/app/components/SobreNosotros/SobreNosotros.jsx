import React from 'react';
import { User, Code2, Rocket, Palette } from 'lucide-react';

export default function SobreNosotros() {

    // Team Data
    const team = [
        {
            name: "Ing. Jesus Mura",
            role: "CEO & Project Manager",
            icon: <Rocket size={20} className="text-cyan-400" />,
            skills: ["COMMUNITY MANAGER", "N8N", "GOOGLE", "NEXTJS", "REACT"],
            gradient: "from-green-500/20 to-brown-500/0",
            url: "https://linktr.ee/jesuspichardo"
        },
        {
            name: "Ing. José López",
            role: "CTO & Full Stack",
            icon: <Code2 size={20} className="text-purple-400" />,
            skills: ["NEXTJS", "NODEJS", "REACT", "JAVASCRIPT", "TYPESCRIPT"],
            gradient: "from-red-500/20 to-orange-500/0",
            url: "https://github.com/jose32coder"
        },
        // {
        //     name: "David Silva",
        //     role: "Design Director",
        //     icon: <Palette size={20} className="text-orange-400" />,
        //     skills: ["UI/UX", "INTERACTION"],
        //     gradient: "from-orange-500/20 to-red-500/0",
        //     url: "https://www.instagram.com/deploy.coders/"
        // }
    ];

    return (
        <section id="sobre-nosotros" className="w-full py-24 px-6 sm:px-12 flex flex-col items-center">
            <div className="max-w-4xl w-full">

                {/* Header Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-[1px] bg-cyan-500"></div>
                        <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">
                            Sobre Nosotros
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
                        Arquitectos del <span className="text-[#3b82f6]">Futuro <br className="hidden md:block" /> Digital</span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                        En Deploy, fusionamos creatividad técnica con rigor de ingeniería. Nuestra misión es construir plataformas que no solo funcionen hoy, sino que escalen sin esfuerzo hacia el mañana. Nos obsesiona la precisión en cada línea de código y la solidez de cada arquitectura.
                    </p>
                </div>

                {/* Team Section */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-white">El Equipo</h3>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group relative bg-[#0a161f]/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 hover:bg-[#111f28] transition-all duration-300 overflow-hidden"
                            >
                                {/* Background Gradient Effect on Hover */}
                                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                <div className="relative z-10">
                                    {/* Header: Avatar & Info */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 transition-colors">
                                            {member.icon}
                                        </div>
                                        <div>
                                            <a href={member.url} target="_blank" rel="noopener noreferrer">
                                                <h4 className="text-white font-bold text-lg hover:text-cyan-400 transition-all ">
                                                    {member.name}
                                                </h4>
                                            </a>
                                            <p className="text-cyan-400 text-[11px] font-medium uppercase tracking-wider">{member.role}</p>
                                        </div>
                                    </div>

                                    {/* Skills / Badges */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {member.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-md text-[10px] font-bold text-slate-400 tracking-wider group-hover:border-slate-500 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
