import React from 'react';

export default function Banner() {
    const stats = [
        {
            value: "20+",
            label: "PROYECTOS ENTREGADOS"
        },
        {
            value: "99%",
            label: "RETENCIÓN DE CLIENTES"
        },
        {
            value: "2M+",
            label: "LÍNEAS DE CÓDIGO"
        },
        {
            value: "2",
            label: "MIEMBROS DEL EQUIPO"
        }
    ];

    return (
        <section className="w-full bg-black border-y border-slate-800 px-6 py-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center py-4 md:py-0">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                {stat.value}
                            </h3>
                            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase text-center">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
