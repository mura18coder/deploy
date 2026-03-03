import React from 'react'
import CardExtendida from '../CardExtendida/CardExtendida';
import { proyectosData } from '../../data';

function Proyectos() {
    return (

        <>
            <div className='max-w-7xl mx-auto px-6 flex flex-col items-center justify-between'>
                <div className='flex md:flex-row flex-col justify-between items-start md:items-end w-full mb-16 gap-6'>
                    <div className='flex flex-col max-w-2xl'>
                        <span className='text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2'>Nuestros Trabajos</span>
                        <h3 className='text-4xl md:text-5xl font-bold text-white mb-6'>Proyectos Destacados</h3>
                        <p className='text-slate-400 text-lg leading-relaxed mb-0'>Soluciones reales para problemas complejos. Exploramos cómo hemos ayudado a empresas líderes a transformar su presencia digital.</p>
                    </div>

                    <button className='flex items-center gap-2 text-cyan-400 font-semibold transition-all w-fit hover:text-cyan-300 group'>
                        <span>Ver Todos los Casos</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
                        </svg>
                    </button>
                </div>

                <div className='flex flex-col gap-12 w-full'>
                    {proyectosData.map((proyecto) => (
                        <CardExtendida 
                            key={proyecto.id}
                            titulo={proyecto.titulo}
                            categoria={proyecto.categoria}
                            descripcion={proyecto.descripcion}
                            tags={proyecto.tags}
                            imagen={proyecto.imagen}
                            reverse={proyecto.reverse}
                        />
                    ))}
                </div>
            </div>



        </>
    )
}

export default Proyectos