import Image from 'next/image'
import React from 'react'

// Definimos las props con valores por defecto para evitar errores
function CardExtendida({ 
    titulo = "Proyecto", 
    categoria = "App", 
    descripcion = "", 
    tags = [], 
    imagen = "/globe.svg", 
    reverse = false 
}) {
    return (
        <div className={`group flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-[#0a161a] border border-slate-800 rounded-[2rem] overflow-hidden w-full max-w-5xl mx-auto transition-all duration-500 hover:border-slate-600 shadow-2xl`}>
            
            {/* LADO CONTENIDO */}
            <div className='flex flex-col justify-center p-8 md:p-16 w-full md:w-7/12 z-10'>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-12"></div>
                    <p className='text-cyan-400 text-xs font-bold tracking-widest uppercase'>{categoria}</p>
                </div>
                
                <h3 className='text-4xl md:text-5xl font-bold text-white mb-6 transition-colors duration-500 group-hover:text-cyan-50'>
                    {titulo}
                </h3>
                
                <p className='text-slate-400 text-lg leading-relaxed mb-8'>
                    {descripcion}
                </p>
                
                <div className='flex flex-wrap gap-3 mb-10'>
                    {tags.map((tag) => (
                        <span key={tag} className='px-4 py-1 border border-slate-700 rounded-full text-slate-300 text-sm transition-colors duration-300 group-hover:border-cyan-900 group-hover:bg-cyan-900/20'>
                            {tag}
                        </span>
                    ))}
                </div>

                <button className="flex items-center gap-3 text-white font-semibold transition-all w-fit">
                    <span>Ver Caso de Estudio</span>
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </button>
            </div>
            
            {/* LADO IMAGEN */}
            <div className='w-full md:w-5/12 bg-[#112127] flex items-center justify-center p-12 relative overflow-hidden'>
                <div className="relative w-full h-[300px] md:h-[400px] transition-transform duration-700 ease-out group-hover:scale-110">
                    <Image 
                        src={imagen}
                        alt={titulo} 
                        fill 
                        className="object-contain drop-shadow-2xl"
                    />
                </div>
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </div>
    )
}

export default CardExtendida